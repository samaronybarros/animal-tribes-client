import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import _ from 'lodash'

import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { Title, Button } from 'src/components/Shared'
import { Media } from 'src/components/Media'
import { Loader } from 'src/components/Loader'
import { Container, TitleContainer, ButtonContainer } from './styles'

import { SIGNUP, PROFILE, HOME } from 'src/routes/pages'

import images from 'src/public/img/tribes'

import { useAuth } from 'src/hooks/use-auth'
import { useTribes } from 'src/hooks/use-tribe'

export const Tribe = (): JSX.Element => {
  const [tribes, setTribes] = useState([...images])
  const [selectedTribe, setSelectedTribe] = useState(images[0].id)
  const [updateTribe, loading] = useTribes()
  const warriorId = localStorage.getItem('warriorId')

  const [auth, loadingAuth] = useAuth()
  const history = useHistory()

  if (!loadingAuth && auth) {
    history.push(PROFILE)
  }

  if (!loadingAuth && !auth && !warriorId) {
    history.push(HOME)
  }

  const onSelect = (name: string): void => {
    tribes.map((tribe) => (tribe.selected = false))
    const pos = _.findIndex(tribes, (tribe) => tribe.name === name)
    tribes[pos].selected = true
    setSelectedTribe(tribes[pos].id)
    setTribes([...tribes])
  }

  const onSubmit = async (event: any) => {
    event.preventDefault()

    const isSucess = await updateTribe({ tribe: selectedTribe })

    if (isSucess) {
      history.push(PROFILE)
    }
  }

  const onBack = () => {
    history.push(SIGNUP)
  }

  return (
    <>
      <Header authenticated={auth} />
      <TitleContainer>
        <Title>Choose your tribe</Title>
      </TitleContainer>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Container>
            {tribes.map((image, index) => (
              <Media
                key={index}
                id={index.toString()}
                title={image.name}
                image={image.img}
                selected={image.selected}
                onClick={() => onSelect(image.name)}
              />
            ))}
          </Container>
          <ButtonContainer>
            <Button
              large
              node="button"
              waves="light"
              onClick={onSubmit}
              disabled={!warriorId}
            >
              Sing Up
            </Button>
            <Button
              large
              className="red"
              node="button"
              waves="light"
              onClick={onBack}
            >
              Back
            </Button>
          </ButtonContainer>
        </>
      )}
      <Footer />
    </>
  )
}
