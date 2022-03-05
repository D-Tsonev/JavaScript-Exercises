import React from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import NavBar from './components/Navbar'
import DonutIndex from './components/donuts/DonutIndex'
import AboutPage from './components/AboutPage'
import RandomDonut from './components/donuts/RadnomDonut'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<DonutIndex />} />
        <Route path="about" element={<AboutPage />} />
        <Route path='randomdonut' element={<RandomDonut/>}/>
      </Routes>
    </BrowserRouter>
  )
}


/* <ul>
        
      </ul> */

export default App
