import React from 'react';
import Button from '@mui/material/Button';

const TypoStyle=()=>{
  const styles={
    root: {
      marginLeft: '15rem',
    },
    
  }
  return styles;
}
const ButtonComponent =()=>{
  const styles =TypoStyle();
  return(
    <div className='btn-container'>
      <Button className="bt" variant="outlined" color="secondary" sx={styles.root}>
      HELLO PUNEET
    </Button>
    </div>
  );
}
export default ButtonComponent;