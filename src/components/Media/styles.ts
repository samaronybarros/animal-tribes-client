import styled from 'styled-components'

type SelectedProps = {
  selected?: boolean
}

export const Container = styled.div`
  padding: 20px;
  align-items: center;
  justify-content: center;
  transform: ${({ selected }: SelectedProps) =>
    selected ? 'rotateZ(-5deg) rotateX(5deg)' : null};
  transition: 500ms all;
  border: ${({ selected }: SelectedProps) =>
    selected ? '3px solid #29B2A5' : null};
  box-shadow: ${({ selected }: SelectedProps) =>
    selected ? '3px 3px 3px #29B2A5' : null};
`

export const Title = styled.p`
  text-align: center;
  font-size: 20px;
  cursor: pointer;

  color: ${({ selected }: SelectedProps) => (selected ? '#29B2A5' : '#FFFFFF')};

  &:hover {
    color: ${({ selected }: SelectedProps) =>
      selected ? '#29B2A5' : '#10e0cc'};
  }
`

export const Img = styled.img`
  float: left;
  width: 200px;
  height: auto;
  background-size: cover;
`
