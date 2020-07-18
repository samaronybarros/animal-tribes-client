import React from 'react'
import { StyledFooter } from './styles'

type LinkProps = {
  description: string
  to: string
}

const Link = ({ description, to }: LinkProps): JSX.Element => (
  <li>
    <a className="grey-text text-lighten-3" href={to}>
      {description}
    </a>
  </li>
)

export const Footer = (): JSX.Element => {
  return (
    <StyledFooter
      className="example"
      copyrights={`Animal Tribes ${new Date().getFullYear()} © All Rights Reserved`}
      links={
        <ul>
          <Link description="Sam Barros" to="http://sambarros.com/" />
          <Link description="Medium" to="https://medium.com/@samarony.barros" />
          <Link
            description="Instagram"
            to="https://www.instagram.com/sam_barros_/"
          />
          <Link
            description="Linkedin"
            to="https://www.linkedin.com/in/sam-barros/"
          />
          <Link description="About the game" to="/about" />
        </ul>
      }
    >
      <h5 className="white-text">Animal Tribes</h5>
      <p className="grey-text text-lighten-4">
        This game was created for didactic reasons. You can find how to create
        this game right here.
      </p>
    </StyledFooter>
  )
}
