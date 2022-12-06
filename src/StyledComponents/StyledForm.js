import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #616283;
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
        background-color: white;
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