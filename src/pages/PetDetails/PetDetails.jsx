//npm modules\
import { useState, useEffect } from 'react'
import { useParams, NavLink } from "react-router-dom"
//services
import * as petService from '../../services/petService'
//components
import Loading from '../Loading/Loading'
import OwnerInfo from '../../components/OwnerInfo/OwnerInfo'
import Icon from '../../components/Icon/Icon'
import NewVisit from '../../components/NewVisit/NewVisit'
import Visits from '../../components/Visits/Visits'
// css
import styles from './PetDetails.module.css'


const PetDetails = (props) => {
  const { petId } = useParams()
  const [pet, setPet] = useState(null)

  useEffect(() => {
    const fetchPet = async () => {
      const petData = await petService.show(petId)
      setPet(petData)
    }
    fetchPet()
  }, [petId])

  const handleAddVisit = async (visitFormData) => {
    const newVisit = await petService.createVisit(petId, visitFormData)
    setPet({ ...pet, visits: [...pet.visits, NewVisit] })
  } 

  if (!pet) return <Loading />

  return (  
    <main className={styles.container}>
      <section>
        <article>
          <h5>Phone Number: {pet.phone}</h5>
          <h5>Address: {pet.address}</h5>
          <h5>DOB: {pet.birthDate}</h5>
          <h5>Breed: {pet.breed}</h5>
          <h5>Color: {pet.color}</h5>
          <h5>Sex: {pet.sex}</h5>
          <h5>Elixir: {pet.elixir}</h5>
          <h5>Medical History: {pet.medicalHistory}</h5>
          <h5>Medications: {pet.medications}</h5>
          <h5>Allergies: {pet.allergies}</h5>
          <h5>Vet Name: {pet.vetName}</h5>
        </article>
        <span>
          <OwnerInfo content={pet} />
          {pet.owner._id === props.user.profile &&
            <>
              <NavLink to='/pets/edit' state={pet}>
                <Icon category='Edit' />
              </NavLink>
              <button onClick={() => props.handleDeletePet(petId)}>
                <Icon category='Trash' />
              </button>
            </>
            }
        </span>
        <div>
          <NewVisit handleAddVisit={handleAddVisit} />
          <Visits visits={pet.visits} user={props.user} />
        </div>
      </section>
    </main>
  )
}

export default PetDetails