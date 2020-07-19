import React from 'react'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { Container } from 'src/components/Shared'

import { useAuth } from 'src/hooks/use-auth'

import logo from 'src/public/img/logo.png'

import { Logo } from './styles'

export const Home = (): JSX.Element => {
  const [auth] = useAuth()

  return (
    <>
      <Header authenticated={auth} />
      <Container>
        <Logo src={logo} />
      </Container>
      <Footer />
    </>
  )
}
