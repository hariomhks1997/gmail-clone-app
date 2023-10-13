import { Grid } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import LeftPanel from './LeftPanel'
import Middle from './Middle'
import RightPanel from './RightPanel'
import Footer from './Footer'

const Main = () => {
  return (
    <div>
<Grid container>
<Grid item xs={12}>
    <Navbar></Navbar>
</Grid>
<Grid item xs={2}>
    <LeftPanel></LeftPanel>
</Grid >
<Grid item xs={9}>
  <Middle></Middle>
</Grid>
<Grid item xs={1}>
  <RightPanel></RightPanel>
</Grid>
<Grid item xs={12}>
  <Footer></Footer>
</Grid>
</Grid>
    </div>
  )
}

export default Main