import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)


  const increasePoints = (option, setOption) => {
      setOption(option + 1)
      setTotal(total + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => increasePoints(good, setGood)}>good</button>
      <button onClick={() => increasePoints(neutral, setNeutral)}>neutral</button>
      <button onClick={() => increasePoints(bad, setBad)}>bad</button>
      <h2>Statistics</h2>
      <p>{`good ${good}`}</p>
      <p>{`neutral ${neutral}`}</p>
      <p>{`bad ${bad}`}</p>
      <p>{`total ${total}`}</p>
      <p>{`average ${(good - bad)/total}`}</p>
      <p>{`percent positive ${good/total}%`}</p>
    </div>
  )
}

export default App