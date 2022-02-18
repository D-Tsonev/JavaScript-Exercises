import React from 'react'
import axios from 'axios'

import Spinner from './Spinner'
import CheeseCard from './CheeseCard'

function CheesesList() {
  const [cheeses, setCheese] = React.useState(null)
  React.useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        'https://ga-cheesebored.herokuapp.com/cheeses'
      )
      setCheese(response.data)
    }
    getData()
  }, [])
  console.log('cheeses', cheeses)
  return (
    <section className="cheese-list">
      <div className="section">
        <div className="container">
          <div className="columns is-multiline">
            {cheeses ? (
              cheeses.map((cheese) => (
                <CheeseCard
                  key={cheese._id}
                  name={cheese.name}
                  origin={cheese.origin}
                  image={cheese.image}
                />
              ))
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
export default CheesesList
