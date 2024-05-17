//npm imports
import { useState } from 'react'
// css
import styles from './NewVisit.module.css'


const NewVisit = (props) => {
  const [formData, setFormData] = useState({
    photo: '',
    visitReason: '',
    visitDate: '',
    urgent: false,
  })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleCheckBox = (evt) => {
    console.log(evt.target.value)
    const checkboxVal = formData.urgent
    setFormData({ ...formData, urgent: !checkboxVal })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddVisit(formData)
    setFormData({
      photo: '',
      visitReason: '',
      visitDate: '',
      urgent: false,
    })
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h1>New Visit</h1>
      <label htmlFor="visitReason-input">Reason For Visit</label>
        <input
          required
          type="text" 
          name="visitReason"
          id="visitReason-input"
          placeholder="Reason For Your Visit"
          value={formData.visitReason}
          onChange={handleChange}
        />
        <label htmlFor="visitDate-input">Visit Date</label>
				<input
          required
          type="datetime-local"
          name="visitDate"
          id="visitDate-input"
          value={formData.visitDate}
          placeholder="Visit Request Date"
          onChange={handleChange}
        />
        <label htmlFor="urgent-input">Is This Request Urgent?</label>
				<input
          type="checkbox"
          name="urgent"
          id="urgent checkbox"
          checked={formData.urgent ? 'on' : ''}
          onChange={handleCheckBox}
        />
      <button type="submit">Submit</button>
    </form>
  )
}

export default NewVisit