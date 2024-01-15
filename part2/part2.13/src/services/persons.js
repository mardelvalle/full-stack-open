import axios from 'axios'

export const updatePerson = ({personObject}) => {
      const baseUrl = 'http://localhost:3001/persons'
      const request = axios.post(baseUrl, personObject)

      return request.then(response => response.data)
}