import logo from '../styles/logo.svg'

function NavBar() {
  return (
    <nav className="nav">
      <ul>
        <img className='logo'src={logo} alt="Krispy Kreme logo " width="150" height="124" />
        <li>
          <a href="news.asp">News</a>
        </li>
        <li>
          <a href="contact.asp">Contact</a>
        </li>
        <li>
          <a href="about.asp">About</a>
        </li>
      </ul>
    </nav>
  )

  //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //     <div className="container-fluid">
  //       <button
  //         className="navbar-toggler"
  //         type="button"
  //         data-bs-toggle="collapse"
  //         data-bs-target="#navbarSupportedContent"
  //         aria-controls="navbarSupportedContent"
  //         aria-expanded="false"
  //         aria-label="Toggle navigation"
  //       >
  //         <span className="navbar-toggler-icon"></span>
  //       </button>
  //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  //           <li className="nav-item">

  //               <div>Home</div>

  //           </li>
  //           <li className="nav-item">
  //             {/* <a className="nav-link" href="#"> */}
  //               <div>Link</div>
  //             {/* </a> */}
  //           </li>

  //         </ul>
  //         <form className="d-flex">
  //           <input
  //             className="form-control me-2"
  //             type="search"
  //             placeholder="Search"
  //             aria-label="Search"
  //           />
  //           <button className="btn btn-outline-success" type="submit">
  //             Search
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   </nav>
  // )
}

export default NavBar