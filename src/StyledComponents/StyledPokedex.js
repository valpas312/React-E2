import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    border: 5px solid black;
    border-radius: 15px;
`

export const StyledInput = styled.input`
    padding: 1rem;
    border: none;
    border-radius: 15px;
    text-align: center;
`
export const StyledBtn = styled.button`
    padding: .5rem;
    border: none;
    border-radius: 15px;
    font-weight: 400;
    transition: all .2s ease-in;

    :hover{
        transform: scale(1.1);
    }
`