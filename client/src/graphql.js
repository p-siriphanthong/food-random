import { gql } from 'apollo-boost'

export const GET_RANDOMIZED_FOOD_MENU = gql`
  query getRandomizedFoodMenu($excluding_categories: [String]) {
    food_menu: getRandomizedFoodMenu(
      excluding_categories: $excluding_categories
    ) {
      id
      name
      image
      latitude
      longitude
      category {
        id
        name
      }
    }
  }
`
