import styled from "styled-components";

export const StyledToDo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 1rem;
    width: 80vw;
    height: 10vh;
    background-color: beige;
    border-radius: 15px;

    & button{
        background-color: crimson;
        padding: .5rem;
        border: none;
        border-radius: 15px;
        cursor: pointer;
    }
`