// * The challenge here is have the 'h2' be hidden intially when this component first "renders"
// * When a user clicks the button, the 'h2' should now be shown
// * When the button is clicked again, the text should hide again

import React from 'react'


function Exercise() {
  const [IsSwhown, setShown] = React.useState(false)
  const handleToggle = () => {
    setShown(!IsSwhown)
  }
  return (
    <div>
      {IsSwhown && <h2>I should be hidden to start with, but click the button should make me appear, clicking again will hide me</h2>}
      <button onClick={handleToggle}>
        Click me to hide and show the text below
      </button>
    </div>
  )
}


export default Exercise
