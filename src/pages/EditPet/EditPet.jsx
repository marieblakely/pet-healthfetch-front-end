// npm modules
import { useState } from "react"
import { useLocation } from "react-router-dom"

//css
import styles from './EditPet.module.css'

const EditPet = (props) => {
  const { state } = useLocation()
  const formatDate = (newDate) => {
    const date = new Date(newDate)
    return `${date.getUTCFullYear()}-${(date.getUTCMonth() + 1).toString().padStart(2, "0")}-${date.getUTCDate().toString().padStart(2, "0")}`
  }
  const [formData, setFormData] = useState({...state, birthDate: formatDate(state.birthDate)}) 


  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleUpdatePet(formData)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Edit Pet</h1>
        <label htmlFor="name-input">Name</label>
        <input
          required
          type="text" 
          name="name"
          id="name-input"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="photo-input">Phone</label>
				<input
          required
          type="text"
          name="phone"
          id="phone-input"
          value={formData.phone}
          placeholder="Phone"
          onChange={handleChange}
        />
        <label htmlFor="address-input">Address</label>
				<input
          required
          type="text"
          name="address"
          id="address-input"
          value={formData.address}
          placeholder="Address"
          onChange={handleChange}
        />
        <label htmlFor="birthDate-input">Birthdate</label>
				<input
          required
          type="date"
          name="birthDate"
          id="birthDate-input"
          value={formData.birthDate}
          placeholder="Birthdate"
          onChange={handleChange}
        />
        <label htmlFor="breed-input">Breed</label>
				<input
          required
          type="text"
          name="breed"
          id="breed-input"
          value={formData.breed}
          placeholder="Breed"
          onChange={handleChange}
        />
        <label htmlFor="color-input">Color</label>
				<input
          required
          type="text"
          name="color"
          id="color-input"
          value={formData.color}
          placeholder="Color"
          onChange={handleChange}
        />
        <label htmlFor="sex-input">Sex</label>
        <select
          required
          name="sex"
          id="sex-input"
          value={formData.sex}
          onChange={handleChange}
        >
          <option value="Female">Female</option>
          <option value="Spayed">Spayed</option>
          <option value="Male">Male</option>
          <option value="Neutered">Neutered</option>
        </select>
        <label htmlFor="elixir-input">Elixir</label>
				<input
          required
          type="text"
          name="elixir"
          id="elixir-input"
          value={formData.elixir}
          placeholder="Elixir"
          onChange={handleChange}
        />
        <label htmlFor="medicalHistory-input">Medical History</label>
				<input
          required
          type="text"
          name="medicalHistory"
          id="medicalHistory-input"
          value={formData.medicalHistory}
          placeholder="Medical History"
          onChange={handleChange}
        />
        <label htmlFor="medications-input">Medications</label>
				<input
          required
          type="text"
          name="medications"
          id="medications-input"
          value={formData.medications}
          placeholder="Medications"
          onChange={handleChange}
        />
        <label htmlFor="allergies-input">Allergies</label>
				<input
          required
          type="text"
          name="allergies"
          id="allergies-input"
          value={formData.allergies}
          placeholder="Allergies"
          onChange={handleChange}
        />
        <label htmlFor="vetName-input">Vet Name</label>
				<input
          required
          type="text"
          name="vetName"
          id="vetName-input"
          value={formData.vetName}
          placeholder="Vet Name"
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}



export default EditPet