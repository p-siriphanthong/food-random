import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useApolloClient } from '@apollo/react-hooks'
import hexToRgba from 'hex-to-rgba'

import { GET_RANDOMIZED_FOOD_MENU } from './graphql'

const ring = keyframes`
  from {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  to {
    width: 250px;
    height: 250px;
    opacity: 0;
  }
`

const Wrapper = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.color.dark};
  background-image: url('/images/background.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
`

const Button = styled.div`
  color: ${props => props.theme.color.dark};
  background: ${props => props.theme.color.primary};
  box-shadow: 12px 12px 24px
    ${props => hexToRgba(props.theme.color.primary, 0.25)};
  border-radius: 1000px;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: bold;
  width: 300px;
  height: 60px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: translateY(-6px);
  }

  &:after {
    content: '';
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 3px solid ${props => props.theme.color.primary};
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    transform: translate(-50%, -50%);
    animation: ${ring} 1.5s infinite;
  }

  &:hover:after,
  &:focus:after {
    animation: none;
    display: none;
  }
`

const App = () => {
  const client = useApolloClient()
  const [loading, setLoading] = useState(false)
  const [food_menu, setFoodMenu] = useState(null)

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
          setFoodMenu(data.food_menu)
          setLoading(false)
        })
    }
  }

  return (
    <Wrapper>
      <Button>What to Eat?</Button>
    </Wrapper>
  )
}

export default App
