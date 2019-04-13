var express = require('express')
var graphqlHTTP = require('express-graphql')
var PORT = process.env.PORT || 1212

var schema = require('./schema')

var app = express()

app.use('/', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Ready running on http://localhost:${PORT}`)
})
