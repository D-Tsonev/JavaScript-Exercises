import React from 'react'

function App() {
  const [randNumber, setRandomNumber] = React.useState(
    Math.ceil(Math.random() * 10)
  )
  console.log('FOR CHEATING', randNumber)

  const [guess, setGuess] = React.useState(null)
  console.log('CURRUNT GUESS IS ', guess)
  const hadnleGuess = (e) => {
    setGuess(Number(e.target.textContent))
  }

  const isCorrect = randNumber === guess
  console.log(isCorrect)

  const resetGame = () => {
    const newNumber = Math.ceil(Math.random() * 10)
    setRandomNumber(newNumber)
    setGuess(null)
  }

  return (
    <>
      <h1>Guess the number</h1>
      <p>Guess the random number between 1 - 10 to win!</p>
      {!guess && <p>Make your first guess!</p>}
      {guess && !isCorrect && <p>Nope it was not {guess}</p>}
      {isCorrect ? (
        <>
          <p>You did it, the number was {randNumber}</p>
          <button onClick={resetGame}>Reset</button>
        </>
      ) : (
        <div>
          <button onClick={hadnleGuess}>1</button>
          <button onClick={hadnleGuess}>2</button>
          <button onClick={hadnleGuess}>3</button>
          <button onClick={hadnleGuess}>4</button>
          <button onClick={hadnleGuess}>5</button>
          <button onClick={hadnleGuess}>6</button>
          <button onClick={hadnleGuess}>7</button>
          <button onClick={hadnleGuess}>8</button>
          <button onClick={hadnleGuess}>9</button>
          <button onClick={hadnleGuess}>10</button>
        </div>
      )}
    </>
  )
}

export default App
