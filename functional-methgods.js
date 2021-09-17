const capitals   = ['London','Berlin','Rome']

capitals.forEach((capital, i)=> {
  console.log(capital, i)
})

const filteredCapitals = capitals.filter((capital)=>{
  return capital.length > 5
})

console.log(filteredCapitals)

const mappedCapitals = capitals.map((capital)=> {

  return capital.toUpperCase()

}) 

console.log(mappedCapitals)

const numbers = [1,2,3,4,5,6]

// const mappedNumberes = numbers.map((number)=> {

//   return number * 2

// })

// console.log(mappedNumberes)


const sum = numbers.reduce((acc, number) => {

  return acc + number

},0)

const allCitiesAreBig = capitals.every(capital =>{
  return capital.length > 4
})
console.log(allCitiesAreBig)

const someCapitals = capitals.some(capital =>{
  return capital.length > 3
})

console.log(someCapitals)