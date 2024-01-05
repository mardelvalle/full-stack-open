import Content from "./Content"
import Header from "./Header"

const Course = ({course}) => {
console.log(course)
  return (
    <>
      <Header name={course.name}/>
      {course.parts.map(part =>
        <Content exercises={part.exercises} key={part.id} name={part.name}/>
      )}
    </>
  )
}

export default Course