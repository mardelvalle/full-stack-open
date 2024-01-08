import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const Course = ({course}) => {

  return (
    <>
      <Header name={course.name}/>
      {course.parts.map(part =>
        <Content exercises={part.exercises} key={part.id} name={part.name}/>
      )}
      <Total parts={course.parts} />
    </>
  )
}

export default Course