// npm modules
import { NavLink } from 'react-router-dom'
// components
// import Icon from '../Icon/Icon'
// import OwnerInfo from '../OwnerInfo/OwnerInfo'
//css
import styles from './PetCard.module.css'

const PetCard = ({ pet }) => {
  return (  
  <>
    <NavLink to={`/pets/${pet._id}`}>
      <article className={styles.container}>
        <header>
          <h1>{pet.name}</h1>
          <img src={pet.photo} alt="pet photo"/>
        </header>
      </article>
    </NavLink>
  </>
  )
}

export default PetCard