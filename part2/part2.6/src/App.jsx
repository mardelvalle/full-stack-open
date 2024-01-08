import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNameSubmission = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
    const personObject = {
      id: persons.length + 1,
      name: newName
    }

    setPersons(persons.concat(personObject))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleNameSubmission}>
        <div>
          name: <input onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>        
      <h2>Numbers</h2>
      {persons.length > 0 && (
        <ul>
          {persons.map(person =>
            <li key={person.id}>
              {person.name}
            </li>
          )}
        </ul>
      )}
    </div>
  )
}

export default App