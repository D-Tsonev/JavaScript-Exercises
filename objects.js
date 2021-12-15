const user = {
  name: 'Dimi',
  age: 26,
  isVaccinated: true,
  hobbies: ['gym', 'travelling', 'cooking'],
}
const age = 'age'
const randomVariable = 'name'

// const randomVariable='name'

console.log(user.name + 'is' + 'user.age' + 'years')
console.log('User age => ', user[age])
console.log('User age => ', user['age'])
console.log('User age => ', user[randomVariable])
console.log('User favourite hobby->',user.hobbies[1])