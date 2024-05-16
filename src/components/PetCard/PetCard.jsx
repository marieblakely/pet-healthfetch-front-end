// npm modules
import { NavLink } from 'react-router-dom'
// components
import ImgCarousel from '../ImgCarousel/ImgCarousel'
// import OwnerInfo from '../OwnerInfo/OwnerInfo'
//assets
import logo from '../../assets/branding/logo.png'
//css
import styles from './PetCard.module.css'

const PetCard = ({ pet, user }) => {
  return (  
    <>
    <li>
    {pet.photos.length ?
      <ImgCarousel photos={pet.photos} /> 
    :
      <img src={logo} alt="A cute pet" /> 
    }
  
    <NavLink to={`/pets/${pet._id}`}>
      <article className={styles.container}>
        <header>
          <h1>{pet.name.toUpperCase()}</h1>
        </header>
      </article>
    </NavLink>
    <NavLink to={`/pets/${pet._id}/album`}>
      <button className="camera-btn">
        🖼️
      </button>
    </NavLink>
    </li>
  </>
  )
}

export default PetCard