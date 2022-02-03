import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TaskForm from './components/TaskForm'

function App() {
  const [toDoList, setToDoList] = useState([
    {
      task: 'Make an app',
      completed: false,
    },
  ])

  const [newListItem, setNewListItem] = useState('')

  const handleToggle = (itemToUpdate) => {
    const updatedList = toDoList.map((item) => {
      if (item === itemToUpdate) {
        return { ...item, completed: !item.completed }
      }
      return item
    })
    setToDoList(updatedList)
  }

  const handleChange = (e) => {
    setNewListItem(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newItemtoAdd = { task: newListItem, completed: false }
    console.log('new Item to add', newItemtoAdd)
    setToDoList([...toDoList,newItemtoAdd])
    setNewListItem('')
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
      <TaskForm 
      newListItem={newListItem}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default App
