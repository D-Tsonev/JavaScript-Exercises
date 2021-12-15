const capitals = ["London", "Berlin", "Rome"]

capitals.forEach((capital, i) => {
  console.log(capital, i)
})

const filteredCapitals = capitals.filter((capital) => {
  return capital.length > 5
})

console.log("filter ->", filteredCapitals)

const mappedCapitals = capitals.map((capital) => {
  return capital.toUpperCase()
})

console.log("map->", mappedCapitals)

const numbers = [1, 2, 3, 4, 5, 6]

// const mappedNumberes = numbers.map((number)=> {

//   return number * 2

// })

// console.log(mappedNumberes)

const sum = numbers.reduce((acc, number) => {
  console.log("Acc", acc)
  console.log("NUMBER", number)
  return acc + number
}, 0)
console.log(sum)

const food = ["banana", "pineapple", "orange"]

const firstLetter = food.reduce((acc, food) => {
  return acc + food[0]
}, "")

console.log(firstLetter)

const mapWithReduce = food.reduce((acc, food) => {
  acc.push(food.toUpperCase())
  return acc
}, [])

console.log(mapWithReduce)

const allCitiesAreBig = capitals.every((capital) => {
  return capital.length > 4
})
console.log(allCitiesAreBig)

const someCapitals = capitals.some((capital) => {
  return capital.length > 3
})

console.log(someCapitals)

const findCapital = capitals.find((capital) => {
  return capital.startsWith("B")
})
console.log("find->", findCapital)

const findIndex = capitals.findIndex((capital) => {
  return capital.length > 3
})

console.log(findIndex)

const indexOfItem = capitals.indexOf("Rome")

console.log("indexof->", indexOfItem)

const doesBelinExist = capitals.includes("Berlin")

console.log(doesBelinExist)

function isHereBeACapital(array) {
  const hasCapital = array.some((capital) => {
    return capital === "London"
  })
  return hasCapital
}

const answer = isHereBeACapital(["London", "Barcelona", "Valetta"])
const anotherAnswer = isHereBeACapital(["Paris", "Zagreb", "Helsinki"])
console.log("some->", answer, anotherAnswer)

function oddOrEven(array) {
  return array.map((number) => (number % 2 === 0 ? "even" : "odd"))
}

const checkEvenOrOdd = oddOrEven([1, 2, 3, 4, 5, 6])
console.log("odd or even in my array", checkEvenOrOdd)

function beginsWithB(array) {
  return array.filter((word) => word[0] === "B" || word[0] === "b")
}

const words = beginsWithB(["apple", "banana", "orange", "Boy"])
console.log("check if the word start with B or b", words)

function multipyBy10(array) {
  return array.map((number) => Math.abs(number * 10))
}

const multiplyNumbers=multipyBy10([1,2,-3,4,5,6,7])
console.log('multiply numbers in array', multiplyNumbers)

function findIndexx(val,array){
  const indexOfVal = array.indexOf(val)
  return indexOfVal>=0 ? indexOfVal : 'Not found'
}

const names=findIndexx('Alex',['Jim','Alex','John'])
console.log ('Index of given value in a array', names)

function divisibleBy3(array){
  return array.some(num => num%3===0)
}

const checkdevidevBy3 = divisibleBy3([1,2,3,4,5,6,7,8,9])
console.log('Devided by 3', checkdevidevBy3)

function sumOfArray(array){
  const sum =array.reduce((acc,num)=> {
    return acc + parseFloat(num) 
  },0)
  return sum
}

const sumOfArrayResult=sumOfArray([1,2.1,3.6])
console.log('sum of array', sumOfArrayResult)