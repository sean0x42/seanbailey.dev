/** @format */

const { table } = require('table')
const faunadb = require('faunadb')
const chalk = require('chalk')
const q = faunadb.query

console.log(chalk.dim('Connecting to database...'))
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
})

async function fetchVisitRefs(next) {
  let { data, after } = await client.query(
    q.Paginate(q.Match(q.Index('allVisits')), {
      after: next,
    }),
  )

  if (after) {
    const nextData = await fetchVisitRefs(after)
    data = [...data, ...nextData]
  }

  return data
}

async function fetchVisits(refs) {
  const query = refs.map((ref) => q.Get(ref))
  return client.query(query)
}

async function fetchData() {
  const refs = await fetchVisitRefs()
  return await fetchVisits(refs)
}

function getSessions(visits) {
  return new Set(visits.map((visit) => visit.data.session))
}

function getVisitsPerPage(visits) {
  const result = {}

  visits.forEach((visit) => {
    if (!result.hasOwnProperty(visit.data.url)) {
      result[visit.data.url] = []
    }

    result[visit.data.url].push(visit)
  })

  return result
}

async function run() {
  console.log(chalk.dim('Collecting data...'))
  const visits = await fetchData()

  console.log(chalk.green('Done!\n'))

  const sessions = getSessions(visits)
  const visitsPerPage = getVisitsPerPage(visits)

  console.log('Total visits:', visits.length)
  console.log('Total unique sessions:', sessions.size)

  console.log(chalk.bold('\nVisits per page'))
  const tableData = [[chalk.bold('URL'), chalk.bold('Visits')]]
  const config = {
    columns: {
      0: {
        alignment: 'left',
      },
      1: {
        alignment: 'right',
      },
    },
  }

  Object.entries(visitsPerPage).forEach(([page, visits]) => {
    tableData.push([page, visits.length])
  })

  console.log(table(tableData, config))
}

run()
