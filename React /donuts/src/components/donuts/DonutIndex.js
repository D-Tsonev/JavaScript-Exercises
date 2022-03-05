import React from 'react'
import axios from 'axios'

function DonutIndex() {
  const [donuts, setDonuts] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('http://localhost:3000/donuts')
      setDonuts(res.data)
    }
    getData()
  }, [])

  console.log(donuts && donuts[0])

  return (
    <section>
      <div>
        <ul>
        {donuts ? 
          donuts.map(donut => (
            <>
              <li key={donut.id}>{donut.title}</li>
              <img
                src={`http://localhost:3000/${donut.img}`}
                alt={donut.imgAlt}
              />
              {console.log(donut.imgAlt)}
              <p>{donut.description}</p>
            </>
          )): (
          <p>Loading ...</p>
        )}
        </ul>
      </div>
    </section>
  )
}

export default DonutIndex
