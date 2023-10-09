import React from "react";
import { FcLike ,FcLikePlaceholder} from "react-icons/fc";
import {toast} from 'react-toastify';

function Card(props) {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler(){
     // logic how to know phle se click h ki nhi
     //  check karpo likedCourse ke under course id padi h kya 
     if(likedCourses.includes(course.id)){
      //pahle se liked pada huwa 
      setLikedCourses((prev)=> prev.filter((cid)=>(cid !==course.id)));
      toast.warning("Like removed");

     }
     else{
          // pahle se like nhi h
          // insert karna h yeh course likedCoursed me 

         if(likedCourses.length===0){
            setLikedCourses([course.id])
         }
         else{
                // non -empty  pahle se 
                setLikedCourses((prev)=>[...prev,course.id])

         }
         toast.success("Liked successfully ") 

     }

       

  }
  return (
    <div className="bg-bgDark bg-opacity-80 w-[300px] rounded overflow-hidden ">
      <div className="relative">
        <img  src={course.image.url} />

        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-1 grid place-items-center">
          <button onClick={clickHandler}>
           {
              !likedCourses.includes(course.id) ? (<FcLikePlaceholder fontSize="1.75rem"/>):
            (<FcLike fontSize="1.75rem" />)
           }
          </button>
        </div>
      </div>

      <div className="p-4 ">
        <p className="text-white font-semibold text-lg leading-6 ">{course.title}</p>
        <p className="mt-2 text-white">
        {
         course.description.length > 100 ? (course.description.substr(0,100)) +"..." : (course.description)
        }
         </p>
      </div>
    </div>
  );
}

export default Card;
