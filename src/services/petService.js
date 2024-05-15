// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/pets`

async function index() {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function show(petId) {
  try {
    const res = await fetch(`${BASE_URL}/${petId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function create(petFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(petFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function update(petFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${petFormData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(petFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deletePet(petId) {
  try {
    const res = await fetch(`${BASE_URL}/${petId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function createVisit(petId, visitFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${petId}/visits`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(visitFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const updateVisit = async (petId, visitFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/${petId}/visits`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(visitFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteVisit = async (petId, visitId) => {
  try {
    const res = await fetch(`${BASE_URL}/${petId}/visits/${visitId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function addPhoto(photoData, petId) {
  try {
    console.log(photoData, petId)
    const photoFormData = new FormData()
    photoFormData.append('photo', photoData)
    const res = await fetch(`${BASE_URL}/${petId}/add-photo`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: photoFormData,
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}



export {
  index,
  show,
  create,
  update,
  deletePet as delete,
  createVisit,
  updateVisit,
  deleteVisit,
  addPhoto,
}
