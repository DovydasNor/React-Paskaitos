import React, { useContext, useState } from 'react'
import { TodoContext } from './TodoContext'

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
      id: Math.random(),
      isDone: false
    }

    addNewTodo(newTask)
    setTitle('')
    setDescription('')
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='title'>Title:</label>
          <input type='text' name='title' id='title' value={title} onChange={titleHandler} />
        </div>

        <div>
          <label htmlFor='description'>Description:</label>
          <textarea name='title' id='title' onChange={descriptionHandler} value={description}></textarea>
        </div>

        <button type='submit'>Add New Task</button>
      </form>
    </div>
  )
}

export default TodoForm