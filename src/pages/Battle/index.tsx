import React, { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { Warrior } from 'src/components/Warrior'
import { Loader } from 'src/components/Loader'
import { Skills } from 'src/components/Skills'

import { PROFILE, LOGIN } from 'src/routes/pages'

import { useAuth } from 'src/hooks/use-auth'
import { useSkill, useUpdateSkill } from 'src/hooks/use-skill'
import { useOpponent } from 'src/hooks/use-opponents'

import { Skill } from 'src/ts/types'

import { Container, VS, Result, ResultContainer, Button } from './styles'

type Params = {
  warriorId: string
}

type Match = {
  params: Params
}

interface BattleProps {
  match: Match
}

export const Battle: FC<BattleProps> = ({ match }): JSX.Element => {
  const [auth, loadingAuth] = useAuth()
  const history = useHistory()

  if (!loadingAuth && !auth) {
    history.push(LOGIN)
  }

  const [warrior, loadingSkill] = useSkill()
  const [newWarrior, setNewWarrior] = useState(warrior)

  const [opponent, loadingOpponent] = useOpponent({
    id: match.params.warriorId,
  })
  const [updateSkill, loadingUpdateSkill] = useUpdateSkill()

  const onSubmit = () => {
    history.push(PROFILE)
  }

  const warriorDefeatedOpponent = (
    warrior: Skill,
    opponent: Skill
  ): boolean => {
    if (!warrior || !opponent) return false

    let points = 0

    points += warrior.strength > opponent.strength ? 1 : 0
    points += warrior.dexterity > opponent.dexterity ? 1 : 0
    points += warrior.faith > opponent.faith ? 1 : 0
    points += warrior.wisdom > opponent.wisdom ? 1 : 0
    points += warrior.magic > opponent.magic ? 1 : 0
    points += warrior.agility > opponent.agility ? 1 : 0

    return points >= 3
  }

  const victory = warriorDefeatedOpponent(warrior, opponent)

  const calculate = (value: number, factor: number): number => {
    const LIMIT = 10
    const total = value + factor * Math.floor(Math.random() * LIMIT)
    return total > 0 ? total : 1
  }

  useEffect(() => {
    const setWarrior = async () => {
      if (!loadingSkill && !loadingOpponent) {
        const factor = victory ? 1 : -1
        const input = {
          strength: calculate(warrior.strength, factor),
          magic: calculate(warrior.magic, factor),
          wisdom: calculate(warrior.wisdom, factor),
          dexterity: calculate(warrior.dexterity, factor),
          faith: calculate(warrior.faith, factor),
          agility: calculate(warrior.agility, factor),
        }

        const updatedWarrior = await updateSkill(input)
        setNewWarrior(updatedWarrior)
      }
    }

    setWarrior()
  }, [loadingSkill, loadingOpponent, victory]) // eslint-disable-line

  return (
    <>
      <Header authenticated={auth} />
      {loadingSkill || loadingOpponent || loadingUpdateSkill ? (
        <Loader />
      ) : (
        <>
          <ResultContainer>
            <Result win={victory}>
              {victory ? `You won!!!` : `You lost!!!`}
            </Result>
          </ResultContainer>

          <Container>
            <Warrior warrior={warrior} opponent={opponent} />
            <VS>VS</VS>
            <Warrior warrior={opponent} right />
          </Container>

          <ResultContainer>
            <Result win={victory}>{`Your new items are:`}</Result>
            <Skills warrior={newWarrior || warrior} />
          </ResultContainer>

          <Button large node="button" waves="light" onClick={onSubmit}>
            Back to profile
          </Button>
        </>
      )}
      <Footer />
    </>
  )
}
