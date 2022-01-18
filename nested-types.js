// *  ----- NESTED TYPES ------ *
// *  💻 Remember "fn" key + "f8" to run  your code

// * 🦉 Practice

// ! ⚠️Remember to comment out your practice code before attempting below, "cmd" + "/"

// * **********************************************************************************

// ? Uncomment the following array

const items = [
  { id: 1, name: 'Nike Air Max 97', inStock: true },
  { id: 2, name: 'Adidas Continental', inStock: true },
  { id: 3, name: 'Adidas Supercourt', inStock: true },
  { id: 4, name: 'Nike Jordan Dunks', inStock: true },
]

// ? Create a new array "itemsCopy" from it using map, update the Nike Jordans Dunks in the copyArray to have an "inStock" value of false.
// Make sure using console.log that you have not affected the original items array.


const itemsCopy = items.map(item => {
  if (item.id === 4) {
    return { ...item, inStock: false }
  }
  return { ...item }
})
console.log('og', items)
console.log('new', itemsCopy)
