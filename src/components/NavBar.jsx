import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const NavBar = ({children}) => {
    const navigate = useNavigate()
  return (<>
    <p onClick={() => navigate('/')}>Logo</p>
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'ToDo'}>Lista de tareas</NavLink>
    <NavLink to={'About'}>Acerca</NavLink>
    <div>
        {children}
    </div>
  </>
  )
}

export default NavBar