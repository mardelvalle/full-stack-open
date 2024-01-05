const Content = ({exercises, name}) => {

  return (
    <li>
      <p>
        {`${name} ${exercises}`}
      </p>
    </li>
  )
}

export default Content