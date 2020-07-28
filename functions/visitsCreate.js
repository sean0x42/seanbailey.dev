/** @format */

const faunadb = require('faunadb')
const q = faunadb.query

exports.handler = async (event) => {
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  })

  const visit = {
    data: JSON.parse(event.body),
  }
  console.log('Function `visitsCreate` invoked', visit)

  return client
    .query(q.Create(q.Collection('visits'), visit))
    .then((response) => {
      console.log('Success')
      return {
        statusCode: 200,
        body: JSON.stringify(response),
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
