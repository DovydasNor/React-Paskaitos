
import React, { useContext } from 'react'
import { TodoContext } from './TodoContext'

const TodoItem = ({ data }) => {
  const ctx = useContext(TodoContext)
  const { toggleTodo } = ctx

  const { title, description, isDone, id } = data

  const todoToggleHandler = () => {
    toggleTodo(id)
  }

  return (
    <div 
      className={`todo-item ${isDone ? 'todo-done' : ''}`} 
      style={{ 
        border: '1px solid',
        backgroundColor: '#fafafa',
        padding: '10px',
        marginBottom: '10px',
        opacity: isDone ? 0.5 : 1,
        textDecoration: isDone ? 'line-through': 'none'
      }}
    >

      <h3>{title}</h3>
      <p>{description}</p>

      <div>
        <input onChange={todoToggleHandler} type='checkbox' id={`task-done-${id}`} checked={isDone} />
        <label htmlFor={`task-done-${id}`}>{isDone ? 'Done' : 'Not Done'}</label>
      </div>
    </div>
  )
}

export default TodoItem
