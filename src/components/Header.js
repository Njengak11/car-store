import * as React from 'react';
import Box from '@mui/material/Box';
import wrapper from '../img/wrapper.jpeg'
import Typography from '@mui/material/Typography';

export default function BoxSx() {
  return (
    <Box
    sx={{
      height: 500,
      width: '100%',
      backgroundImage: `url(${wrapper})`,
      backgroundSize: "cover",
      backgroundPosition:'center',
      opacity:0.5,
      display:'block',
      p: 1,
      textAlign: 'center',
    }}
  >
    <Typography variant="h2" align="center" pt={15}  style={{color:'white',marginTop: 30 }}>
    Say hello to your next awesome vehicle
      </Typography>
      <Typography variant="h6"  align="center" pt={5} style={{color:'white'}}>
      Featuring Used, Wholesome and Salvage  Cars, Trucks and SUVs
      </Typography>
      
      
  </Box>
  );
}