import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import bmw from '../img/bmw.png'
import benz from '../img/benz.png'
import lexus from '../img/lexus.png'
import toyota from '../img/toyota.png'
import honda from '../img/honda.jpg'
import nissan from '../img/nissan.jpg'
import audi from '../img/audi.png'
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function LogoGrid() {
  return (
    <Box sx={{flexGrow: 1,mt:5, mx:15}}>
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }} columnSpacing={{ xs: 2,  md: 3 }}>
        <Grid item xs={2} sm={4} md={4}>
          <Item>
          <img src={benz} width="100" height="50" />
          </Item>
          <Typography>
              Mercedes Benz
          </Typography>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Item><img src={lexus} width="100" height="50" /></Item>
          <Typography fontWeight= 'bold'>
              Lexus
          </Typography>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Item><img src={toyota} width="100" height="50" /></Item>
          <Typography fontWeight= 'bold'>
              Toyota
          </Typography>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Item><img src={audi} width="100" height="50" /></Item>
          <Typography fontWeight= 'bold'>
              Audi
          </Typography>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Item><img src={nissan} width="100" height="50" /></Item>
          <Typography fontWeight= 'bold'>
              Nissan
          </Typography>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Item><img src={honda} width="100" height="50" /></Item>
          <Typography fontWeight= 'bold'>
              Honda
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}