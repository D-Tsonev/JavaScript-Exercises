
// * 1. Write a for loop that logs all the even numbers from 1-10
// ? BONUS Do it using a for loop but without using an if statement or a ternary expression!

for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0){
    console.log(i)
  }
}

for (let i = 2; i <= 10; i += 2) {
  console.log(i)
  
}



// * 2. Write a for loop that iterates over the numbers 1-20 and logs the following to the console:
// * IF the number is divisible by 3, log 'Fizz'
// * IF the number is divisible by 5, log 'Buzz'
// * IF the number is divisible by both 3 and 5, log 'FizzBuzz'
function fizzbuzz (n){
  const array = []
  for (let i = 1; i <= n; i++){
    if (i % 3 === 0 && i % 5 === 0){
      array.push('FizzBuzz')
    }   else if (i % 3 === 0){
      array.push('Fizz')
    }   else if (i % 5 === 0){
      array.push('Buzz')
    } else {
      array.push(i)
    }
  }
  return array
}

console.log(fizzbuzz(20))

// ? BONUS: make it log '[number]: Fizz/Buzz/FizzBuss' e.g. '3: Fizz', '5: Buzz', '15: FizzBuzz', etc.
// ? Note what happens if you start the loop at zero


// * 3. Imagine you REALLY like rolling dice. Write a loop that logs a random number from 1-6 each time.
// * If the number is 5 or 6, console log 'You win!' and end the game

let playing = true 

while (playing) {
  const value = Math.ceil((Math.random()) * 6)
  console.log(value)
  if (value > 4) {
    console.log('You Win!')
    playing = false
  } else {
    console.log('Try again , the number is ' + value)
  }
}
