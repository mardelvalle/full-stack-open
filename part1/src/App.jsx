import { useState } from 'react'
import StatisticLine from './StatisticLine'

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
      { total > 0 ? (
        <table>
          <StatisticLine text="good" stat={good} />
          <StatisticLine text="bad" stat={bad} />
          <StatisticLine text="neutral" stat={neutral} />
          <StatisticLine text="average" stat={(good - bad)/total} />
          <StatisticLine text="total" stat={total} />
          <StatisticLine text="percent positive" stat={good/total} />
        </table>
      ) : <p>No feedback given</p>
      }
    </div>
  )
}

export default App