import React from 'react';

import inbox from '../images/inbox.png';
import send from '../images/send.png';
import star from '../images/star.png';
import snooze from '../images/snooze.png';
import Message from './Message.js';


const LeftPanel = () => {
  return (
    <div>
       <div style={{position:'fixed',backgroundColor:'#F9F9F9',minHeight:'100vh',paddingTop:'6vw',padding:'2.3vw'}}>
        
        <Message></Message>
        <div style={{marginTop:'1vw',width:'12vw',marginLeft:'0.8vw',display:'flex',alignItems:'center'}}>
        <img src={inbox} alt='inboximage' style={{width:'1.2vw',marginLeft:'1.5vw'}}></img>
        <span style={{marginLeft:'1.6vw',fontWeight:'400',fontSize:'1.3vw'}}>Inbox</span>
        </div>
        <div style={{marginTop:'1vw',width:'12vw',marginLeft:'0.8vw',display:'flex',alignItems:'center'}}>
        <img src={star} alt='starimage' style={{width:'1.2vw',marginLeft:'1.5vw'}}></img>
        <span style={{marginLeft:'1.6vw',fontWeight:'400',fontSize:'1.3vw'}}>Starred</span>
        </div>
        <div style={{marginTop:'1vw',width:'12vw',marginLeft:'0.8vw',display:'flex',alignItems:'center'}}>
        <img src={snooze} alt='snoozeimage' style={{width:'1.2vw',marginLeft:'1.5vw'}}></img>
        <span style={{marginLeft:'1.6vw',fontWeight:'400',fontSize:'1.3vw'}}>Snoozed</span>
        </div>
        <div style={{marginTop:'1vw',width:'12vw',marginLeft:'0.8vw',display:'flex',alignItems:'center'}}>
        <img src={send} alt='sendimage' style={{width:'1.2vw',marginLeft:'1.5vw'}}></img>
        <span style={{marginLeft:'1.6vw',fontWeight:'400',fontSize:'1.3vw'}}>Send</span>
        </div>
        
    </div> 
    </div>
  )
}

export default LeftPanel