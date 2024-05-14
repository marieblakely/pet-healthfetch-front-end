//components
// import { Link } from "react-router-dom"
import OwnerInfo from "../OwnerInfo/OwnerInfo"

const VisitCard = ({ visit, user }) => {
  return (
    <article>
      <header>
      <span>
          {/* <OwnerInfo content={visit} />
          {visit.owner._id === user.profile &&
            <> */}
              {/* <Link to={`/pets/${petId}/visits/${visit._id}`} state={visit}>
                <Icon category='Edit'/>
              </Link> */}
							{/* <button onClick={()=> handleDeleteVisit(petId, comment._id)}>
                <Icon category='Trash'/>
              </button> */}
            {/* </>
          } */}
        </span>
      </header>
      <p>{visit.visitReason}</p>
      <p>{visit.visitDate}</p>
      <p>{visit.urgent ? 'yes' : 'no' }</p>
    </article>
  )
}

export default VisitCard