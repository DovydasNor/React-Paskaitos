
import { useEffect, useState } from "react"
import TodoItem from "./TodoItem"
// import { TodoContext } from "./TodoContext"
import { API_URL } from "../../config"

const TodoList = () => {

  const [todo, setTodo] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/todos`)
      .then(res => res.json())
      .then(data => setTodo(data))
  })
  
  // const ctx = useContext(TodoContext)
  // const { todos } = ctx

  if (!todo || todo.length === 0) {
    return <h2>No tasks yet</h2>
  }
  return (
    <div>
      <h2>Tasks:</h2>

      <div className="todos-list">
        {todo.map(todo => <TodoItem key={todo.id} data={todo} />)}
      </div>
    </div>
  )
}

export default TodoList
