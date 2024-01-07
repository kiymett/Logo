import React from 'react'
import { data } from '../../helper/data'
import LessonStyle from './lesson.module.css'


const LessonCard = () => {
 
  return (
    <div className={LessonStyle.container}>
      <div className={LessonStyle.card}>
        <h1 className={LessonStyle.value}> 6 Lessons Today</h1>
          <div className={LessonStyle.container}>
          
        {data.map(({id, name, hour, image })=>(
          <div key={id} className={LessonStyle.whole}>
            <div  className={LessonStyle.container}>
            <div className={LessonStyle.whole}>
              <img src={image} alt="alt" width="30x" />
              <div >
                <h5 className={LessonStyle.value} >{hour}</h5>
                <h5 className={LessonStyle.value} >{name}</h5>
              </div>
          </div>

            </div>
          
        </div>

        ))}
        

          </div>
      
        </div>
     
     
      

    </div>
  )
}

export default LessonCard