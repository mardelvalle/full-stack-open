const Total = ({parts}) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <h5>{`Total of ${total} exercises`}</h5>
  )
}

export default Total