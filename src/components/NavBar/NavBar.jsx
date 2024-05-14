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
          <li><NavLink to="/profiles">Profiles</NavLink></li>
          <li><NavLink to="/pets">PETS</NavLink></li>
          <li><NavLink to="/pets/new">NEW PET</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
          <li><NavLink to="/auth/change-password">Change Password</NavLink>
          </li>
        </ul>
      :
        <ul>
          <li><NavLink to="/auth/login">Log In</NavLink></li>
          <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
