import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const Course = ({courses}) => {

  return (
    <>
      <h1>Web development curriculum</h1>
      {courses.map(course =>
        <> 
          <Header name={course.name}/>
          {course.parts.map(part =>
            <Content exercises={part.exercises} key={part.id} name={part.name}/>
          )}
          <Total parts={course.parts} />
        </>
      )}
    </>
  )
}

export default Course