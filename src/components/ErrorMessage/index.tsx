import React, { FC } from 'react'
import { Container, Description } from './styles'

type Message = {
  errors: string[]
}

type Error = {
  message: Message
}

interface ItemProps {
  errors: Error[] | null
}

export const ErrorMessage: FC<ItemProps> = ({ errors }): JSX.Element => {
  return (
    <Container>
      {!errors ||
        errors.map((error) =>
          error.message.errors.map((description, index) => (
            <Description key={index}>{description}</Description>
          ))
        )}
    </Container>
  )
}
