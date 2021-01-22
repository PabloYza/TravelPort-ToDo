import React, { useState, useEffect, useRef } from 'react'
import './TodoForm.css'

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState([])

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    addTodo({
      id: Math.floor(Math.random() * 1000),
      text: input
    })
    setInput('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text"
        placeholder="Add a todo"
        name="text"
        value={input}
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button" >Add todo</button>
    </form>
  )
}

export default TodoForm
