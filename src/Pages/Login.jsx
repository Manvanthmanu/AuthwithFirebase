import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { TextField, Typography ,Button } from '@mui/material';

import auth from '../../firebase.config';
import {signInWithEmailAndPassword} from 'firebase/auth'

import { Link } from "react-router-dom";

export default function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handlelogin = async()=>{
        try{
            await signInWithEmailAndPassword(auth , email,password)
        }catch(error){console.log(error.message)}
    }

    const NewPaper = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '30px 20px',
        width: '300px',
        margin:' 0 auto',
        boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
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
        <Paper elevation={3} sx={NewPaper} >
            <Typography fontSize={'30px' } marginTop={'20px'} variant="h1" align="center" gutterBottom >Welcome back !</Typography>

            <Box sx={{display:'flex', flexDirection:'column' ,marginBottom:'30px' , marginTop:'30px'}}>
                <TextField id="gmail" label="Email id" variant="standard" sx={{width:'270px' , marginBottom:'15px'}} 
                 onChange={(e)=>{setEmail(e.target.value)}} type='text' />
                <TextField id="password" label="Password" variant="standard" sx={{width:'270px' }}
                 onChange={(e)=>{setPassword(e.target.value)}} type='password'/>
            </Box>

            <Button variant="outlined" sx={{marginBottom:'10px'}} onClick={handlelogin}>Log In</Button>

            <Box sx={{justifyContent:'space-between' , display:'flex' , width:'250px', marginTop:'20px'  }}>
                <Link to={'/'} sx={{marginBottom:'10px' , textDecoration:'underline' , '&:hover': {
                    cursor: 'pointer',
                    },}}>Forgot Password ?</Link>
                <Link to={'/signup'} sx={{marginBottom:'10px' , textDecoration:'underline' ,'&:hover': {
                    cursor: 'pointer',
                    },}}>Register / Sign Up</Link>
            </Box>
        </Paper>
    </Box>
  </>
  )
}




