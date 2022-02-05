// * Heres a brand new event "change", have a look at the console.log firing from the function
// * Show the selected name from dropdown in the UI

import react from 'react'
import React from 'react'

function Exercise3() {
  const [name, setName] = react.useState('Here')
  const handleChange = (e) => {
    setName(e.target.value) // * <-- have a look at this
  }

  return (
    <div className="container">
      <p>The selected name is: SHOW CHOSEN NAME {name}HERE</p>

      <select defaultValue="" onChange={handleChange}>
        <option disabled>Pick A Name</option>
        <option value="">Jack</option>
        <option>Emma</option>
        <option>Alex</option>
        <option>Hugo</option>
      </select>
    </div>
  )
}

export default Exercise3
