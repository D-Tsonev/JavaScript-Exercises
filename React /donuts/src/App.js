
import React from 'react'
import axios from 'axios'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/Navbar'

function App() {
  const [donuts, setDonuts] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('http://localhost:3000/donuts')
      setDonuts(data)
    }
    getData()
  }, [])

  return (
    <div>
      <NavBar />
      {/* <Home /> */}

      {/* <ul>
        {donuts.map((donut) => (
          <>
            <li key={donut.id}>{donut.title}</li>
            <img
              src={`http://localhost:3000/${donut.img}`}
              alt={donut.imgAlt}
            />
            {console.log(donut.imgAlt)}
            <p>{donut.description}</p>
          </>
        ))}
      </ul> */}
    </div>
  )
}

export default App