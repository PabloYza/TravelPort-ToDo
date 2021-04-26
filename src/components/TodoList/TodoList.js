import React, { useState } from 'react'
import TodoForm from '../TodoForm/TodoForm'
import Todo from '../Todo/Todo'

const TodoList = () => {
  const [todos, setTodos] = useState([])


  const addTodo = todo => {
    if (todo.text === '') {
      return
    }
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
  }

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)
    setTodos(removeArr)
  }


  return (
    <div className="list-container" >
      <h1>New Todos!</h1>
      <TodoForm addTodo={addTodo} />
      <Todo todos={todos} removeTodo={removeTodo}/>
    </div>
  )
}

export default TodoList
