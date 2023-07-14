const Nav = () => {

  const pageList = [
    { id: 'home', name: 'Home', url: '/home' },
    { id: 'about', name: 'About', url: '/about' },
    { id: 'menu', name: 'Menu', url: '/menu' },
    { id: 'reservation', name: 'Reservations', url: '/reservation' },
    { id: 'order', name: 'Order Online', url: '/order' },
    { id: 'login', name: 'Login', url: '/login' },
  ]
  return (
    <nav>
      <ul>
        {
          pageList.map((page) => (
            <li key={page.id}><a href={page.url}>{page.name}</a></li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Nav