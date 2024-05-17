//components
import VisitCard from "../VisitCard/VisitCard"


const Visits = (props) => {
  if (!props.visits.length) return <h4>No Visits Yet!</h4>
  return (
    <>
      {props.visits.map((visit) => (
        <VisitCard
        key={visit._id}
        visit={visit}
        user={props.user}
        petId={props.petId}
        handleDeleteVisit={props.handleDeleteVisit}
      />
      ))}
    </>
  )
}

export default Visits