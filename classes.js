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
  introduce(){
    console.log(``)
  }
}

new Animal('Cobra')
