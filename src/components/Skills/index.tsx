import React, { FC } from 'react'

import { Item } from 'src/components/Item'

import strength from 'src/public/img/items/strength.png'
import dexterity from 'src/public/img/items/dexterity.jpg'
import faith from 'src/public/img/items/faith.jpg'
import wisdom from 'src/public/img/items/wisdom.jpg'
import magic from 'src/public/img/items/magic.jpg'
import agility from 'src/public/img/items/agility.jpg'

import { SkillContainer } from './styles'

import { Skill, ResultColor } from 'src/ts/types'

interface SkillsProps {
  warrior: Skill
  opponent?: Skill
}

export const Skills: FC<SkillsProps> = ({
  warrior,
  opponent = null,
}): JSX.Element => {
  const fight = (warrior: number, opponent: number): ResultColor => {
    if (warrior > opponent) {
      return ResultColor.WIN
    } else if (warrior < opponent) {
      return ResultColor.LOSE
    }

    return ResultColor.DRAW
  }

  return (
    <SkillContainer>
      <Item
        image={strength}
        description={'Strength'}
        value={warrior.strength}
        color={
          opponent ? fight(warrior.strength, opponent.strength) : undefined
        }
      />
      <Item
        image={dexterity}
        description={'Dexterity'}
        value={warrior.dexterity}
        color={
          opponent ? fight(warrior.dexterity, opponent.dexterity) : undefined
        }
      />
      <Item
        image={faith}
        description={'Faith'}
        value={warrior.faith}
        color={opponent ? fight(warrior.faith, opponent.faith) : undefined}
      />
      <Item
        image={wisdom}
        description={'Wisdom'}
        value={warrior.wisdom}
        color={opponent ? fight(warrior.wisdom, opponent.wisdom) : undefined}
      />
      <Item
        image={magic}
        description={'Magic'}
        value={warrior.magic}
        color={opponent ? fight(warrior.magic, opponent.magic) : undefined}
      />
      <Item
        image={agility}
        description={'Agility'}
        value={warrior.agility}
        color={opponent ? fight(warrior.agility, opponent.agility) : undefined}
      />
    </SkillContainer>
  )
}
