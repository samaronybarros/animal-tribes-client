import React, { FC } from 'react'
import { Container, Description, Image, Value } from './styles'
import { ResultColor } from 'src/ts/types'

interface ItemProps {
  description: string
  image: string
  value: number
  color?: ResultColor
}

export const Item: FC<ItemProps> = ({
  description,
  image,
  value,
  color,
}): JSX.Element => {
  return (
    <Container>
      <Description>{description}</Description>
      <Image src={image} />
      <Value color={color}>{value}</Value>
    </Container>
  )
}
