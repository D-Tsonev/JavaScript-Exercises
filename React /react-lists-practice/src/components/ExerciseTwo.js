// * 🦉 Map the arrays inside the menu object, to show both the dish name and price inside a "p" tag
// * 🤖 Remember to add a "key" prop to the outer most element created from a "map", it can be any type of value, but must be UNIQUE for every item.

function ExerciseTwo() {
  const menu = {
    breakfast: [
      { dish: 'Bacon Sandwich', price: 4 },
      { dish: 'Avocado on Toast', price: 4 },
      { dish: 'Full English', price: 8 },
    ],
    lunch: [
      { dish: 'Chicken Salad', price: 7 },
      { dish: 'Poutine', price: 8 },
      { dish: 'Burrito', price: 8 },
    ],
  }

  return (
    <div>
      <h1>2</h1>
      <h3>Breakfast</h3>
      {menu.breakfast.map((item) => (
        <p key={item.dish}>
          {' '}
          {item.dish} - £{item.price}
        </p>
      ))}
      <h3>Lunch</h3>
      {menu.lunch.map((item) => (
        <p key={item.dish}>
          {' '}
          {item.dish} - £{item.price}
        </p>
      ))}
    </div>
  )
}

export default ExerciseTwo
