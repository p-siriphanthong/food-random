const { buildSchema } = require('graphql')

const schema = buildSchema(`
  input RestaurantInput {
    name: String
    latitude: Float
    longitude: Float
  }

  input FoodMenuInput {
    name: String
    image: String
    category: ID
    restaurants: [ID]
  }

  type Restaurant {
    id: ID!
    name: String!
    latitude: Float!
    longitude: Float!
  }

  type FoodCategory {
    id: ID!
    name: String!
  }

  type FoodMenu {
    id: ID!
    name: String!
    image: String!
    category: FoodCategory!
    restaurants: [Restaurant]!
  }

  type Query {
    getRestaurant(id: ID!): Restaurant
    getRestaurants: [Restaurant]

    getFoodCategory(id: ID!): FoodCategory
    getFoodCategories: [FoodCategory]

    getFoodMenu(id: ID!): FoodMenu
    getFoodMenus: [FoodMenu]
    getRandomizedFoodMenu(excluding_categories: [String]): FoodMenu
  }

  type Mutation {
    createRestaurant(input: RestaurantInput!): Restaurant
    updateRestaurant(id: ID!, input: RestaurantInput!): Restaurant
    deleteRestaurant(id: ID!): Restaurant
    
    createFoodCategory(name: String!): FoodCategory
    updateFoodCategory(id: ID!, name: String!): FoodCategory
    deleteFoodCategory(id: ID!): FoodCategory

    createFoodMenu(input: FoodMenuInput!): FoodMenu
    updateFoodMenu(id: ID!, input:  FoodMenuInput!): FoodMenu
    deleteFoodMenu(id: ID!): FoodMenu
  }
`)

module.exports = schema
