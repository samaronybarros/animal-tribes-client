import styled from 'styled-components'

type DescriptionProps = {
  highlighted: boolean
}

export const Description = styled.p`
  color: ${({ highlighted }: DescriptionProps) =>
    highlighted ? '#29b2a5' : '#F44336'};
  font-size: 50px;
`

export const EnemyContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
`
