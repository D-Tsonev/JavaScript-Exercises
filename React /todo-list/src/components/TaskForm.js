import React from 'react'

function TaskForm({ handleChange, handleSubmit, newListItem }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={newListItem}
        placeholder="Add a task"
        onChange={handleChange}
      />
      <button>Add to list</button>
    </form>
  )
}

export default TaskForm
