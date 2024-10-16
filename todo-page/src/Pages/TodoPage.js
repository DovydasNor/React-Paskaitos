import React, { useState } from 'react'
import TodoForm from '../components/TodoPage/TodoForm'
import TodoList from '../components/TodoPage/TodoList'
import { TodoContext } from '../components/TodoPage/TodoContext'

const TodoPage = () => {
  const INITIAL_STATE = [
    {
      title: 'First task',
      description: 'First task description', 
      id: 1646546543543,
      isDone: false
    },
    {
      title: 'Second task',
      description: 'second task description', 
      id: 45435435435,
      isDone: true
    },
    {
      title: 'Third task',
      description: 'Third task description', 
      id: 4564321387,
      isDone: false
    },
  ]

  const [todos, setTodos] = useState(INITIAL_STATE)

  const addNewTodo = newTodo => {
    setTodos(prevState => [newTodo, ...prevState])
  }

  const toggleTodo = todoId => {
    setTodos(prevState => {
      const updatedState = prevState.map(todo => {
        if (todo.id === todoId) {
          const updatedTodo = {
            ...todo,
            isDone: !todo.isDone
          }

          return updatedTodo
        } else {
          return todo
        }
      })

      return updatedState
    })
  }

  const ctxValue = {
    todos,
    addNewTodo,
    toggleTodo,
  }

  return (
    <TodoContext.Provider value={ctxValue}>
      <div>
        <TodoForm />
        <TodoList />
      </div>
    </TodoContext.Provider>
  )
}

export default TodoPage