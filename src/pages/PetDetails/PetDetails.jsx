//npm modules\
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
//services
import * as petService from '../../services/petService'
//components
import Loading from '../Loading/Loading'
import OwnerInfo from '../../components/OwnerInfo/OwnerInfo'
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

  if (!pet) return <Loading />

  return (  
    <main className={styles.container}>
      <section>
        <span>
          <h5>Phone Number: {pet.phone}</h5>
          <h5>Address: {pet.address}</h5>
          <h5>DOB: {pet.birthdate}</h5>
          <h5>Breed: {pet.breed}</h5>
          <h5>Color: {pet.color}</h5>
          <h5>Sex: {pet.sex}</h5>
          <h5>Elixir: {pet.elixir}</h5>
          <h5>Medical History: {pet.medicalHistory}</h5>
          <h5>Medications: {pet.medications}</h5>
          <h5>Allergies: {pet.allergies}</h5>
          <h5>Vet Name: {pet.vetName}</h5>
        </span>
        <OwnerInfo content={pet} />
      </section>
    </main>
  )
}

export default PetDetails