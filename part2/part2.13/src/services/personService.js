import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const addPerson = (personObject) => {
  return axios.post(baseUrl, personObject).then(response => response.data)
}

export default { addPerson }