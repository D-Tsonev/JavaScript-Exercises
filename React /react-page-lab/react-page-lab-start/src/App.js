import React from 'react'
import Header from './components/Header'
import GeneralInfo from './components/GeneralInfo'

function App() {
  const headerData = {
    title: 'Sargent Portraits of Artists & Friends',
    subtitle: 'by John Sergent',
  }

  const infoData = {
    hours: [
      { day: 'Monday', times: '10.00am - 5.50pm' },
      { day: 'Tuesday', times: '10.00am - 5.30pm' },
      { day: 'Wednesday', times: '10.00am - 5.30pm' },
      { day: 'Thursday', times: '10.00am - 5.30pm' },
      { day: 'Friday', times: '10.00am - 9.00pm' },
      { day: 'Saturday', times: '10.00am - 9.00pm' },
      { day: 'Sunday', times: '10.00am - 5.30pm' },
    ],
    admissions: [
      { type: 'Adults', amount: 25 },
      { type: 'Seniors', amount: 17 },
      { type: 'Students', amount: 12 },
    ],
  }

  const donorData = {
    contact: {
      email: 'development@metmuseum.org',
      phone: '212-650-2425',
    },
    amounts: [50, 100, 250, 500, 1000, 5000],
  }

  return (
    <main>
      <h1>The Metropolitan Museum of Art</h1>
      <hr />
      <Header {...headerData} />
      <hr />
      <GeneralInfo {...infoData} />
      <hr />
      {/* <DonorInfo {...donorData} /> */}
    </main>
  )
}

export default App
