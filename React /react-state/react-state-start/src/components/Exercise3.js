// * Heres a brand new event "change", have a look at the console.log firing from the function
// * Show the selected name from dropdown in the UI

import react from 'react'

function Exercise3() {
  const [name, setName] = react.useState('')
  const handleChange = (e) => {
    setName(e.target.value) // * <-- have a look at this
  }

  return (
    <div className="container">
      {!name ? <p>Pick a name </p> : <p>The selected name is: {name}</p>}

      <select defaultValue="" onChange={handleChange}>
        <option disabled value="">
          Pick A Name
        </option>
        <option>Jack</option>
        <option>Emma</option>
        <option>Alex</option>
        <option>Hugo</option>
      </select>
    </div>
  )
}

export default Exercise3
