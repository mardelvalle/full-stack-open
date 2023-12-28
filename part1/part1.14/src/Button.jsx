const Button = ({text, setTotal, total, option, setOption}) => {

  const increasePoints = () => {
      setOption(option + 1)
      setTotal(total + 1)
  }

  return (
    <button onClick={() => increasePoints()}>{text}</button>
  )
}

export default Button