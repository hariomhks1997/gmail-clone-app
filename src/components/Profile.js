import * as React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { auth, googleProvider } from '../firebase/setup';
import { Avatar } from '@mui/material';
import logout from '../images/logout.png'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '34%',
  left: '79%',
  transform: 'translate(-50%, -50%)',
  width: '30vw',
  height:'25vw',
 
  bgcolor: 'background.paper',
 
  boxShadow: 24,
  borderRadius:'4vw',
  backgroundColor:'#E1EEEE',
  padding:'2vw'
};

export default function Profile() {
  const navigate=useNavigate()
  const logoutgmail=async ()=>{
    try{
      await signOut(auth,googleProvider)
      auth.currentUser===null && navigate('/')
    }catch(err){
      console.log(err)
    }

  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Avatar onClick={handleOpen} sx={{marginLeft:'5.5vw',height:'2.7vw',width:'2.7vw',cursor:'pointer'}} src={auth.currentUser?.photoURL}></Avatar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign:'center',fontSize:'1.2vw'}}>
           {auth.currentUser?.email}
          </Typography>
          <Avatar src={auth.currentUser?.photoURL} style={{marginLeft:'10.5vw',width:'6vw',height:'6vw'}}></Avatar>
          <Typography id="modal-modal-description" style={{textAlign:'center',fontSize:'1.7vw'}}>
          Hi, {auth.currentUser?.displayName}
          </Typography>
          <button onClick={logoutgmail} style={{cursor:'pointer',fontSize:'1vw',border:'1px solid white',borderRadius:'2vw',marginTop:'2vw',width:'14vw',height:'4vw',marginLeft:'6vw',textAlign:'center'}}><img src={logout} alt='logout' style={{width:'0.8vw',textAlign:'center'}}></img>Signout</button>
       <Typography style={{fontSize:'0.8vw',fontWeight:'100',textAlign:'center',marginTop:'1vw'}}>Privacy Policy Terms Of Service</Typography>
        </Box>
      </Modal>
    </div>
  );
}
