import styled from 'styled-components'

import { TextInput, Button as MaterializedButton } from 'react-materialize'

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.p`
  font-size: 50px;
  padding-top: 50px;
`

export const Paragraph = styled.p`
  font-size: 20px;
  padding: 20px 70px;
`

export const ContainerInputs = styled.div`
  flex-direction: column;
  width: 60%;
`

export const Input = styled(TextInput)`
  color: #ffffff;
  font-family: 'Girassol', cursive;
  letter-spacing: 5px;
  width: 100%;
`

export const ContainerButtons = styled.div`
  flex-direction: row;
  padding-top: 20px;
`

export const Button = styled<any>(MaterializedButton)`
  margin: 0 10px 0 0;
`
