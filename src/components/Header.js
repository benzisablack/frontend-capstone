import logo from '../assets/Logo.svg'
import Nav from './Nav'

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo"></img>
      <Nav />
    </header>
  )
}

export default Header