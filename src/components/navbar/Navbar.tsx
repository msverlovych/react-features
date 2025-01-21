import { FC, ReactElement } from 'react'
import { Link, useLocation } from 'react-router'
import './Navbar.scss'

const Navbar: FC = (): ReactElement => {
  const location = useLocation()

  return (
    <nav className="navbar">
      <span className="navbar__logo">
        React-19
        <span className='navbar__logo-red'> PLAY</span>
        <span className='navbar__logo-blue'>GROUND</span>
      </span>
      {location.pathname !== '/' && <Link className='navbar__link' to='/'>GO BACK</Link>}
    </nav>
  )
}

export default Navbar;