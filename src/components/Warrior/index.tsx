import React, { FC } from 'react'

import { TribeImage } from 'src/components/TribeImage'
import { Skills } from 'src/components/Skills'

import { Skill } from 'src/ts/types'

interface WarriorProps {
  right?: boolean
  warrior: Skill
  opponent?: Skill
}

export const Warrior: FC<WarriorProps> = ({
  right = false,
  warrior,
  opponent = undefined,
}): JSX.Element => {
  return right ? (
    <>
      <Skills warrior={warrior} opponent={opponent} />
      <TribeImage warrior={warrior} />
    </>
  ) : (
    <>
      <TribeImage warrior={warrior} />
      <Skills warrior={warrior} opponent={opponent} />
    </>
  )
}
