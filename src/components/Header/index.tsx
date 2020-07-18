import React, { FC } from 'react'
import { StyledNavbar, Logo } from './styles'
import { NavItem, Icon } from 'react-materialize'
import { HOME, LOGIN, SIGNUP } from 'src/routes/pages'

interface HeaderProps {
  authenticated?: boolean
}

const logout = () => localStorage.clear()

export const Header: FC<HeaderProps> = ({
  authenticated = false,
}): JSX.Element => {
  return (
    <StyledNavbar
      alignLinks="right"
      brand={
        <Logo className="brand-logo" href="/">
          Animal Tribes
        </Logo>
      }
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      {authenticated && (
        <NavItem onClick={logout} href={HOME}>
          Logout
        </NavItem>
      )}

      {!authenticated && <NavItem href={LOGIN}>Login</NavItem>}
      {!authenticated && <NavItem href={SIGNUP}>Signup</NavItem>}
    </StyledNavbar>
  )
}
