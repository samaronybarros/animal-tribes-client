import React, { FC } from 'react'
import { BATTLE } from 'src/routes/pages'
import { Container, Tribe, Image, Name, Link } from './styles'

interface EnemyProps {
  id: string
  tribe: string
  image: string
  name: string
}

export const Enemy: FC<EnemyProps> = ({
  id,
  tribe,
  image,
  name,
}): JSX.Element => {
  return (
    <Link to={`${BATTLE}/${id}`}>
      <Container>
        <Tribe>{tribe}</Tribe>
        <Image src={image} />
        <Name>{name}</Name>
      </Container>
    </Link>
  )
}
