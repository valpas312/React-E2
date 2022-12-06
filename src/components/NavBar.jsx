import React from 'react'
import './Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'


const NavBar = ({children}) => {
  return (<div>
  <div className="nav-container">
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'ToDo'}>Lista de tareas</NavLink>
    <NavLink to={'Pokedex'}>Pokedex</NavLink>
  </div>
    <div>
        {children}
    </div>
  </div>
  )
}

export default NavBar