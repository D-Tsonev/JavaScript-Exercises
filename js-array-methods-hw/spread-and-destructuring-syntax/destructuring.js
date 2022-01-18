// *  ----- OBJECT DESTRUCTURING SYNTAX------ *
// *  💻 Remember "fn" key + "f8" to run  your code

// * 🦉 Practice

// ! ⚠️Remember to comment out your practice code before attempting below, "cmd" + "/"

// * **********************************************************************************

// ? Uncomment the following object

const cat = {
  name: 'Cheeseburger',
  age: 3,
  location: 'London',
  owner: 'Jack',
}

// ? Using the object destructuring syntax, assign the value of the location property to a const with the same name as its key and console.log below

const { location } = cat

console.log(location)

// ? Do the same again, but for name and age.
const { name, age } = cat
console.log(name, age)

// ? and again for owner, but change the "const" name to be "catOwner"
const { owner: catOwner } = cat

console.log(catOwner)

// * **********************************************************************************

// ? Uncomment the following function declaration and its call.

// function add(obj) {
//   return obj.firstNumber + obj.secondNumber
// }

// console.log(add({ firstNumber: 10, secondNumber: 20 }))

// ? Attempt to refactor the parameters of the add function, to use the destructuring syntax.

function add({ firstNumber, secondNumber }) {
  return firstNumber + secondNumber
}

console.log(add({ firstNumber: 10, secondNumber: 20 }))
