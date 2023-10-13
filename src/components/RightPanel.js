import React from 'react';
import calendar from '../images/calendar.png';
import user from '../images/user.png';
import task from '../images/task.png'

const RightPanel = () => {
 
  
   
  return (
    <div style={{backgroundColor:'#F9F9F9',minHeight:'100vh',right:'0',position:'fixed',width:'5vw',textAlign:'center',paddingTop:'6vw'}}>
        <img src={calendar} alt='calendar'style={{width:'1.4vw',paddingTop:'2vw'}}></img><br></br>
        <img src={user} alt='user'style={{width:'1.4vw',paddingTop:'2vw'}}></img><br></br>
        <img src={task} alt='task'style={{width:'1.4vw',paddingTop:'2vw'}}></img>
        </div>
  )
}

export default RightPanel