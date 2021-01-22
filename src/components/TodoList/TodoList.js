import React, { useState } from 'react'
import TodoForm from '../TodoForm/TodoForm'
import Todo from '../Todo/Todo'
import SearchTodo from '../SearchTodo/SearchTodo'
import './TodoList.css'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [filterTodos, setFilterTodos] = useState([])


  const addTodo = todo => {
    if (todo.text === '') {
      return
    }
    const newTodos = [todo, ...todos]
    const newTodos2 = [todo, ...filterTodos]
    setTodos(newTodos)
    setFilterTodos(newTodos2)
  }

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)
    setTodos(removeArr)
  }

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const filteredTodos = matchingText => {
    if (matchingText === undefined) {
      setFilterTodos(todos)
    } else {
      const filteredTodos = todos.filter(todo => todo.text.includes(matchingText))
      setFilterTodos(filteredTodos)
    }
  }

  return (
    <div className="list-container" >
      <h1>New Todos!</h1>
      <SearchTodo filteredTodos={filteredTodos} />
      <TodoForm addTodo={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} filterTodos={filterTodos}/>
    </div>
  )
}

export default TodoList
