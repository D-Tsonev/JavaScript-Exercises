// * For this challenge, when the button is clicked, the color of the box should toggle from blue to yellow
// * This can be acheived by removing the class "blue" and adding the class "yellow" to the div
// * Use a click event, and react state to add the correct class to the element

import React from 'react'
function Exercise2() {
  const [isBlue, setIsBlue] = React.useState(true)
  const handleClick = () => {
    setIsBlue(!isBlue)
  }
  return (
    <div className="container">
      <button onClick={handleClick}>
        Click Here to toggle the color of the box
      </button>
      <div className={`box ${isBlue ? 'blue' : 'yellow'}`} />
    </div>
  )
}
export default Exercise2