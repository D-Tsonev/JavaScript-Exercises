import React from 'react'

function GeneralInfo({ hours, admissions }) {
  return (
    <section>
      <h2>General Info:</h2>
      <h3>Hours</h3>
      <ul>
        {hours.map(time => (
          <li key={time.day}><strong>{time.day}</strong>: {time.times}</li>
        ))}
      </ul>
      <h3>Suggested Admission:</h3>
      <ul>
        {admissions.map(price => (
          <li key={price.type}><strong>{price.type}</strong>: ${price.amount}</li>
        ))}
      </ul>
    </section>
  )
}

export default GeneralInfo
