import React, { useState } from 'react'
import Card from './Card'
function Cards(props) {
  let courses= props.courses;
  let category= props.category;

  const[likedCourses,setLikedCourses]=useState([]);
     

  // converting object data into array through map
  function getCourses() {
    if(category==="All")
    {
      let allCourses=[];

    // ignore key find value value of object -> Object.values(objectName)
      
    Object.values(courses).forEach((array)=>{
      array.forEach((courseData)=>{
        allCourses.push(courseData);
      })

    })
    return allCourses;

  }
  else{
        // main sirf specific category array pass karunga 
        return courses[category];
  }


    }
    
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
       {
        getCourses().map((course)=>(
          <Card key={course.id} course={course} likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}/>
        ))
      }

    </div>
  )
 }

export default Cards;
