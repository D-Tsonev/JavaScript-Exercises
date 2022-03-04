import logo from '../styles/logo.svg'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <nav className="nav">
      <ul>
        <li className='NavBar'>
        <Link to='/'>
        <img className='logo'src={logo} alt="Krispy Kreme logo " width="150" height="124" /> 
        </Link>
        <Link to='/menu'>Menu</Link>
        <Link to='randomdonut'>Random Donut </Link>
        <Link to='/about'> About Us </Link>
        </li>
      </ul>
    </nav>
  )

}

export default NavBar
