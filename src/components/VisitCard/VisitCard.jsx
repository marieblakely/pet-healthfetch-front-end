//npm modules
import { NavLink } from "react-router-dom"
import Icon from "../Icon/Icon"
// css
import styles from './VisitCard.module.css'


const VisitCard = ({ visit, petId, handleDeleteVisit }) => {
  return (
    <article>
      <header>
        <span>
            <>
              <NavLink to={`/pets/${petId}/pets/edit`} state={visit}>
                <Icon category='Edit' />
              </NavLink>
              <button onClick={()=> handleDeleteVisit(petId, visit._id)}> <Icon category='Trash' />
              </button>
            </>
        </span>
      </header>
      <p>Reason For Visit: {visit.visitReason}</p>
      <p>Visit Request Date: {new Date(visit.visitDate).toLocaleDateString()}</p>
      <p>Is Visit Urgent?: {visit.urgent ? 'yes' : 'no' }</p>
    </article>
  )
}

export default VisitCard