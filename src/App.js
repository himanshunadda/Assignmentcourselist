import React from 'react'
import CourseList from './components/CourseList'
import NavBar from './components/NavBar'
import { useState } from 'react';
import SearchedResult from './components/SearchedResult';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewDetail from './components/ViewDetail';

function App() {

  const [querry,setQuerry] = useState("");
  const [viewDetail,setViewDetail] = useState("");
  const [enroll,setEnroll] = useState(false);
  const courseData = [
    {
      courseName: "Introduction to React",
      instructor: "John Doe",
      enrolled: true,
      UrlToImage: "https://getlasso.co/wp-content/uploads/coursera-logo.jpg",
      description: "An introductory course to React.",
    },
    {
      courseName: "Web Development Fundamentals",
      instructor: "Jane Smith",
      enrolled: false,
      UrlToImage: "https://getlasso.co/wp-content/uploads/coursera-logo.jpg",
      description: "Learn the basics of web development.",
    },
    {
      courseName: "JavaScript Fundamentals",
      instructor: "Bob Johnson",
      enrolled: true,
      UrlToImage: "https://getlasso.co/wp-content/uploads/coursera-logo.jpg",
      description: "Master the fundamentals of JavaScript programming.",
    },
    {
      courseName: "Data Structures and Algorithms",
      instructor: "Emily Davis",
      enrolled: false,
      UrlToImage: "https://getlasso.co/wp-content/uploads/coursera-logo.jpg",
      description:
        "Explore data structures and algorithms in computer science.",
    },
    {
      courseName: "Python for Beginners",
      instructor: "Chris Miller",
      enrolled: true,
      UrlToImage: "https://getlasso.co/wp-content/uploads/coursera-logo.jpg",
      description: "Get started with Python programming for beginners.",
    },
    {
      courseName: "Database Management",
      instructor: "Linda Wilson",
      enrolled: true,
      UrlToImage: "https://getlasso.co/wp-content/uploads/coursera-logo.jpg",
      description: "Learn about database management and SQL.",
    },
    {
      courseName: "Machine Learning Basics",
      instructor: "Michael Brown",
      enrolled: false,
      UrlToImage: "https://getlasso.co/wp-content/uploads/coursera-logo.jpg",
      description: "An introduction to machine learning concepts.",
    },
    {
      courseName: "Front-end Web Design",
      instructor: "Sarah Harris",
      enrolled: true,
      UrlToImage: "https://getlasso.co/wp-content/uploads/coursera-logo.jpg",
      description: "Design and develop interactive web interfaces.",
    },
    {
      courseName: "Back-end Development with Node.js",
      instructor: "John Doe",
      enrolled: false,
      UrlToImage: "https://getlasso.co/wp-content/uploads/coursera-logo.jpg",
      description: "Create server-side applications with Node.js.",
    },
    {
      courseName: "Mobile App Development",
      instructor: "Jane Smith",
      enrolled: true,
      UrlToImage: "https://getlasso.co/wp-content/uploads/coursera-logo.jpg",
      description: "Develop mobile applications for iOS and Android.",
    },
    {
      courseName: "Artificial Intelligence",
      instructor: "Bob Johnson",
      enrolled: false,
      UrlToImage: "https://getlasso.co/wp-content/uploads/coursera-logo.jpg",
      description: "Dive into artificial intelligence and machine learning.",
    },
    {
      courseName: "Cybersecurity Fundamentals",
      instructor: "Emily Davis",
      enrolled: true,
      UrlToImage: "https://getlasso.co/wp-content/uploads/coursera-logo.jpg",
      description: "Discover the fundamentals of cybersecurity.",
    },
    {
      courseName: "Cloud Computing Essentials",
      instructor: "Chris Miller",
      enrolled: false,
      UrlToImage: "https://getlasso.co/wp-content/uploads/coursera-logo.jpg",
      description: "Understand cloud computing and its applications.",
    },
    {
      courseName: "Digital Marketing Strategies",
      instructor: "Linda Wilson",
      enrolled: true,
      UrlToImage: "https://getlasso.co/wp-content/uploads/coursera-logo.jpg",
      description: "Learn strategies for digital marketing success.",
    },
    {
      courseName: "UI/UX Design Principles",
      instructor: "Michael Brown",
      enrolled: true,
      UrlToImage: "https://getlasso.co/wp-content/uploads/coursera-logo.jpg",
      description: "Master the principles of UI/UX design.",
    },
    {
      courseName: "Data Science Fundamentals",
      instructor: "Sarah Harris",
      enrolled: false,
      UrlToImage: "https://getlasso.co/wp-content/uploads/coursera-logo.jpg",
      description: "Explore data science and data analysis techniques.",
    },
    {
      courseName: "Blockchain Technology",
      instructor: "John Doe",
      enrolled: true,
      UrlToImage: "https://getlasso.co/wp-content/uploads/coursera-logo.jpg",
      description: "Understand blockchain technology and its use cases.",
    },
    {
      courseName: "E-commerce Strategies",
      instructor: "Jane Smith",
      enrolled: false,
      UrlToImage: "https://getlasso.co/wp-content/uploads/coursera-logo.jpg",
      description: "Develop e-commerce strategies for online businesses.",
    },
    {
      courseName: "Network Security",
      instructor: "Bob Johnson",
      enrolled: true,
      UrlToImage: "https://getlasso.co/wp-content/uploads/coursera-logo.jpg",
      description: "Learn about network security and encryption.",
    },
    {
      courseName: "Software Engineering Practices",
      instructor: "Emily Davis",
      enrolled: true,
      UrlToImage: "https://getlasso.co/wp-content/uploads/coursera-logo.jpg",
      description: "Best practices in software engineering and development.",
    },
    
  ];

  const filteredCourses = courseData.filter((course)=>{
    const courseName = course.courseName.toLowerCase();
    const instructor = course.instructor.toLowerCase();
    const searchQuerry = querry.toLowerCase();
    return courseName.includes(searchQuerry) || instructor.includes(searchQuerry);
})
  if(querry.length === 0){
  return (
    
    <div>
      <BrowserRouter>
      <NavBar courseData = {courseData} querry = {querry} setQuerry={setQuerry}/>
      <Routes>
      <Route path = "/" element = {<CourseList  viewDetail = {viewDetail} setViewDetail = {setViewDetail} courseData = {courseData}/>}></Route>
      <Route path = "/viewdetails" element = {<ViewDetail viewDetail = {viewDetail} setViewDetail = {setViewDetail}/>}></Route>
      <Route path = "/dashboard" element = { <Dashboard courseData = {courseData}/>}></Route>
      
      
      </Routes>
      </BrowserRouter>
    </div>
  )
  } else {
    return (
      <div>
      <BrowserRouter>
      <NavBar courseData = {courseData} querry = {querry} setQuerry={setQuerry}/>
      <Routes>
      <Route path = "/" element = {<SearchedResult filteredCourses = {filteredCourses}/>}></Route>
      <Route path = "/viewdetails" element = {<ViewDetail viewDetail = {viewDetail} setViewDetail = {setViewDetail}/>}></Route>
      <Route path = "/dashboard" element = { <Dashboard courseData = {courseData}/>}></Route>
      
      
      </Routes>
      </BrowserRouter>
    </div>
   
    )
    
  }
}

export default App
