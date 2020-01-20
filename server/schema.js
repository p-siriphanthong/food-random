const { buildSchema } = require('graphql')

const schema = buildSchema(`
  type Email{
    email: String!
  }

  type User{
    firstName: String!
    lastName: String!
    emails: [Email]
  }

  type Query {
    user: User
  }
`)

module.exports = schema
