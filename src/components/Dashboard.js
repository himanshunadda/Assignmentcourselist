import React from 'react'

export default function Dashboard(props) {
  return (
    <div>
      <h1 className='text-center my-5'>
        Enrolled Courses
      </h1>
      <div className="d-flex flex-wrap justify-content-center my-5 mx-5">
      {props.courseData
      .filter((course) => (course.enrolled ? "Yes" : "No") === "Yes")
      .map((course, index) => (
        
        <div className="card my-5 mx-5" style={{ width: "18rem" }} key={index}>
          <img
            src={course.UrlToImage}
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">{course.courseName}</h5>
            <p className="card-text">{course.description}</p>
          </div>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">Instructor: {course.instructor}</li>
            <li className="list-group-item">
              Enrolled: {course.enrolled ? "Yes" : "No"}
            </li>
          </ul>

          <div className="card-body">
            <a href="/" className="card-link">
              Enroll
            </a>
            <a href="/" className="card-link">
              More Details
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}
