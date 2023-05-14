import React  from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { TextField, Typography ,Button } from '@mui/material';
import { useState } from 'react';

import auth from '../../firebase.config';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { Link } from "react-router-dom";


export default function Signup() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handlsignup = async()=>{
        try{
            await createUserWithEmailAndPassword(auth,email,password)
        }catch(err){console.log(err.message)}
    }
  
  return (
    <>
        <Box 
        sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems:'center',
        justifyContent:'center',
        marginTop:'90px',
        '& > :not(style)': {
            m: 1,
            width: 400,
            height: 400,
        },
        }}
    >
        <Paper elevation={3} sx={{display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '30px 20px',
            width: '300px',
            margin:' 0 auto',
            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',}} >
            <Typography fontSize={'30px' } marginTop={'20px'} variant="h1" align="center" gutterBottom >Register</Typography>
            <Box component={'div'} sx={{display:'flex', flexDirection:'column' ,marginBottom:'30px' , marginTop:'30px'}}>
                <TextField id="gmail" label="Email id" variant="standard" type='gmail' sx={{width:'270px' , marginBottom:'15px'}}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }} />
                <TextField id="password" label="Password" type='password' variant="standard" sx={{width:'270px' }} onChange={(e)=>{
                        setPassword(e.target.value)
                    }} />
            </Box>
            <Button variant="outlined" sx={{marginBottom:'10px'}} onClick={handlsignup}>Sign Up</Button>
            <Box sx={{marginTop:'20px'  }}>
                <Typography>Already a user ? <Link to={'/login'} sx={{marginBottom:'10px' , textDecoration:'underline' ,'&:hover': {
                    cursor: 'pointer',
                    },}}>Sign in</Link> </Typography>
                
            </Box>
        </Paper>
    </Box>
  </>
  )
}




