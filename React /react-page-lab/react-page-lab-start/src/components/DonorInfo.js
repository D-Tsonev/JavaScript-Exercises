import React from 'react'

function DonorInfo({ contact }) {
  return (
    <section>
      <ul>
        <li>
          <p>{contact.email}</p>
        </li>
      </ul>
    </section>
  )
}

export default DonorInfo
