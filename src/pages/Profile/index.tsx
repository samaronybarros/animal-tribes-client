import React from 'react'
import { useHistory } from 'react-router-dom'
import _ from 'lodash'

import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { Enemy } from 'src/components/Enemy'
import { Loader } from 'src/components/Loader'
import { Container } from 'src/components/Shared'

import { Description, EnemyContainer } from './styles'

import images, { noTribe } from 'src/public/img/tribes'

import { useAuth } from 'src/hooks/use-auth'
import { useSkill } from 'src/hooks/use-skill'
import { useOpponents } from 'src/hooks/use-opponents'
import { Warrior } from 'src/components/Warrior'

import { LOGIN } from 'src/routes/pages'

export const Profile = (): JSX.Element => {
  const [auth, loadingAuth] = useAuth()
  const history = useHistory()

  if (!loadingAuth && !auth) {
    history.push(LOGIN)
  }

  const [skill, loading] = useSkill()
  const [opponents, loadingOpponents] = useOpponents()

  return (
    <>
      <Header authenticated={auth} />

      <Container>
        {loading || loadingOpponents ? (
          <Loader />
        ) : (
          <>
            <Description
              highlighted
            >{`Warrior: ${skill?.warrior.warriorname}`}</Description>

            <Warrior warrior={skill} />

            <Description
              highlighted={false}
            >{`Challenge your opponent`}</Description>

            <EnemyContainer>
              {opponents?.map((opponent) => {
                const imagePos = _.findIndex(
                  images,
                  (tribe) => tribe.id === opponent.tribe
                )
                return (
                  <Enemy
                    key={opponent.id}
                    id={opponent.id}
                    image={imagePos >= 0 ? images[imagePos].img : noTribe}
                    tribe={opponent.tribe}
                    name={opponent.warriorname}
                  />
                )
              })}
            </EnemyContainer>
          </>
        )}
      </Container>
      <Footer />
    </>
  )
}
