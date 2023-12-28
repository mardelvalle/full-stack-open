import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const votes = Array(8).fill(0)
  const [copyVotes, setCopyVotes] = useState([...votes])
  const [maxValueIndex, setMaxValueIndex] = useState(0)


  const numberGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 8)

    setSelected(randomNumber)
  }

  const voteIncrease = () => {

    setCopyVotes((prevVotes) => {
      const newVotes = [...prevVotes]
      newVotes[selected] += 1
      const maxIndex = newVotes.indexOf(Math.max(...newVotes))
      setMaxValueIndex(maxIndex)
      
      return newVotes
    })
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>{`has ${copyVotes[selected]} votes`}</p>
        <button onClick={() => voteIncrease()}>vote</button>
        <button onClick={() => numberGenerator()}>next anecdotes</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[maxValueIndex]}</p>
    </div>
  )
}

export default App