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
  console.log('Acc', acc)
  console.log('NUMBER',number )
  return acc + number

},0)
console.log(sum)

const food = ['banana','pineapple','orange']

const firstLetter = food.reduce((acc,food)=>{
  return acc + food[0]
},'')

console.log(firstLetter)


const mapWithReduce = food.reduce((acc,food)=>{
  acc.push(food.toUpperCase())
  return acc

},[])

console.log(mapWithReduce)

const allCitiesAreBig = capitals.every(capital =>{
  return capital.length > 4
})
console.log(allCitiesAreBig)

const someCapitals = capitals.some(capital =>{
  return capital.length > 3
})

console.log(someCapitals)

const findCapital = capitals.find(capital =>{
  return capital.startsWith('B')
})
console.log(findCapital)

const findIndex = capitals.findIndex(capital=>{
  return capital.length > 3
})

console.log(findIndex)

const indexOfItem = capitals.indexOf('Rome')

console.log(indexOfItem)

const doesBelinExist = capitals.includes('Berlin')

console.log(doesBelinExist)

function isHereBeACapital(array){
  const hasCapital = array.some((capital)=>{
    return capital === 'London'
  })
  return hasCapital
}

const answer = isHereBeACapital(['London','Barcelona','Valetta'])
const anotherAnswer = isHereBeACapital(['Paris', 'Zagreb','Helsinki'])
console.log(answer,anotherAnswer)
