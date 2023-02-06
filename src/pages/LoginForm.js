import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Italiana } from '@next/font/google';
import { Card } from '@mui/material';

const makeStyles=() => {
  const styles = {root:{
      marginLeft : '5rem',
      width: '25ch',
    },
  }
  return styles;
};

const LoginForm = () => {
  const styles = makeStyles();

  return (
    <Card>
    <form className='form' noValidate autoComplete="off">
      <p><h1 style={{color: 'darkred', fontStyle: 'italic'}}>LOGIN PAGE</h1></p>
      <div>
        <TextField style={{marginBottom: "1.5rem"}} label="Email" type="email" required /><br></br>

        <TextField style={{marginBottom: "1.5rem"}} label="Password" type="password" required /><br></br>
      </div>
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </form>
    </Card>
  );
};

export default LoginForm;
