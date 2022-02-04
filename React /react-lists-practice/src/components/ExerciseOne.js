// * 🦉 Map arrays inside the menu, to show the animal name inside a "p" tag, and add the icon inside a child "span"
// * 🤖 Remember to add a "key" prop to the outer most element created from a "map", it can be any type of value, but must be UNIQUE for every item.

function ExerciseOne() {
  const animals = [
    { name: 'Lion', icon: '🦁' },
    { name: 'Elephant', icon: '🐘' },
    { name: 'Cow', icon: '🐄' },
    { name: 'Chicken', icon: '🐓' }
  ]

  return (
    <div>
      <h1>1</h1>
      {animals.map(animal => (
        <h2 key={animal.name}> {animal.name} - {animal.icon}</h2>
      ))}
    </div>
  )
}

export default ExerciseOne
