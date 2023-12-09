import React from 'react'
import LessonCard from '../components/lesson/LessonCard'
import LessonStyle  from "../components/lesson/lesson.module.css"


const Lesson = ({data}) => {
    console.log(data)
  return (
        < div className={LessonStyle.whole}>
        {/* {data.map(({id, name, hour, image})=>(
            <div key={id}>
            <div className="">
                <img src={image} alt="logo" width = "100px"/>
            </div>
            <div>
                <p>{name}</p>
                <p>{hour}</p>
            </div>
            </div>
        ))} */}

        {data.map((data) => (
        <LessonCard key={data.id} {...data} />
      ))}
        
    </div>
  )
}

export default Lesson