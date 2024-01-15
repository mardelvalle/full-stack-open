import axios from 'axios'

const Form = ({newFilter, newFilteredList, setNewFilteredList, newName, newNumber, persons, setNewName, setNewNumber, setPersons}) => {
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameSubmission = (event) => {
    event.preventDefault()
    if(persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
    } else {

      setNewName(event.target.value)
      const personObject = {
        id: persons.length + 1,
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      if(newFilter && newName && newName.toLowerCase().includes(newFilter.toLowerCase())) {
        setNewFilteredList(newFilteredList.concat(personObject))
      }
      const baseUrl = 'http://localhost:3001/persons'
      const request = axios.post(baseUrl, personObject)
      request.then(response => response.data)
    }
  }


  return (
    <form onSubmit={handleNameSubmission}>
        <h2>Add a new</h2>
        <div>
            name: <input onChange={handleNameChange}/>
        </div>
        <div>number: <input onChange={handleNumberChange}/></div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>        
  )
}

export default Form