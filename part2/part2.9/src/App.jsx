import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newFilter, setNewFilter] = useState('')
  const [newFilteredList, setNewFilteredList] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleFilterChange = (event) => {
    const value = event.target.value
    setNewFilter(value)

    setNewFilteredList(persons.filter(person => person.name.toLowerCase().includes(value.toLowerCase())))
  }

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
        console.log(87)
        setNewFilteredList(newFilteredList.concat(personObject))
      }
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input onChange={handleFilterChange}/>
      </div>
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
      <h2>Numbers</h2>
      {!newFilter && persons.length > 0 ? (
        <ul>
          {persons.map(person =>
            <li key={person.id}>
              {`${person.name} ${person.number}`}
            </li>
          )}
        </ul>
      ) : (
        <ul>
          {newFilteredList.map(person =>
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