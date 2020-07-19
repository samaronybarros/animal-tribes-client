import styled from 'styled-components'
import { Container as ContainerMain } from 'src/components/Shared'

export const Container = styled(ContainerMain)`
  flex-wrap: wrap;
  flex-direction: row;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
`
