import './App.css'
import React from 'react'
import axios from 'axios'

function App() {
  const [donuts, setDonuts] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('http://localhost:3000/donuts')
      setDonuts(data)
    }
    getData()
  }, [])

  console.log(donuts[7])

  return (
    <div>
      <ul>
        {donuts.map((donut) => (
          <>
            <li key={donut.id}>{donut.title}</li>
            <div>
              <img
                src={`http://localhost:3000/${donut.img}`}
                alt={donut.imgAlt}
              />
              {console.log(donut.imgAlt)}
            </div>
          </>
        ))}
      </ul>
    </div>
  )
}

export default App
