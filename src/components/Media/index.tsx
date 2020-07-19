import React, { FC } from 'react'
import { Container, Title, Img } from './styles'
import { MediaBox } from 'react-materialize'

interface MediaProps {
  id: string
  title: string
  image: string
  selected?: boolean
  onClick?: () => void
}

export const Media: FC<MediaProps> = ({
  id,
  title,
  image,
  selected,
  onClick,
}): JSX.Element => {
  return (
    <Container selected={selected}>
      <MediaBox
        id={id}
        options={{
          inDuration: 275,
          outDuration: 200,
        }}
      >
        <Img alt={image} src={image} width="250" />
      </MediaBox>
      <Title selected={selected} onClick={onClick}>
        {title}
      </Title>
    </Container>
  )
}
