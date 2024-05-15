// npm modules
import { useState, useRef, useEffect } from "react"

import { useParams } from "react-router-dom"


const PhotoAlbum = ({ user, getPetById, handleAddPhoto, handleDeletePhoto }) => {
  const { petId } = useParams()
  const [pet, setPet] = useState(null)
  const imgInputRef = useRef(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [message, setMessage] = useState('')
  const [photoData, setPhotoData] = useState({ photo: null })
  
  useEffect(() => {
    setPet(getPetById(petId))
  }, [petId, getPetById])

  if (!petId) return (
    <main className="album">
      <h1>Loading...</h1>
    </main>
  )

  const handleClick = idx => {
    handleDeletePhoto(idx, petId)
  }

  const handleSubmit = async evt => {
    try {
      evt.preventDefault()
      setIsSubmitted(true)
      await handleAddPhoto(photoData.photo, petId)
      imgInputRef.current.value = null
      setIsSubmitted(false)
    } catch (err) {
      console.log(err)
      setIsSubmitted(false)
    }
  }

  const handleChangePhoto = evt => {
    if (evt.target.files.length) {
      const file = evt.target.files[0]
      let isFileInvalid = false
      let errMsg = ""
      const validFormats = ['gif', 'jpeg', 'jpg', 'png', 'svg', 'webp']
      const photoFormat = file.name.split('.').at(-1)
  
      // cloudinary supports files up to 10.4MB each as of May 2023
      if (file.size >= 10485760) {
        errMsg = "Image must be smaller than 10.4MB"
        isFileInvalid = true
      }
      if (!validFormats.includes(photoFormat)) {
        errMsg = "Image must be in gif, jpeg/jpg, png, svg, or webp format"
        isFileInvalid = true
      }
      
      setMessage(errMsg)
      
      if (isFileInvalid) {
        imgInputRef.current.value = null
        return
      }
  
      setPhotoData({ photo: evt.target.files[0] })
    } else {
      setPhotoData({ photo: null})
    }
  }


  return (
    <main className="album">
      <h1>Photo Album</h1>
      <p>{message}</p>
      {pet?.owner === user.profile &&
        <form className="album-form" onSubmit={handleSubmit}>
          <input 
            type="file" 
            name="photo"
            className="add-photo-input"
            onChange={handleChangePhoto}
            ref={imgInputRef}
          />
          <button
            disabled={ isSubmitted || !imgInputRef.current?.value }
            className="add-photo-btn"
            type='submit'
          >
            {!isSubmitted ? 'Add Photo' : '🚀 Sending...'}
          </button>
        </form>
      }
      <div className="photo-container">
        {pet?.photos.map((photo, idx) =>
          <div key={photo} className="photo-card">
            <img className="album-photo" src={photo} alt="A photo of this pet" />
            {pet.owner === user.profile &&
              <button onClick={() => handleClick(idx)} className="delete-btn">X</button>
            }
          </div>
        )}
      </div>
    </main>
  )
}

export default PhotoAlbum