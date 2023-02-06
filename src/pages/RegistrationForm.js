import React, { useState } from 'react';
import TextField  from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { setUncaughtExceptionCaptureCallback } from 'process';
import styles from '@/styles/Home.module.css';
import Card from '@mui/material/Card'
const makeStyles=() => {
    const styles = {root:{
        marginRight : '5rem',
        width: '25ch',
      },
    card: {
            width: "80%",
            margin: "0 auto",
            marginTop: "1.5rem",
            padding: "1.5rem"
      },
    }
    return styles;
};
const RegistrationForm = () => {
    const styles = makeStyles();
    const [name,setName]= useState('');
    const [phone,setPhone]= useState('');
    const [password,setPassword]= useState('');
    const [confirmpassword,setConfirmPass] = useState('');
    const [confirmError,setConfirmError] = useState('');
    const [address,setAddress]= useState('');
    const [phoneError,setPhoneError]= useState('');
    const [passwordError, setPasswordError]= useState('');
    const handleSubmit= (event) => {
        event.preventDefault();
        let phoneError='';
        let passwordError='';
        let confirmError='';
        const reg= /^\d{10}$/;
        if(!reg.test(phone)){
            phoneError='Invalid Phone number'
        }
        if(password.length < 8){
            passwordError='Password must be atleast 8 char'
        }
        if(password!=confirmpassword)
        {
            confirmError='Password mismatched'
        }
        if(!phoneError && !passwordError && !confirmError)
        {
            console.log('Phone:',phone);
            console.log('Password:',password);
            console.log('Confirm Password:',confirmpassword)
        }else{
            setPhoneError(phoneError);
            setPasswordError(passwordError);
            setConfirmError(confirmError);
        }
    
    };
     
    return (
        
        <Card sx={styles.card} className='card'>
        <p><h1 style={{color: "white",textAlign: "center"}}>Registration Page for Employees</h1></p>
        <form   sx={styles.root}  onSubmit= {handleSubmit}>
         <TextField  className='form' style={{marginBottom: "1.5rem"}} label="Employee Name" variant='outlined' value={name}
            onChange={(event)=> setName(event.target.value)}>   
         </TextField><br></br>
         <TextField className='form' label="Phone number" style={{marginBottom: "1.5rem"}} 
          variant="outlined" 
          value={phone}
          onChange={(event) => setPhone(event.target.value)} 
          type="tel"
          error={!!phoneError}
          helperText={phoneError}
          >
         </TextField>
         <br></br>
         <TextField className='form' style={{marginBottom: "1.5rem"}} label="Password" variant="outlined" value={password} onChange={(event) => setPassword(event.target.value)}
         type="password" error={!!passwordError} helperText={passwordError}></TextField><br></br>
         <TextField className='form' style={{marginBottom: "1.5rem"}} label="Confirm Password" variant="outlined" value={confirmpassword} onChange={(event) => setConfirmPass(event.target.value)}
         type="password" error={!!confirmError} helperText={confirmError}></TextField><br></br>
         <TextField className='form' style={{marginBottom: "1.5rem"}} label="Address" variant='outlined' value={address}
            onChange={(event)=> setAddress(event.target.value)}>   
         </TextField><br></br>
         <Button type="submit" variant="contained" color='primary'>
           Submit
         </Button>
              
        </form>
        </Card>
    );
   

}
export default RegistrationForm;