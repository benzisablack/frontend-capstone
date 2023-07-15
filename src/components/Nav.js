import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import hamburgerMenuIcon from '../assets/hamburger_menu.svg';
import { navLinks } from '../utils/navLinks';
import '../styles/nav.css'

const Nav = () => {
  const currentLocation = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="container grid nav-bar">
      <Link className="nav-bar-logo" to="/">
        <img src={logo} alt="Little Lemon logo" />
      </Link>
      <button
        className="nav-bar-hamburger"
        type="button"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <img src={hamburgerMenuIcon} alt="Navigation menu icon" />
      </button>
      <ul className={isNavExpanded ? 'nav-bar-links expanded' : 'nav-bar-links'}>
        {navLinks.map((navLink, index) =>
          <li key={index}>
            <Link
              className={currentLocation.pathname === navLink.path ? 'currentLocation' : ''}
              to={navLink.path}
            >
              {navLink.name}
            </Link>
          </li>
        )
        }
      </ul>
    </nav>
  )
}

export default Nav