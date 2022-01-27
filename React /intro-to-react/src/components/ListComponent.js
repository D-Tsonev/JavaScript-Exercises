function ListComponent(props) {
  const animals = ['lion', 'cheetah', 'tiger', 'panther']

  console.log('Proprs->', props)

  return (
    <div>
      <p>{props.info}</p> 
      <h1>{props.moreInfo} </h1>
        
      {animals.map((animal) => (
        <p key={animal}>{animal}</p>
        
      ))}
    </div>
  )
}

export default ListComponent
