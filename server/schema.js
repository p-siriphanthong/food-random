const { buildSchema } = require('graphql')

const schema = buildSchema(`
  input FoodInput {
    name: String
    image: String
    category: ID
    latitude: Float
    longitude: Float
  }

  type FoodCategory {
    name: String!
  }

  type Food {
    name: String!
    image: String!
    category: FoodCategory!
    latitude: Float!
    longitude: Float!
  }

  type Query {
    getFoodCategory(id: ID!): FoodCategory
    getFoodCategories: [FoodCategory]
    getFood(id: ID!): Food
    getFoods: [Food]
  }

  type Mutation {
    createFoodCategory(name: String!): FoodCategory
    updateFoodCategory(id: ID!, name: String!): FoodCategory
    deleteFoodCategory(id: ID!): FoodCategory
    createFood(input: FoodInput!): Food
    updateFood(id: ID!, input: FoodInput!): Food
    deleteFood(id: ID!): Food
  }
`)

module.exports = schema
