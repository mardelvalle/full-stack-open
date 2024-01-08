import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '1' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleNameSubmission}>
        <div>
          name: <input onChange={handleNameChange}/>
        </div>
        <div>number: <input onChange={handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>        
      <h2>Numbers</h2>
      {persons.length > 0 && (
        <ul>
          {persons.map(person =>
            <li key={person.id}>
              {`${person.name} ${person.number}`}
            </li>
          )}
        </ul>
      )}
    </div>
  )
}

export default App