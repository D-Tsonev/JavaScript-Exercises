const fruits = ['🍏', '🍇', '🍏']

// * Take this fruits array, and 'mutate' it into the array shown in each question.
// ! 🙅‍♂️ RULES:
// ! a) You can only write 2 lines of code for each question: one to mutate the array,
// ! another to console.log the array to see if you got it right!
// ! b) You're only allowed to use each array method / technique exactly once.

// * You can use the glossary of mutable array methods to guide you here.

// ! Have done the first one for you...
// ? 1) -> ['🍏', '🍇']
fruits.pop() // ! So now, you can't use pop again!
console.log(fruits) // ! Checking our fruits look correct!
// ! Remember, the array mutates every time.. so for the next one
// ! you're dealing with ['🍏', '🍇'], not  ['🍏', '🍇', '🍏']

// ? 2) -> ['🍏', '🍇', '🍌', '🍏']
fruits.push('🍌', '🍏')
console.log(fruits)

// ? 3) -> ['🍇', '🍌', '🍏']
fruits.shift()
console.log(fruits)

// ? 4) -> ['🍌', '🍇', '🍌', '🍏']
fruits.unshift('🍌')
console.log(fruits)

// ? 5) -> ['🍏', '🍌', '🍇', '🍌']
fruits.reverse()
console.log(fruits)

// ? 6) -> ['🍏', '🍌', '🍏', '🍌']
fruits[2] = '🍏'
console.log(fruits)

// ? 7) ['🍏', '🍌', '🍇', '🍇', '🍏', '🍌']
fruits.splice(2,0,'🍇', '🍇')
console.log(fruits)


// ? 8) [ '🍇', '🍇', '🍌', '🍌', '🍏', '🍏' ]
fruits.sort()
console.log(fruits)
