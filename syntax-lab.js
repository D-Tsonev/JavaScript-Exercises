// ? 1)

const objectContainingArray = {
  arrayWhoseFirstElementIsAnObject: [
    {
      book: '📒',
      car: '🚘',
      fruit: '🥝',
    },
  ],
}

console.log(objectContainingArray.arrayWhoseFirstElementIsAnObject[0]['fruit'])

// ? 2)

const arraysWhoseElementsAreArrays = [
  [1, 2, 3],
  ['red', 'blue', 'green'],
  ['🤖', '🍏', '🐢'],
]

console.log(arraysWhoseElementsAreArrays[2][1])

// ? 3)

const objectWithAnObjectInside = {
  nestedObject: {
    methodToGetTheFruit() {
      return '🥥'
    },
  },
}

console.log(objectWithAnObjectInside.nestedObject.methodToGetTheFruit())

// ? 4)

function functionThatReturnsAnObject() {
  return {
    methodOnThatObject() {
      return '🍎'
    },
  }
}

console.log(functionThatReturnsAnObject().methodOnThatObject())

// ? 5)

const secretDoorArrowFunction = (arg, arg2) => {
  if (arg === 'open' && arg2 === 'sesame') {
    return '🍇'
  }
}

console.log(secretDoorArrowFunction('open', 'sesame'))

// ? 6)

const arrowFunctionThatReturnsAnotherArrowFunction = () => {
  return () => '🍊'
}

// so for this one, you gotta call the function that our first function returns.

console.log(arrowFunctionThatReturnsAnotherArrowFunction()())

// ? 7)

const objectWithMethodsToCall = {
  locked: true,
  unlockDoor() {
    this.locked = false
    return this
  },
  openDoor() {
    if (!this.locked) {
      return '🍍'
    }
  },
}

// for this one, notice that .unlockDoor() returns 'this', which is our object.
// This means we can call .openDoor() immediately on our object to get the fruit!

console.log(objectWithMethodsToCall.unlockDoor().openDoor())

// ? 8)

function functionWhoseParameterShouldBeAnObject(objectWithRightProperty) {
  if (objectWithRightProperty.magicWords === 'open sesame') {
    return '🍋'
  }
}

// This one is sneaky. You need to pass through an object with the property `magicWords: 'open sesame'.`
// The if statement inside the function will then check if that property's value is correct on our object
// and if it is.. it'll give us the fruit.

console.log(
  functionWhoseParameterShouldBeAnObject({ magicWords: 'open sesame' })
)

// ? 9)

const arrayWhoseFirstElementIsAnArrowFunction = [
  () => {
    return '🍌'
  },
]

console.log(arrayWhoseFirstElementIsAnArrowFunction[0]())

// Grab our function out of our array, and call it

// ? 10) // getting close!

const arrowFunctionThatReturnsAnObject = () => {
  function innerFunctionThatHasTheFruit() {
    return '🍒'
  }
  const wow = 'thats cool,'
  const iDidNotKnow = 'you could do that...'
  const javascript = 'is magic!'
  return {
    wow,
    iDidNotKnow,
    javascript,
    innerFunctionThatHasTheFruit,
  }
}

// The object that gets returned from 'arrowFunctionThatReturnsAnObject' is a cool shorthand,
// that let's us create new object properties using variables. It's equivalent to doing this:
// return {
//   wow: 'thats cool,'
//   iDidNotKnow: 'you could do that...',
//   javascript: 'is magic!',
//   innerFunctionThatHasTheFruit() {
//     return '🍒'
//   }
// }

console.log(arrowFunctionThatReturnsAnObject().innerFunctionThatHasTheFruit())


// ! 11) // Last one!

function closureToGetTheFinalFruit() {
  let ancientMoonsAligned = 0
  let magicWords = 'Open, please?'
  let holdBreath = false
  return {
    updateMagicWords(newMagicWords) {
      magicWords = newMagicWords
      return this
    },
    alignAncientMoon() {
      ancientMoonsAligned++
      return this
    },
    holdBreathForFiveSeconds() {
      holdBreath = true
      return this
    },
    openPortalToFruit() {
      if (ancientMoonsAligned !== 2) {
        console.log('The moons are not yet aligned.')
      } else if (magicWords !== 'open sesame') {
        console.log('These are not the words you need.')
      } else if (!holdBreath) {
        console.log('You must hold your breath for this to work.')
      }
      return '🥭'
    },
  }
}

// A long one, but you can do it with a single statement!
// The basic idea is we're manipulating the state of the 3 'let' variables inside our function,
// by calling the methods on the object the function returns to us.
// Functions that capture state and keep variables around in this way are called 'closures'

console.log(
  closureToGetTheFinalFruit()
    .updateMagicWords('open sesame') 
    .alignAncientMoon() 
    .alignAncientMoon() 
    .holdBreathForFiveSeconds() 
    .openPortalToFruit()
)
