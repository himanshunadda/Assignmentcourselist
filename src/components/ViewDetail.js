import React from 'react'


function ViewDetail(props) {
    const { viewDetail} = props;
    if(!viewDetail){
        return <div>No Course details available to display</div>
    }
  return (
    <div>
        <h1 className='my-5 mx-5 text-center'>Course Details</h1>
      <div className="container text-center my-5">
      <h2>{viewDetail.courseName}</h2>
      <h3>{viewDetail.description}</h3>
      <h3>Instructor: {viewDetail.instructor}</h3>
      <p>Enrolled: {viewDetail.enrolled ? "Yes" : "No"}</p>
      </div>
    </div>
  )
}

export default ViewDetail
