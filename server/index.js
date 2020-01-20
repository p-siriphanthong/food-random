const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const graphqlHTTP = require('express-graphql')

const schema = require('./schema')
const resolvers = require('./resolvers')

const app = express()
const PORT = process.env.PORT || 5000

const mongo_db = process.env.MONGO_DB || 'mongodb://localhost/graphqdb'
mongoose.Promise = global.Promise
mongoose.connect(mongo_db)

app.use(bodyParser.json())

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})