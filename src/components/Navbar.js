import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import gmail from '../images/gmail.png'
import { Grid,Avatar } from '@mui/material';
import lens from '../images/lens1.png'

import Profile from './Profile';


export default function Navbar() {
  return (
    <Grid container>
     <a href='email:hariomhks1997@gmail.com' className='d-text-decoration-none'>hariomhks1997@gmail.com</a>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position="static" style={{position:'fixed',top:'0',zIndex:'2',backgroundColor:'#f9f9f9',minHeight:'5vw',paddingTop:'7px',paddingRight:'30px',minWidth:'100vw',}}>
        <div style={{display:'flex',alignItems:'center',marginLeft:'2vw'}}>
            <Grid item xs={2}>
                <div style={{display:'flex',alignItems:'center'}}>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: '0.8vw',color:'#3C3C3C' }}>
            <MenuIcon  sx={{width:'2vw'}}/>
          </IconButton>
          <img src={gmail} alt='gmailimages' style={{width:'2.3vw'}}></img>
          <Typography variant="h6"  component="div" sx={{ color:'#3C3C3C' ,fontSize:'1.8vw',marginLeft:'1vw'}}>
            Gmail
          </Typography>
                </div>
            
            </Grid>
            <Grid item xs={9}>
                <div style={{display:'flex',alignItems:'center',backgroundColor:'#E4EFFA',borderRadius:'40px',width:'55vw',height:'3vw',marginLeft:'3vw'}}>
                <img src={lens} style={{width:'1.3vw',height:'1.3vw',alignItems:'center',marginLeft:'15px'}}></img>
                <input placeholder='Search mail' style={{marginLeft:'3vw',height:'2vw',width:'45vw',backgroundColor:'#E4EFFA',border:'none'}}></input>
                </div>
            </Grid>
            <Grid item xs={1}>
                
                <Profile></Profile>
            </Grid>
          
        </div>
      </AppBar>
    </Box>
    </Grid>
  );
}
