import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import 'react-notifications/lib/notifications.css'

import AppComponent from './App'
import * as serviceWorker from './serviceWorker'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    color: white;
    background-color: ${props => props.theme.color.dark};
    font-family: 'Nunito', sans-serif;
    margin: 0;
  }
`

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000/graphql'
      : '/graphql',
})

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppComponent />
    </ThemeProvider>
  </ApolloProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
