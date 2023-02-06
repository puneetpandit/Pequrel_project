import React from 'react';
import styles  from '@mui/material/styles';
import Button from '@mui/material/Button';
import Container  from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Facebook  from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import  LinkedIn  from '@mui/icons-material/LinkedIn';
import IconButton  from '@mui/material/IconButton';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import { useRouter}  from 'next/router';
import  Card  from '@mui/material/Card';
const LandingPage = () => {
  const router = useRouter();

  return (
    <Card  className='page'>
    <div>
        <Toolbar>
          <Typography variant="primary">
            <h1>Landing Page</h1>
          </Typography>
        </Toolbar>
        <nav>
          <Link href="/LoginForm" >
            <Button color="secondary">Login</Button>
          </Link>
          <Link href="/RegistrationForm">
            <Button color="secondary" >Register</Button>
          </Link>
        </nav>
      <br></br>
      {/* {router.pathname === '/login' && <LoginForm/>}
      {router.pathname === '/register' && <RegistrationForm/>}  */}
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Add your content here */}
        </Grid>
      </Container>
      <footer>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Link href="https://www.linkedin.com/company/pequrel-technologies-pvt-ltd1/">
              <LinkedIn />
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link href="#">
              <Instagram />
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link href="#">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
      </footer>
    </div>
    </Card>
  );
};

export default LandingPage;
