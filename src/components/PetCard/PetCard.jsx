// npm modules
import { NavLink } from 'react-router-dom'
// components
import ImgCarousel from '../ImgCarousel/ImgCarousel'
//assets
import logo from '../../assets/branding/logo.png'
//css
import styles from './PetCard.module.css'

const PetCard = ({ pet }) => {
  return (  
    <>
    <section>
      <NavLink to={`/pets/${pet._id}`}>
      <article className={styles.container}>
    {pet.photos.length ?
      <ImgCarousel photos={pet.photos} /> 
    :
      <img src={logo} alt="A cute pet" /> 
    }
        <h1>{pet.name.toUpperCase()}</h1>
    <NavLink to={`/pets/${pet._id}/album`}>
      <button className="camera-btn">
        📷
      </button>
    </NavLink>
      </article>
    </NavLink>
    </section>
  </>
  )
}

export default PetCard