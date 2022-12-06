import React from 'react'
import { useContext } from 'react';
import { ToDoContext } from '../context/ToDoProvider';
import { StyledNav, StyledLink, StyledNavChild } from '../StyledComponents/StyledNavbar'

const NavBar = ({children}) => {
  const {todos} = useContext(ToDoContext)

  let styles = {};

  if (todos.length >= 1) {
    styles = {
      color: 'red'
    }
  }
  return (<>
  <StyledNav>
    <StyledLink to={'/'}>Home</StyledLink>
    <StyledLink style={styles} to={'ToDo'}>Lista de tareas</StyledLink>
    <StyledLink to={'Pokedex'}>Pokedex</StyledLink>
  </StyledNav>
    <StyledNavChild>
        {children}
    </StyledNavChild>
  </>
  )
}

export default NavBar