import React from 'react'
import { StyledToDo } from '../StyledComponents/StyledToDo'

const Todo = ({todo, index, deleteTodo}) => {
    return (
        <>
            <StyledToDo>
                <h3>{todo}</h3> <button onClick={() => deleteTodo(index)}>Eliminar</button>
            </StyledToDo>
        </>
    )
}

export default Todo