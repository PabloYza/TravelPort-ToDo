import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import './Todo.css'

const Todo = ({
  todos,
  removeTodo,
}) => {
  return (
    <div>
      <div>
        {todos.map((todo, index) => (
        <div id="toggleClass" className='todo-row' key={index} >
          <div key={todo.id} id="todos" >
            {todo.text}
          </div>
          <div className="delete-icon" >
            <RiCloseCircleLine id="x-icon" onClick={() => removeTodo(todo.id)} />
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Todo
