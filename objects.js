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
}
const age = 'age'
const randomVariable = 'name'

// const randomVariable='name'

console.log(user.name + 'is' + 'user.age' + 'years')
console.log('User age => ', user[age])
console.log('User age => ', user['age'])
console.log('User age => ', user[randomVariable])
console.log('User favourite hobby->', user.hobbies[1])
console.log('User pet type->', user.pet.type)
console.log(user.pet)

if (user.isVaccinated) {
  console.log('Welcome to Greece')
} else {
  console.log('Two meters please')
}
