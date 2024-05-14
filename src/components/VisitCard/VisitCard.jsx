//components
import OwnerInfo from "../OwnerInfo/OwnerInfo"

const VisitCard = ({ visit, user }) => {
  return (
    <article>
      <header>
        <OwnerInfo content={visit} />
      </header>
      <p>{visit.Reason}</p>
      <p>{visit.Date}</p>
      <p>{visit.urgent}</p>
    </article>
  )
}

export default VisitCard