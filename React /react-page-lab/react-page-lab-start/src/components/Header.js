import React from 'react'
import image from '../assets/hero.jpg'

function Header({ title, subtitle }) {
  return (
    <section>
      <h2>Exhibit:</h2>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
    </section>
  )
}

export default Header
