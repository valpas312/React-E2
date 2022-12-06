import { createContext, useState } from "react"

export const ToDoContext = createContext()

const ToDoProvider = ({children}) => {
    const [todos, setTodos] = useState([{todo: "Agrega Tareas!!"}])
  return (
    <ToDoContext.Provider value={{todos, setTodos}}>
        {children}
    </ToDoContext.Provider>
  )
}

export default ToDoProvider