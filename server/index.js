const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const graphqlHTTP = require('express-graphql')

const schema = require('./schema')
const resolvers = require('./resolvers')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(bodyParser.json())

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})