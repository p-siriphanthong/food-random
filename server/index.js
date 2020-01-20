const express = require('express')
const bodyParser = require('body-parser')
const graphqlHTTP = require('express-graphql')

const schema = require('./schema')

const app = express()
const PORT = process.env.PORT || 5000

app.use(bodyParser.json())

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: {},
  graphiql: true,
}))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})