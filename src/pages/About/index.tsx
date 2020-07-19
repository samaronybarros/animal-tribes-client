import React from 'react'
import { Button } from 'react-materialize'
import { useHistory } from 'react-router-dom'

import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { Container, Title, Paragraph } from 'src/components/Shared'

import { useAuth } from 'src/hooks/use-auth'

import { HOME, PROFILE } from 'src/routes/pages'

export const About = (): JSX.Element => {
  const [auth, loadingAuth] = useAuth()
  const history = useHistory()

  const onClick = () => {
    history.push(!loadingAuth && auth ? PROFILE : HOME)
  }

  return (
    <>
      <Header authenticated={auth} />
      <Container>
        <Title>About the Game</Title>
        <Paragraph>
          In a distant future, the human race mixed human DNA with animal DNA.
          The result was a creation...
        </Paragraph>

        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et leo
          dictum nunc sodales pulvinar. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Donec ac urna vel odio
          feugiat sagittis sit amet non ante. Vestibulum volutpat laoreet tortor
          et pellentesque. Nulla sed ligula lacus. Nunc et vulputate magna, ut
          tristique felis. Sed et sollicitudin lorem. Quisque sit amet tellus
          enim. Nulla facilisi. Ut efficitur ex sapien, a congue velit hendrerit
          vitae. In bibendum sapien quis metus volutpat viverra. Vestibulum
          aliquam nulla dolor, in tristique nulla egestas vitae. Nam commodo in
          lacus ut dapibus. Mauris eget semper lorem. Nulla neque mauris,
          lobortis non tellus vitae, porta aliquet dui.
        </Paragraph>

        <Paragraph>
          Integer quis tincidunt lectus. Duis tincidunt ornare pretium. In velit
          quam, pellentesque sed nibh eget, tempus sodales eros. Maecenas turpis
          urna, vehicula nec convallis non, dignissim in purus. Quisque commodo
          felis urna, nec mattis lorem placerat viverra. Quisque tincidunt nibh
          sit amet ante fermentum, non varius metus imperdiet. Vivamus pharetra
          in massa vitae dictum. Sed non magna bibendum, venenatis nibh eget,
          laoreet elit. Etiam luctus nibh at purus feugiat rhoncus.
        </Paragraph>
        <Button large node="button" waves="light" onClick={onClick}>
          {`Back to ${auth ? 'Profile' : 'Home'}`}
        </Button>
      </Container>
      <Footer />
    </>
  )
}
