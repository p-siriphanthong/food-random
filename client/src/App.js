import React, { useState } from 'react'
import { useApolloClient } from '@apollo/react-hooks'
import { GET_FOOD_CATEGORIES } from './graphql'

const App = () => {
  const client = useApolloClient()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const fetchData = () => {
    if (!loading) {
      setLoading(true)
      client
        .query({
          query: GET_FOOD_CATEGORIES,
          fetchPolicy: 'network-only',
        })
        .then(({ data }) => {
          setData(data.getFoodCategories)
          setLoading(false)
        })
    }
  }

  return (
    <>
      <button onClick={fetchData}>click</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map(d => (
          <div key={d.id}>
            id: {d.id}, name: {d.name}
          </div>
        ))
      )}
    </>
  )
}

export default App
