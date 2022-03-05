import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

function DonutShow() {
  const [singleDonut, setSingleDonuts] = React.useState(null)
  const { id } = useParams()
  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`http://localhost:3000/donuts/${id}`)
      setSingleDonuts(res.data)
    }
    getData()
  }, [id])

  console.log(singleDonut)

  return <h1>single donut </h1>
}

export default DonutShow
