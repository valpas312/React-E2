import React, {useState} from 'react'
import Todo from './Todo'
import { StyledForm } from '../StyledComponents/StyledForm'
import { useContext } from 'react'
import { ToDoContext } from '../context/ToDoProvider'

const ToDoForm = () => {
    const [todo, setTodo] = useState({})
    const {todos, setTodos} = useContext(ToDoContext)

    const handleChange = e => setTodo({[e.target.name]: e.target.value})

    const handleClickEmpty = e => setTodos([])

    const handleClick = () => {
        if(Object.keys(todo).length === 0 || todo.todo.trim() === '') {
            alert('El campo no puede estar vacio')
            return
        }
        setTodos([...todos, todo])
    }

    const deleteTodo = indice => {
        const resetTodos = [...todos]
        resetTodos.splice(indice, 1)
        setTodos(resetTodos)
    }

    return (
        <>
            <StyledForm onSubmit={e => e.preventDefault()}>
                <label>Agregar tarea</label><br />
                <input type="text" name="todo" onChange={handleChange}/>
                <button onClick={handleClick}>Agregar</button>
                <button onClick={handleClickEmpty}>Vaciar</button>
            </StyledForm>
            {
                todos.map((value, index) => (
                    <Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo}/>
                ))
            }

            {console.log(todos)}
        </>
    )
}

export default ToDoForm