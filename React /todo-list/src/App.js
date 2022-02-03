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
    console.log('item to update', itemToUpdate)

    const updatedList = toDoList.map((item) => {
      console.log('item in map', item)
      if (item === itemToUpdate) {
        console.log('match')
      }
    })
  }

  return (
    <>
      <div className="container"></div>
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
    </>
  )
}

export default App
