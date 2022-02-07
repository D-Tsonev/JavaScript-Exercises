import React from 'react'

function getWinner(playerChoice, computerChoice) {
  if (!playerChoice && !computerChoice) return null

  if (playerChoice === computerChoice) return 'Its a Draw'

  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'Player Wins'
  }

  return 'Computer Wins'
}

function App() {
  const choices = ['rock', 'paper', 'scissors']

  const [compChoice, setCompChoise] = React.useState(
    Math.ceil(Math.random() * choices.length)
  )
  console.log(compChoice)
  const [playerChoise, setPlayerChoise] = React.useState(null)

  const handlePlayerChoise = (e) => {
    setPlayerChoise(e.target.value)
  }

  const handleReset = () => {
    setPlayerChoice(null)
    setComputerChoice(null)
  }

  return (
    <div>
      <p>Player Choice: !</p>
      <p>Computer Choice: !</p>
      <p>Result: !</p>
      <div>
        <button onClick={handlePlayerChoise} value="rock">
          Rock
        </button>
        <button onClick={handlePlayerChoise} value="paper">
          Paper
        </button>
        <button onClick={handlePlayerChoise} value="scissors">
          Scissors
        </button>
        <button onClick={handleReset}>Reset Game</button>
      </div>
    </div>
  )
}

export default App
