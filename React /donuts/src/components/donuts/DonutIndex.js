import React from 'react'
import axios from 'axios'
import DonutCard from './DonutCard'

function DonutIndex() {
  const [donuts, setDonuts] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('http://localhost:3000/donuts')
      setDonuts(res.data)
    }
    getData()
  }, [])

  // console.log(donuts && donuts[0])

  return (
    <section>
      <div>
        <ul>
          {donuts ? (
            donuts.map((donut) => <DonutCard key={donut.id} {...donut} />)
          ) : (
            <p>Loading ...</p>
          )}
        </ul>
      </div>
    </section>
  )
}

export default DonutIndex
