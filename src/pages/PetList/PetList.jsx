// components
import PetCard from '../../components/PetCard/PetCard'
//css
import styles from './PetList.module.css'


const PetList = (props) => {
  return ( 
    <main className={styles.container}>
      {props.pets.map(pet => (
        <PetCard 
          key={pet._id} 
          pet={pet} 
          user={props.user}
        />
      ))}
    </main>
  )
}

export default PetList