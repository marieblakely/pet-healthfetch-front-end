//npm imports
import { useState } from 'react'
// css
import styles from './NewVisit.module.css'
//components
import Icon from '../Icon/Icon'

const NewVisit = (props) => {
  const [formData, setFormData] = useState({ text: ''})

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddVisit(formData)
    setFormData({ text: '' })
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
          required
          type="checkbox"
          name="urgent"
          id="urgent checkbox"
          value={formData.urgent}
          // placeholder="Check Yes or No"
          onChange={handleChange}
        />
      <button type="submit">Submit</button>
    </form>
  )
}

export default NewVisit