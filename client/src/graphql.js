import { gql } from 'apollo-boost'

export const GET_FOOD_CATEGORIES = gql`
  {
    getFoodCategories {
      id
      name
    }
  }
`
