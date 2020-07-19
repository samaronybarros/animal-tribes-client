import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const Link = styled(RouterLink)`
  color: #fff;
`

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

export const Tribe = styled.p`
  font-size: 12px;
`

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border: 1px solid #29b2a5;
  border-radius: 5px;
`

export const Name = styled.p``
