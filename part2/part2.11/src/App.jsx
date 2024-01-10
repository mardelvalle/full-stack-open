import { useState, useEffect } from 'react'
import axios from 'axios'

import Form from './Form'
import PersonsList from './PersonsList'

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
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {    
    console.log('effect')    
    axios      
      .get('http://localhost:3001/persons')      
      .then(response => {        
        console.log('promise fulfilled')        
        setPersons(response.data)
      })  
    }, 
    [])  
    console.log('render', persons.length, 'notes')

  const handleFilterChange = (event) => {
    const value = event.target.value
    setNewFilter(value)

    setNewFilteredList(persons.filter(person => person.name.toLowerCase().includes(value.toLowerCase())))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input onChange={handleFilterChange}/>
      </div>
      <Form
        newFilter={newFilter}
        newFilteredList={newFilteredList}
        setNewFilteredList={setNewFilteredList}
        newName={newName}
        newNumber={newNumber}
        persons={persons}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        setPersons={setPersons}
      />        
      <h2>Numbers</h2>
      <PersonsList newFilter={newFilter} newFilteredList={newFilteredList} persons={persons}/>
    </div>
  )
}

export default App