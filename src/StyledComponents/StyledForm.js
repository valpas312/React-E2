import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: burlywood;
    padding: 1rem;
    border-radius: 15px;
    width: 20vw;
    height: 30vh;
    gap: .5rem;

    & label{
        font-weight: 800;
        font-size: 1rem;
    }
    input{
        padding: 1rem;
        border: none;
        background-color: beige;
        border-radius: 15px;
        width: 100%;
    }
    button{
        padding: .5rem;
        cursor: pointer;
        border: none;
        border-radius: 15px;
    }
`