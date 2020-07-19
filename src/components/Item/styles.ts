import styled from 'styled-components'
import { ResultColor } from 'src/ts/types'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  padding: 5px;
  border: 1px solid #29b2a5;
  border-radius: 5px;
  width: 150px;
  height: 150px;
`

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border: 1px solid #29b2a5;
  border-radius: 5px;
`

export const Description = styled.p`
  font-size: 12px;
`

interface ValueProps {
  color?: ResultColor
}

export const Value = styled.p`
  color: ${({ color }: ValueProps) => color || '#FFFFFF'};
`
