import React from 'react'
import LessonCard from '../components/lesson/LessonCard'
import LessonStyle  from "../components/lesson/lesson.module.css"
import { useState } from 'react'


const Lesson = ({data}) => {
  console.log(data)

const [toggle, setToggle] = useState(false)

  const test = () => {
    setToggle(!toggle)
    console.log(!toggle)
   
  } 

  return (
        <div className={LessonStyle.app}>
       
        {!toggle ? <LessonCard /> : <h1 className={LessonStyle.card}>0 Lessons today</h1> }

        <button className={LessonStyle.btn} onClick ={()=>test()}>Clear List</button>
      
      </div>
  )
}

export default Lesson