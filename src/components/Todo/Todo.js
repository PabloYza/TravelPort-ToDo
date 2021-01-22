import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import './Todo.css'

const Todo = ({
  todos,
  completeTodo,
  removeTodo
  }) => {


  return todos.map((todo, index) => (
    <div id="toggleClass" className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index} >
      <div key={todo.id} onClick={() => completeTodo(todo.id)} id="todos" >
        {todo.text}
      </div>
      <div className="delete-icon" >
        <RiCloseCircleLine id="x-icon" onClick={() => removeTodo(todo.id)} />
      </div>
    </div>
  ))
}

export default Todo
