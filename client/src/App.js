import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const GET_FOOD_CATEGORIES = gql`
  {
    getFoodCategories {
      id
      name
    }
  }
`

function App() {
  const { loading, error, data } = useQuery(GET_FOOD_CATEGORIES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return data.getFoodCategories.map(d => (
    <div>
      id: {d.id}, name: {d.name}
    </div>
  ))
}

export default App
