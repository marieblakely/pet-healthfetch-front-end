//npm modules
import { NavLink } from "react-router-dom"
//components
// import OwnerInfo from "../OwnerInfo/OwnerInfo"
import Icon from "../Icon/Icon"

const VisitCard = ({ visit, petId, handleDeleteVisit }) => {
  return (
    <article>
      <header>
        <span>
          {/* <OwnerInfo content={visit} />
          {visit.owner._id === user.profile && */}
            <>
              <NavLink to={`/pets/${petId}/pets/edit`} state={visit}>
                <Icon category='Edit' />
              </NavLink>
              <button onClick={()=> handleDeleteVisit(petId, visit._id)}> <Icon category='Trash' />
              </button>
            </>
          {/* } */}
        </span>
      </header>
      <p>Reason For Visit: {visit.visitReason}</p>
      <p>Visit Request Date: {visit.visitDate}</p>
      <p>Is Visit Urgent?: {visit.urgent ? 'yes' : 'no' }</p>
    </article>
  )
}

export default VisitCard