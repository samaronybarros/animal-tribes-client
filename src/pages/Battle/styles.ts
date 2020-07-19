import { Button as MaterializedButton } from 'react-materialize'
import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

type ResultProps = {
  win: boolean
}

export const ResultContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 50px;
`

export const Result = styled.p`
  color: ${({ win }: ResultProps) => (win ? '#29b2a5' : '#F44336')};
  font-size: 50px;
`

export const VS = styled.p`
  font-size: 100px;
`

export const Button = styled<any>(MaterializedButton)``
