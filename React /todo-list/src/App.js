import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [toDoList, setToDoList] = useState([
    {
      task: 'Make an app',
      completed: false,
    },
  ])

  const handleToggle = (itemToUpdate) => {
    const updatedList = toDoList.map((item) => {
      if (item === itemToUpdate) {
        return { ...item, completed: !item.completed }
      }
      return item
    })
    setToDoList(updatedList)
  }

  return (
    <div className="container" v>
      <h1>To Do List</h1>
      {toDoList.map((item, index) => {
        return (
          <li
            className={item.completed ? 'completed' : ''}
            onClick={() => handleToggle(item)}
            key={index}
          >
            {item.task}
          </li>
        )
      })}
      <form>
        <input
        placeholder='Add a task'
        />
        
      </form>
    </div>
  )
}

export default App
