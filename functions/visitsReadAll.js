/** @format */

const faunadb = require('faunadb')
const q = faunadb.query

exports.handler = async () => {
  console.log('Function `visitsReadAll` invoked')

  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  })

  return client
    .query(q.Paginate(q.Match(q.Index('allVisits'))))
    .then(async (response) => {
      const visitRefs = response.data
      console.log(`Found ${visitRefs.length} visits`)

      const getAllVisitsQuery = visitRefs.map((ref) => q.Get(ref))

      const data = await client.query(getAllVisitsQuery)
      return {
        statusCode: 200,
        body: JSON.stringify(data),
      }
    })
    .catch((error) => {
      console.error('Error', error)
      return {
        statusCode: 500,
        body:
          'An internal server error has occurred. A developer has been dispatched.',
      }
    })
}
