import React from 'react'

function CheeseCard({ name, image, origin }) {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
        </div>
        <div className="card-image">
          <figure className="image">
            <img src={image} alt={name} />
          </figure>
          <div className="card-content">
            <h5 className="title is-6 is-marginless">{origin}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheeseCard
