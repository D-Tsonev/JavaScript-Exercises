import React from 'react'

function Hero({ title, subtitle }) {
  return (
    <section className="Hero hero is-medium">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1 has-text-white">
            {title}
          </h1>
          <p className="subtitle has-text-white is-4">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
