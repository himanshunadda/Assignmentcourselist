import React from 'react'
import { Link } from 'react-router-dom';

export default function CourseList(props) {
    
   const handleviewDetails = (course)=> {
    props.setViewDetail(course);
    console.log(course);
   }
   const handleEnroll = (course)=>{
    console.log(course);
    const updatedCourse = { ...course }; 
    updatedCourse.enrolled = true;
    console.log(`Enrolled in ${updatedCourse.courseName}`);
   }
    

  return (
    <div className="d-flex flex-wrap justify-content-center my-5 mx-5">
      {props.courseData.map((course, index) => (
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
          {course.enrolled ? (
              <button className="btn btn-primary my-2 mx-3" style={{ backgroundColor: "black" }} disabled>
                Enrolled
              </button>
            ) : (
              <button className="btn btn-primary my-2 mx-3">
                Enroll Now
              </button>
            )}
            
            <Link to="/viewdetails" className="card-link"
            onClick={() => handleviewDetails(course)}>
              More Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
