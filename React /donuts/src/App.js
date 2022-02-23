
import React from 'react'
import axios from 'axios'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
// import Home from './components/Home'
import NavBar from './components/Navbar'
import DonutIndex from './components/donust/DonutIndex'

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
      <Switch>
        <Route  exact path='/'>
          <Home/>
        </Route>
        <Route  exact path='/donuts'>
          <DonutIndex/>
        </Route>
      </Switch>
      </BrowserRouter>


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
    
  )
}

export default App
