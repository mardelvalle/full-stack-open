import Part from './Part'

const Content = ({parts}) => {

    return (
    <>
      {parts.map((part, id) => (
        <Part key={id} name={part.name} exercises={part.exercises}/>
      ))
      }
    </>
  )
}

export default Content