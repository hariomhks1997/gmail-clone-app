import * as React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import pen from '../images/pen.png';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Message() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen} style={{cursor:'pointer',marginTop:'3vw',height:'4.5vw',width:'12vw',marginLeft:'0.8vw',display:'flex',alignItems:'center',backgroundColor:'#85C1E9 ',borderRadius:'20px'}}>
        <img src={pen} alt='penimage' style={{width:'1.2vw',marginLeft:'1.5vw'}}></img>
        <h4 style={{marginLeft:'1.6vw',fontWeight:'500',fontSize:'1.5vw'}}>Compose</h4>
        </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
