/** @format */

const faunadb = require('faunadb')
const q = faunadb.query

exports.handler = async (event) => {
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  })

  const session = {
    data: JSON.parse(event.body),
  }
  console.log('Function `sessionCreate` invoked', session)

  return client
    .query(q.Create(q.Collection('sessions'), session))
    .then(() => {
      console.log('Success')
      return {
        statusCode: 200,
        body: 'Ok',
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
