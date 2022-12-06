import React from 'react'
import { BrowserRouter, Route, Routes as RoutesRouterDom } from 'react-router-dom'
import About from './About'
import Home from './Home'
import NavBar from './NavBar'
import ToDoForm from './ToDoForm'

const Routes = () => {
  return (
    <BrowserRouter>
    <NavBar>
        <RoutesRouterDom>
            <Route path='/' element={<Home/>}/>
            <Route path='ToDo' element={<ToDoForm/>}/>
            <Route path='About' element={<About/>}/>
        </RoutesRouterDom>
    </NavBar>
    </BrowserRouter>
  )
}

export default Routes