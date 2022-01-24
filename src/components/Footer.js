import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1,mx:10, mt:15 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item>
              <Typography  fontWeight= 'bold'>
                  About
              </Typography>
          </Item>
        <Item>Lorem Ipsum</Item>
        <Item>Lorem Ipsum</Item>
        <Item>Lorem Ipsum</Item>
        <Item>Lorem Ipsum</Item>
        <Item>Lorem Ipsum</Item>ver
        </Grid>
        <Grid item xs={3}>
          <Item>
          <Typography  fontWeight= 'bold'>
                  Community
              </Typography>
          </Item>
          <Item>Lorem Ipsum</Item>
        <Item>Lorem Ipsum</Item>
        <Item>Lorem Ipsum</Item>
        <Item>Lorem Ipsum</Item>
        <Item>Lorem Ipsum</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
          <Typography  fontWeight= 'bold'>
                  Become a seller
              </Typography>
          </Item>
          <Item>Lorem Ipsum</Item>
        <Item>Lorem Ipsum</Item>
        <Item>Lorem Ipsum</Item>
        <Item>Lorem Ipsum</Item>
        <Item>Lorem Ipsum</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
          <Typography  fontWeight= 'bold'>
                  Bookings support
              </Typography>
          </Item>
          <Item>Lorem Ipsum</Item>
        <Item>Lorem Ipsum</Item>
        <Item>Lorem Ipsum</Item>
        <Item>Lorem Ipsum</Item>
        <Item>Lorem Ipsum</Item>
        </Grid>
        </Grid>
    </Box>
  );
}