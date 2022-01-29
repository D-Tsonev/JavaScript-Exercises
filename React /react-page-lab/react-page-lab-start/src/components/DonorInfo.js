import React from 'react'

function DonorInfo({ contact }) {
  return (
    <section>
      <h2>Donor Information</h2>
      <h3>Contact:</h3>
      <a href="/">{contact.email}</a>
      <h3>Donation Amounts:</h3>
    </section>
  )
}

export default DonorInfo
