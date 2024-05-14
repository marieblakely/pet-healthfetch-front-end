// npm modules
import { NavLink } from 'react-router-dom'
//assets
import logo from '../../assets/branding/logo.png'
//css
import styles from './NavBar.module.css'



const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className={styles.container}>
      {user ?
        <ul>
          <li>Welcome, {user.name}</li>
          <li><NavLink to="/profiles">PROFILES</NavLink></li>
          <li><NavLink to="/pets">PETS</NavLink></li>
          <li><NavLink to="/pets/new">NEW PET</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
          <li><NavLink to="/auth/change-password">CHANGE PASSWORD</NavLink>
          </li>
        </ul>
      :
        <ul>
          <li><NavLink to="/auth/login">LOG IN</NavLink></li>
          <li><NavLink to="/auth/signup">SIGN UP</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
