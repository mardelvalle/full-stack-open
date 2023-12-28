import { useState } from 'react'
import Button from './Button'
import StatisticLine from './StatisticLine'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button total={total} setTotal={setTotal} option={good} setOption={setGood} text="good" />
      <Button total={total} setTotal={setTotal} option={neutral} setOption={setNeutral} text="neutral" />
      <Button total={total} setTotal={setTotal} option={bad} setOption={setBad} text="bad" />
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