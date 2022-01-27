function ListComponent() {
  const animals = ['lion', 'cheetah', 'tiger', 'panther']

  return (
    <div>
      {animals.map(animal => (
        <p key={animal}>{animal}</p>
      ))}
    </div>
  )
}

export default ListComponent
