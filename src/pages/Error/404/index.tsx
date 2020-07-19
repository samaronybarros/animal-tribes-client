import React from 'react'
import { Button } from 'react-materialize'
import { useHistory } from 'react-router-dom'

import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { Container, Title } from 'src/components/Shared'

import { useAuth } from 'src/hooks/use-auth'

import { HOME, PROFILE } from 'src/routes/pages'

import skeleton from 'src/public/img/skeleton.png'

import { ErrorImage } from './styles'

export const Error404 = (): JSX.Element => {
  const [auth, loadingAuth] = useAuth()
  const history = useHistory()

  const onSubmit = () => {
    history.push(!loadingAuth && auth ? PROFILE : HOME)
  }

  return (
    <>
      <Header authenticated={auth} />
      <Container>
        <Title>Page not found</Title>
        <ErrorImage src={skeleton} width="40%" />
        <Button large node="button" waves="light" onClick={onSubmit}>
          {`Back to ${auth ? 'Profile' : 'Home'}`}
        </Button>
      </Container>
      <Footer />
    </>
  )
}
