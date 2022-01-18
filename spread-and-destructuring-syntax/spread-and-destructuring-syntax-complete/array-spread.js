// *  ----- ARRAY SPREAD SYNTAX ------ *
// *  💻 Remember "fn" key + "f8" to run  your code

// * 🦉 Practice



// ! ⚠️Remember to comment out your practice code before attempting below, "cmd" + "/"

// * **********************************************************************************

// ? Uncomment the following array

const dogs = ['labrador', 'beagle', 'shitzu', 'dalmation']

// ? Using the spread syntax, define a const "newDogs" and assign it value of an array, with the contents of the dogs array spread inside and a new dog breed added to the end of the array.
// ? eg => ['labrador', 'beagle', 'shitzu', 'dalmation', 'bulldog']

// ? console log both arrays to make sure the original dogs array has not been changed

const newDogs = [...dogs, 'bulldog']

console.log('original ', dogs)
console.log('new', newDogs)

// * **********************************************************************************

// ? Uncomment the following array

const fruits = ['apple', 'pear', 'bananna', 'cherry']

// ? Using the spread syntax, create a new array as a const "newFruits", it should contain the values from the fruits array, but with a new fruit added to the beggining of the array.
// ? eg => ['kiwi', 'apple', 'pear', 'bananna', 'cherry']

// ? console log both arrays to make sure the original fruits array has not been changed

const newFruits = ['kiwi', ...fruits]


console.log('original ', fruits)
console.log('new', newFruits)

// * **********************************************************************************

// ? Uncomment the following array

const sports = ['football', 'tennis', 'cricket']

// ? Using spread, make a new array "newSports", containing the values of the sports array, but with a new sport added to the beginning and end of the new array.
// ? eg => ['basketball', 'football', 'tennis', 'cricket', 'hockey']

// ? console log both arrays to make sure the original sports array has not been changed

const newSports = ['basketball', ...sports, 'hockey']

console.log('original ', sports)
console.log('new', newSports)


// * **********************************************************************************

// ? *** BONUS ***

// ? Uncomment the following array

const numbers = [ 1, 2, 3, 4, 6, 7, 8, 9]

// ? Create a const "fixedNumbers", using the spread syntax and slice() method, insert the number 5 at the correct index in the array to fix the sequence.

// ? console log both arrays to make sure the original number array has not been changed

const fixedNumbers = [...numbers.slice(0, 4), 5, ...numbers.slice(4)]

console.log('original ', numbers)
console.log('new', fixedNumbers)

// * **********************************************************************************