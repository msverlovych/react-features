import { FC, ReactElement } from 'react'
import { Link, useLocation } from 'react-router'
import './Navbar.scss'

const Navbar: FC = (): ReactElement => {
  const location = useLocation()

  return (
    <nav className="Navbar">
      <span className="Navbar__logo">
        React-19
        <span className='Navbar__logo-red'> PLAY</span>
        <span className='Navbar__logo-blue'>GROUND</span>
      </span>
      {location.pathname !== '/' && <Link className='Navbar__link' to='/'>GO BACK</Link>}
    </nav>
  )
}

export default Navbar;