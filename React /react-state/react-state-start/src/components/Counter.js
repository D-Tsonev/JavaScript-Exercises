import React from 'react'
function Counter() {
  const [count, setCount] = React.useState(0)
  const isAboveFive = count > 5
  const isBelowZero = count < 0
  const handleIncrease = () => {
    setCount(count + 1)
  }
  const handleDecrease = () => {
    setCount(count - 1)
  }
  return (
    <div>
      {isAboveFive && <p>The count is above 5</p>}
      {isBelowZero && <p>The count is below 0</p>}
      {!isAboveFive && !isBelowZero && <p>Count is above 0 and below 5</p>}
      <div className="counter-container">
        <button onClick={handleDecrease}>➖</button>
        <h2>{count}</h2>
        <button onClick={handleIncrease}>➕</button>
      </div>
      {isAboveFive ?
        <p>The count is above five</p>
        :
        <p>the count is below five</p>
      }
    </div>
  )
}
export default Counter