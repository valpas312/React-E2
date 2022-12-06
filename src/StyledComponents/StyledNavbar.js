import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 10vh;
    gap: 1rem;
    background-color: #0E1116;
`

export const StyledLink = styled(NavLink)`
    font-size: 1.5rem;
`

export const StyledNavChild = styled.div`
    display: flex;
    justify-self: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
`