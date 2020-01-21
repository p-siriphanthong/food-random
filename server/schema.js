const { buildSchema } = require('graphql')

const schema = buildSchema(`
  input FoodMenuInput {
    name: String
    image: String
    latitude: Float
    longitude: Float
    category: ID
  }

  type FoodCategory {
    id: ID!
    name: String!
  }

  type FoodMenu {
    id: ID!
    name: String!
    image: String!
    latitude: Float!
    longitude: Float!
    category: FoodCategory!
  }

  type Query {
    getFoodCategory(id: ID!): FoodCategory
    getFoodCategories: [FoodCategory]
    getFoodMenu(id: ID!): FoodMenu
    getFoodMenus: [FoodMenu]
  }

  type Mutation {
    createFoodCategory(name: String!): FoodCategory
    updateFoodCategory(id: ID!, name: String!): FoodCategory
    deleteFoodCategory(id: ID!): FoodCategory
    createFoodMenu(input: FoodMenuInput!): FoodMenu
    updateFoodMenu(id: ID!, input:  FoodMenuInput!): FoodMenu
    deleteFoodMenu(id: ID!): FoodMenu
  }
`)

module.exports = schema
