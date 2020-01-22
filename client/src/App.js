import React, { useState } from 'react'
import { useApolloClient } from '@apollo/react-hooks'
import { NotificationContainer, NotificationManager } from 'react-notifications'

import { GET_RANDOMIZED_FOOD_MENU } from './graphql'
import Loading from './components/loading'
import HomePage from './components/pages/home'
import ResultPage from './components/pages/result'

const App = () => {
  const client = useApolloClient()
  const [loading, setLoading] = useState(false)
  const [foodMenu, setFoodMenu] = useState(null)
  const [excludingCategories, setExcludingCategories] = useState([])

  const fetchFoodMenu = (newExcludingCategories = excludingCategories) => {
    if (!loading) {
      setLoading(true)
      setExcludingCategories(newExcludingCategories)
      client
        .query({
          query: GET_RANDOMIZED_FOOD_MENU,
          variables: { excluding_categories: newExcludingCategories },
          fetchPolicy: 'network-only',
        })
        .then(({ data }) => {
          setTimeout(() => {
            setFoodMenu(data.foodMenu)
            setLoading(false)
            if (!data.foodMenu) {
              NotificationManager.error('No food menu for you', 'Sorry...')
            }
          }, 300)
        })
    }
  }

  return (
    <>
      <NotificationContainer />
      <Loading isLoading={loading} />
      {foodMenu ? (
        <ResultPage
          foodMenu={foodMenu}
          excludingCategories={excludingCategories}
          fetchFoodMenu={fetchFoodMenu}
        />
      ) : (
        <HomePage fetchFoodMenu={fetchFoodMenu} />
      )}
    </>
  )
}

export default App
