//components
import VisitCard from "../VisitCard/VisitCard"


const Visits = (props) => {
  if (!props.visits.length) return <h4>No Visits</h4>
  return (
    <>
      {props.visits.map((visit) => (
        <VisitCard
        key={visit._id}
        visit={visit}
        user={props.user}
      />
      ))}
    </>
  )
}

export default Visits