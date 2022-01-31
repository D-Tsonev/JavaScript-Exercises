import React from 'react'

function Menu ({ links, text }){
  return (
    <section className="section" id="menus">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-10 content">
            <h2 className="title">Menu</h2>
            {text.map(line=> (
              <p key={text.line}>{line}</p>
            ))}
            {links.map(link=>(
              <a key={text.link}>{link}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu