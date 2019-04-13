const express = require('express')
const graphqlHTTP = require('express-graphql')
const PORT = process.env.PORT || 1212

const schema = require('./schema')

const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log(`Ready running on http://localhost:${PORT}`)
})