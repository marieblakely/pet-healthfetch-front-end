//npm modules\
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
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

  return (  
    <main className={styles.container}>
      PetDetails
    </main>
  )
}

export default PetDetails