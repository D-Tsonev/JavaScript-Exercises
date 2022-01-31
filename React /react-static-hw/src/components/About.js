function About ({ text }) {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-10 content">
            <h2 className="title">About</h2>
            <div>
              {text.map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About