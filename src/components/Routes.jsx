import React from 'react'
import { BrowserRouter, Route, Routes as RoutesRouterDom } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import Pokedex from './Pokedex'
import ToDoForm from './ToDoForm'
import './Routes.css'


const Routes = () => {
  return (
    <BrowserRouter>
    <NavBar>
        <RoutesRouterDom >
            <Route path='/' element={<Home/>}/>
            <Route path='ToDo' element={<ToDoForm/>}/>
            <Route path='Pokedex' element={<Pokedex/>}/>
            <Route path='*' element={<Home/>}/>
        </RoutesRouterDom>
    </NavBar>
    </BrowserRouter>
  )
}

export default Routes