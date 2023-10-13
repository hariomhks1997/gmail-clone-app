import { Button } from '@mui/material'
import React from 'react'
import social from '../images/social.jpg'
import { signInWithPopup } from 'firebase/auth'
import { auth, database, googleProvider } from '../firebase/setup'
import { useNavigate } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore'

const Signin = () => {
  const navigate=useNavigate()
  const adduser=async ()=>{
    const userDoc=doc(database,'Users',`${auth.currentUser?.uid}`)
    try{
await setDoc(userDoc,{
  username:auth.currentUser?.displayName,
  email:auth.currentUser?.email,
  id:auth.currentUser?.uid
})
    }catch(err){
      console.log(err)
    }
  }
    const googleSignin=async ()=>{
        try{
            await signInWithPopup(auth,googleProvider)
            adduser()
            navigate('/main')
        }catch(err){
console.log(err)
        }
        console.log(auth)

    }
  return (
    <div style={{position:'absolute', left:'28%',padding:'110px'}}>
        
        <div style={{border:'1px solid grey',padding:'20px',textAlign:'center',borderRadius:'5px',minHeight:'310px',maxWidth:'350px'}}> 
        <img style={{width:'70px'}}  src={social} alt='google'></img>
        <h2 style={{fontWeight:'200',marginTop:'1vw'}}>Create your google clone account</h2>
        <h4 style={{fontWeight:'200',marginTop:'1vw'}}>Click The Signing Button</h4>
      <Button style={{marginTop:'2vw'}} onClick={googleSignin} variant='contained'>Signing with google</Button> 
        </div>
         
    </div>
  )
}

export default Signin