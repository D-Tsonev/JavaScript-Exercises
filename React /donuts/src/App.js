import React from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import NavBar from './components/Navbar'
import DonutIndex from './components/donust/DonutIndex'
import Welcome from './components/AboutPage'
import AboutPage from './components/AboutPage'

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
  
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route   exact path="/" element={<Home/>}  />
        <Route  path="/donuts" element={<DonutIndex/>}/>
        < Route path='about' element={<AboutPage/>}/>
      </Routes>
    </BrowserRouter>
  )
  }
  // {
    /* <Home /> */
  

  
    /* <ul>
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
      </ul> */
        


export default App
