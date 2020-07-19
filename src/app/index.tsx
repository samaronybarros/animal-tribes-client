import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import Routes from 'src/routes'
import config from 'src/config'

const client = new ApolloClient({
  uri: config.baseUrl,
  request: async (operation) => {
    const token = window.localStorage.getItem('token')
    operation.setContext({
      headers: {
        Authorization: token || '',
      },
    })
  },
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  )
}

export default App
