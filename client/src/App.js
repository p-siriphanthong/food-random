import React, { useState } from 'react'
import { useApolloClient } from '@apollo/react-hooks'

import { GET_RANDOMIZED_FOOD_MENU } from './graphql'
import Loading from './components/loading'
import HomePage from './components/pages/home'
import ResultPage from './components/pages/result'

const App = () => {
  const client = useApolloClient()
  const [loading, setLoading] = useState(false)
  const [foodMenu, setFoodMenu] = useState(null)

  const fetchFoodMenu = () => {
    if (!loading) {
      setLoading(true)
      client
        .query({
          query: GET_RANDOMIZED_FOOD_MENU,
          variables: { excluding_categories: [] },
          fetchPolicy: 'network-only',
        })
        .then(({ data }) => {
          setTimeout(() => {
            setFoodMenu(data.foodMenu)
            setLoading(false)
          }, 300)
        })
    }
  }

  return (
    <>
      <Loading isLoading={loading} />
      {foodMenu ? (
        <ResultPage foodMenu={foodMenu} />
      ) : (
        <HomePage fetchFoodMenu={fetchFoodMenu} />
      )}
    </>
  )
}

export default App
