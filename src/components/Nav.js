import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import hamburgerMenuIcon from '../assets/hamburger_menu.svg'

const Nav = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const pageList = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Reservations', path: '/reservation' },
    { name: 'Order Online', path: '/order' },
    { name: 'Login', path: '/login' },
  ]
  return (
    <nav className='container-grid nav-bar'>
      <img src={logo} alt='Logo' />
      <button
        type="button"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <img src={hamburgerMenuIcon} alt="Navigation menu icon" />
      </button>
      <ul>
        {
          pageList.map((page) => (
            <li key={page.name}>
              <Link to={page.path}>{page.name}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Nav