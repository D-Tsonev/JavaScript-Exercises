import React from 'react'

function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <h2 className="title">Gallery</h2>
        <div className="columns">
          <div className="column is-one-third">
            <div className="image image-one"></div>
          </div>
          <div className="column is-one-third">
            <div className="image image-two"></div>
          </div>
          <div className="column is-one-third">
            <div className="image image-three"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery