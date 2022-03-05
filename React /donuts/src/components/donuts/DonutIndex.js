import React from 'react'
import DonutCard from './DonutCard'
import { getAllDobuts } from '../../lib/api'

function DonutIndex() {
  const [donuts, setDonuts] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      const res = await getAllDobuts()
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
