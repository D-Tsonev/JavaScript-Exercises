import React from 'react'

const choices = ['rock', 'paper', 'scissors']

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
  const [playerChoise, setPlayerChoice] = React.useState(null)
  const [computerChoice, setComputerChoice] = React.useState(null)
  const [result, setResult] = React.useState(null)

  const handleChoice = (e) => {
    const choice = e.target.value
    const compChoice = choices[Math.floor(Math.random() * choices.length)]
    const result = getWinner(choice, compChoice)
    setPlayerChoice(choice)
    setComputerChoice(compChoice)
    setResult(result)
  }

  const handleReset = () => {
    setPlayerChoice(null)
    setComputerChoice(null)
    setResult(null)
  }

  return (
    <div>
      <p>Player Choice:{playerChoise} !</p>
      <p>Computer Choice:{computerChoice} !</p>
      <p>Result: {result}!</p>
      <div>
        <button onClick={handleChoice} value="rock">
          Rock
        </button>
        <button onClick={handleChoice} value="paper">
          Paper
        </button>
        <button onClick={handleChoice} value="scissors">
          Scissors
        </button>
        <button onClick={handleReset}>Reset Game</button>
      </div>
    </div>
  )
}

export default App
