// npm modules
import { NavLink } from 'react-router-dom'
// components
import Icon from '../Icon/Icon'
import OwnerInfo from '../OwnerInfo/OwnerInfo'
//css
import styles from './PetCard.module.css'

const PetCard = ({ pet }) => {
  return (  
    <>
    <NavLink to={`/pets/${pet._id}`}>
      <article className={styles.container}>
      <img src={pet.photo} alt="pet photo"/>
      <header>
          <span>
            <h1>{pet.name}</h1>
          </span>
          <OwnerInfo content={pet} />
        </header>
          <section>
            <h5>{pet.phone}</h5>
            <h5>{pet.address}</h5>
            <h5>{pet.birthdate}</h5>
            <h5>{pet.breed}</h5>
            <h5>{pet.color}</h5>
            <h5>{pet.sex}</h5>
            <h5>{pet.elixir}</h5>
            <h5>{pet.medicalHistory}</h5>
            <h5>{pet.medications}</h5>
            <h5>{pet.allergies}</h5>
            <h5>{pet.vetName}</h5>
          </section>
      </article>
    </NavLink>
    </>
  )
}

export default PetCard