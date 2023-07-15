import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.svg';
import '../../styles/header.css';
import { navLinks } from '../../utils/navLinks';

const Header = () => {
  const currentLocation = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <header>
      <nav className="container grid nav-bar">
        <Link className="nav-bar-logo" to="/">
          <img src={logo} alt="Little Lemon logo" />
        </Link>
        <button
          className="nav-bar-hamburger"
          type="button"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {isNavExpanded ?
            <FontAwesomeIcon icon={faXmark} size="2x" /> :
            <FontAwesomeIcon icon={faBars} size="2x" />}
        </button>
        <ul className={isNavExpanded ? 'nav-bar-links expanded' : 'nav-bar-links'}>
          {navLinks.map((navLink) =>
            <li key={navLink.path}>
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
    </header>
  )
}

export default Header