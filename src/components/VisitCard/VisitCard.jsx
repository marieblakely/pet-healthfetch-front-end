//npm modules
import { NavLink } from "react-router-dom"
import Icon from "../Icon/Icon"
// import OwnerInfo from "../OwnerInfo/OwnerInfo"
// css
import styles from './VisitCard.module.css'


const VisitCard = ({ visit, petId, handleDeleteVisit }) => {
  return (
    <article className={styles.container}>
      <h1>Visit Info</h1>
        <p>Reason For Visit: {visit.visitReason}</p>
        <p>Visit Request Date: {new Date(visit.visitDate).toLocaleString()}</p>
        <p>Is Visit Urgent?: {visit.urgent ? 'yes' : 'no' }</p>
        <span>
          {/* <OwnerInfo content={visit} />
          {visit.owner === user.profile && */}
            <>
              <NavLink to={`/pets/${petId}/pets/edit`} state={visit}>
                <Icon category='Edit' className={styles.edit} />
              </NavLink>
              <button className={styles.trash} onClick={()=> handleDeleteVisit(petId, visit._id)}> <Icon category='Trash' />
              </button>
            </>
          {/* // } */}
        </span>
    </article>
  )
}

export default VisitCard