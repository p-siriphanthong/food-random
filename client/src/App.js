import React, { useState } from 'react'
import { useApolloClient } from '@apollo/react-hooks'
import { GET_RANDOMIZED_FOOD_MENU } from './graphql'

const App = () => {
  const client = useApolloClient()
  const [loading, setLoading] = useState(false)
  const [food_menu, setFoodMenu] = useState(null)

  const getFoodMenu = () => {
    if (!loading) {
      setLoading(true)
      client
        .query({
          query: GET_RANDOMIZED_FOOD_MENU,
          variables: { excluding_categories: [] },
          fetchPolicy: 'network-only',
        })
        .then(({ data }) => {
          setFoodMenu(data.food_menu)
          setLoading(false)
        })
    }
  }

  return (
    <>
      <button onClick={getFoodMenu}>click</button>
      {loading ? (
        <p>Loading...</p>
      ) : food_menu ? (
        <div key={food_menu.id}>
          id: {food_menu.id}, name: {food_menu.name}, category_id:{' '}
          {food_menu.category.id}
        </div>
      ) : null}
    </>
  )
}

export default App
