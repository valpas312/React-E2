import React from 'react'
import { StyledNav, StyledLink, StyledNavChild } from '../StyledComponents/StyledNavbar'

const NavBar = ({children}) => {
  return (<>
  <StyledNav>
    <StyledLink to={'/'}>Home</StyledLink>
    <StyledLink to={'ToDo'}>Lista de tareas</StyledLink>
    <StyledLink to={'Pokedex'}>Pokedex</StyledLink>
  </StyledNav>
    <StyledNavChild>
        {children}
    </StyledNavChild>
  </>
  )
}

export default NavBar