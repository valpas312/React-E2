import React from 'react'
import { StyledContainerHome, StyledListHome } from '../StyledComponents/StyledHome'

const Home = () => {
  return (<StyledContainerHome>
    <h1>Bienvenido a la segunda entrega del modulo de react</h1>
    <h3>En este proyecto usamos</h3>
    <StyledListHome>
      <li>Styled-Components</li>
      <li>Axios</li>
      <li>React-Context</li>
      <li>Apis Externas</li>
      <li>Hooks de react</li>
    </StyledListHome>
  </StyledContainerHome>
  )
}

export default Home