import Person from './Person'

const PersonsList = ({newFilter, newFilteredList, persons}) => {
    
  return (
    <>
      {!newFilter && persons.length > 0 ? (
        <ul>
          {persons.map(person =>
            <Person key={person.id} person={person}/>
          )}
        </ul>
      ) : (
        <ul>
          {newFilteredList.map(person =>
            <Person key={person.id} person={person}/>
          )}
        </ul>
      )}
    </>
  )
}

export default PersonsList