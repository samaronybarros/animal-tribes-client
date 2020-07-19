import React, { FC } from 'react'
import _ from 'lodash'

import images from 'src/public/img/tribes'

import { TribeContainer, TribeImg } from './styles'

import { Skill } from 'src/ts/types'

interface TribeImageProps {
  warrior: Skill
}

export const TribeImage: FC<TribeImageProps> = ({ warrior }): JSX.Element => {
  return (
    <TribeContainer>
      <TribeImg
        src={
          images[
            _.findIndex(images, (tribe) => tribe.id === warrior?.warrior?.tribe)
          ].img
        }
      />
    </TribeContainer>
  )
}
