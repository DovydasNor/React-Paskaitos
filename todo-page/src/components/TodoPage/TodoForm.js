import React, { useContext, useState } from 'react'
import { TodoContext } from './TodoContext'
import { API_URL } from '../../config'
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const TodoForm = () => {
  const ctx = useContext(TodoContext)
  const { addNewTodo } = ctx

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const titleHandler = event => setTitle(event.target.value)
  const descriptionHandler = event => setDescription(event.target.value)

  const submitHandler = event => {
    event.preventDefault()

    const newTask = {
      title,
      description,
      isDone: false
    }

    fetch(`${API_URL}/todos`,{
      method: 'POST',
      body: JSON.stringify(newTask),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

      .then(res => res.json())
      .then(savedTask => {

        addNewTodo(savedTask)

        setTitle('')
        setDescription('')
      })
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          {/* <label htmlFor='title'>Title:</label>
          <input type='text' name='title' id='title' value={title} onChange={titleHandler} /> */}
          <TextField
            id='title'
            value={title}
            onChange={titleHandler}
            label='Title'
            type='text'
            sx={{m: 2}}
          />
        </div>

        <div>
          {/* <label htmlFor='description'>Description:</label>
          <textarea name='title' id='title' onChange={descriptionHandler} value={description}></textarea> */}
          <TextField
            id='title'
            value={description}
            onChange={descriptionHandler}
            label='Description'
            type='text'
            fullWidth
            sx={{m: 2}}
          />
        </div>

        <Button type='submit' variant="contained" sx={{ml: 2}}>Add New Task</Button> 
      </form>
    </div>
  )
}

export default TodoForm