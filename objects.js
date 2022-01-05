const user = {
  name: 'Dimi',
  age: 26,
  isVaccinated: true,
  hobbies: ['gym', 'travelling', 'cooking'],
  pet: {
    type: 'Dog',
    name: 'Monty',
    age: '3',
  },
  greeting: function () {
    console.log('Hey')
  },
  greetingTwo() {
    console.log('Hey you')
  },
  addHobby() {
    this.hobbies.push('codding')
  },
}
const age = 'age'
const randomVariable = 'name'
const someVariable = user.name
const misteryPropartName = 'age'
console.log('mistery Propart Name ->', user[misteryPropartName])

console.log('Some variable is ', someVariable)

// const randomVariable='name'

console.log(user.name + 'is' + 'user.age' + 'years')
console.log('User age => ', user[age])
console.log('User age => ', user['age'])
console.log('User age => ', user[randomVariable])
console.log('User favourite hobby->', user.hobbies[1])
console.log('User pet type->', user.pet.type)
console.log(user.pet)
user.greeting()
user.greetingTwo()
console.log('before addHobby function', user.hobbies)
user.addHobby()
console.log('after calling the adHobby funtion', user.hobbies)

if (user.isVaccinated) {
  console.log('Welcome to Greece')
} else {
  console.log('Two meters please')
}

const seiClass = {}

seiClass.instructur = 'Nick'
console.log(seiClass)

seiClass['secondInstructor'] = 'Jack'
console.log(seiClass)

const recipe = {
  name: 'Pizza',
  ingredients: ['cheese', 'tomato', 'basil'],
  rating: 5,
}

delete recipe.name
console.log(recipe)

recipe.ingredients.push('garlic')
console.log(recipe)

recipe.ingredients.forEach((ingrediant) => console.log(ingrediant))

const batman = {
  realName: 'Bruce Wayne',
  fakeName: 'Batman',
  costume: [],
  sayHello() {
    console.log(
      `Hello I am ${this.realName}, but by night I put tights in and fight crime as ${this.fakeName}`
    )
  },
  getDressed(clothes) {
    this.costume.push(clothes)
  },
}

batman.sayHello()
batman.getDressed('cape')
console.log(batman.costume)

const waffle = {}
waffle.itemOne = 'Strawberries'
waffle['moreToppings'] = ['Cream', 'Chocolate']
waffle.moreToppings.push('Sprinkles')

waffle.moreToppings.forEach((item) =>
  console.log('loop through array of item', item)
)
const upper = waffle.moreToppings.map((item) => item.toLocaleUpperCase())
// console.log(upper)

// console.log(waffle)

const myBrunch = {
  itemOne: 'Waffle',
  itemTwo: ['Strawberries', 'Blueberriers', 'Raspberries'],
  itemThree: {
    bacon: 'Crispy',
    eggs: 'Fried',
    toast: 'Burned',
  },
}

// console.log(myBrunch)

const objectEntries = Object.entries(myBrunch)
// console.log(objectEntries)
console.log(objectEntries[1])

objectEntries.forEach((entry) => console.log(entry[0]))

const obectKeys = Object.keys(myBrunch)
console.log(obectKeys)

const objectValues = Object.values(myBrunch)
console.log(objectValues)
