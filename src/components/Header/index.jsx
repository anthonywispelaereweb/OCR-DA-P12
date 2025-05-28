import myRoutes from './../../routing';
import { NavLink } from 'react-router'
import Logo from './../../assets/sportsee.svg';
import './Header.scss'
const Header = () => {
  const filteredRoutes = myRoutes.filter(route => route?.label && route?.path)

  return (
    <header className="header">
      <div className="header-logo-ctn">
        <NavLink to={'/'}>
          <img src={Logo} alt='KASA' className='header-logo' />
          <h2 className='header-title'>SportSee</h2>
        </NavLink>
      </div>
      <nav className='header-menu'>
        <ul className='header-menu-list'>
          {filteredRoutes.map((route, index) => (
            <li key={index} className='header-menu-list-item'>
              <NavLink to={route.path}>{route.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  ); 
}

export default Header;