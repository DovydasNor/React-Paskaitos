
import React, { useContext } from 'react'
import { TodoContext } from './TodoContext'
import { API_URL } from '../../config'
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';

const TodoItem = ({ data }) => {
  const ctx = useContext(TodoContext)
  const { toggleTodo } = ctx

  const { title, description, isDone, id } = data

  const todoToggleHandler = () => {
    const updatedTask = { ...data, isDone: !isDone }

    fetch(`${API_URL}/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedTask),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then(() => {
        toggleTodo(id)
      })
      .catch((error) => {
        console.error('Failed to update todo:', error)
      });
  }

 const deleteHandler = () => {
   fetch(`${API_URL}/todos/${id}`, {
    method: 'DELETE'
   })
 }

  return (
    <Paper elevation={8}
      className={`todo-item ${isDone ? 'todo-done' : ''}`}
      sx={{p: 1, m: 2}}
      // style={{ 
      //   border: '1px solid',
      //   backgroundColor: '#fafafa',
      //   padding: '10px',
      //   marginBottom: '10px',

      // }}
    >
      <div style={{opacity: isDone ? 0.5 : 1, textDecoration: isDone ? 'line-through': 'none'}} >
        <h3>{title}</h3>
        <p>{description}</p>

        <input onChange={todoToggleHandler} type='checkbox' id={`task-done-${id}`} checked={isDone} />
        <label htmlFor={`task-done-${id}`}>{isDone ? 'Done' : 'Not Done'}</label>
      </div>
      <Button variant="outlined" type='submit' onClick={deleteHandler} style={{display: isDone ? 'block' : 'none', cursor: 'pointer' }}>Delete Task</Button>
    </Paper>
  )
}

export default TodoItem
