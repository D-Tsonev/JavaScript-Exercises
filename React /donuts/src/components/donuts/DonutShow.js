import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { getSingleDonut } from '../../lib/api'

function DonutShow() {
  const [singleDonut, setSingleDonut] = React.useState(null)
  const { id } = useParams()
  React.useEffect(() => {
    const getData = async () => {
      const res = await getSingleDonut(id)
      setSingleDonut(res.data)
    }
    getData()
  }, [id])

  console.log(singleDonut)

  return (
    <section>
      {singleDonut ? (
        <div>
          <h1>{singleDonut.title}</h1>
          <img
            src={`http://localhost:3000/${singleDonut.img}`}
            alt={singleDonut.imgAlt}
          />
          <p>{singleDonut.description}</p>
        </div>
      ) : (
        <p>Loading ...</p>
      )}
    </section>
  )
}

export default DonutShow
