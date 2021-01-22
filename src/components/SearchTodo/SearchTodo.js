import React, { useState } from 'react'


const SearchTodo = ({ filteredTodos }) => {

  const [matchingText, setMatchingText] = useState('')

  const handleChange = e => {
    e.preventDefault()
    setMatchingText(e.target.value)
    filteredTodos(matchingText)
  }
  return (
    <div>
      <input
        type="text"
        placeholder="filter here"
        value={matchingText}
        onChange={handleChange}
      ></input>
    </div>
  )


}

export default SearchTodo