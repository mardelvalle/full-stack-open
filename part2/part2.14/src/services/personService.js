import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const addPerson = (personObject) => {
  return axios.post(baseUrl, personObject).then(response => response.data)
}

const deletePerson = (id, persons, setPersons) => {
  axios
    .delete(`${baseUrl}/${id}`)
    .then(() => {
      setPersons(persons.filter(p => p.id !== id))
    })
    .catch(error => {
      alert(`Error deleting person ${id}: ${error.message}`)
    })
}

export default { addPerson, deletePerson }