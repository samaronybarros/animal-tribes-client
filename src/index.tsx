import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import styled, { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const GlobalStyle = createGlobalStyle`
  main {
    flex: 1 0 auto;
  }
`

const Wrapper = styled.div`
  background-color: #000000;
  color: #ffffff;
  font-family: 'Girassol', cursive;
  letter-spacing: 5px;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

ReactDOM.render(
  <Wrapper>
    <React.StrictMode>
      <GlobalStyle />
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Wrapper>,

  document.getElementById('root')
)
