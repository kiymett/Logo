import React from 'react'
import LessonStyle from "./lesson.module.css"

const LessonCard = ({name, hour, image}) => {
  return (
 
    <div className={LessonStyle.container}>
        <div className={LessonStyle.image}>
            <img src={image} alt="log"  width="100px"/>
        </div>
        <div className={LessonStyle['container-paragraf']}>
            <div className={LessonStyle.title}>
            <p className={LessonStyle.paragraf}>Lesson name:</p>
            <p className={LessonStyle.value}>{name}</p>
            </div>
            <div className={LessonStyle.title}>
            <p className={LessonStyle.paragraf}>Lesson hour:</p>
            <p className={LessonStyle.value}> {hour}</p>
            </div> 
        </div>  
          
    </div>
   
   
  )
}

export default LessonCard