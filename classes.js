class Person {
  constructor(name, age, hometown) {
    this.name = name
    this.age = age
    this.hometown = hometown
  }
  introduce() {
    console.log(
      `Hello my name is ${this.name}.I am ${this.age} years old, and I am from ${this.hometown}.`
    )
  }
}

const dimi = new Person('Dimi', 30, 'London')
const sam = new Person('Sam', 27, 'London')

dimi.introduce()
sam.introduce()

class Animal {
  constructor(name, colour) {
    this.name = name
    this.colour = colour
  }
  introduce() {
    console.log(`Hi my name is ${this.name} and I am ${this.colour}`)
  }
}

class Duck extends Animal {
  constructor(name, colour, type) {
    super(name, colour)
    this.type = type
    this.colour = 'Brown '
  }
  quack() {
    console.log(`QUACK ${this.type}`)
  }
}

const donald = new Duck('Donald', 'yellow', 'type')
donald.introduce()
donald.quack()
