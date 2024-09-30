
import { useContext } from "react"
import TodoItem from "./TodoItem"
import { TodoContext } from "./TodoContext"

const TodoList = () => {
  const ctx = useContext(TodoContext)
  const { todos } = ctx

  if (!todos || todos.length === 0) {
    return <h2>No tasks yet</h2>
  }

  return (
    <div>
      <h2>Tasks:</h2>

      <div className="todos-list">
        {todos.map(todo => <TodoItem key={todo.id} data={todo} />)}
      </div>
    </div>
  )
}

export default TodoList
