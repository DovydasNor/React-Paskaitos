
import { createContext } from "react";

export const TodoContext = createContext({
    todos: [],
    addNewTodo: () => {},
    toggleTodo: () => {},
    removeTodo: () => {},
})
