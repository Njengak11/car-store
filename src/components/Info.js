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

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1,mt:15, mx:10 , }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
          <Typography  variant="h4" fontWeight= 'bold'>
        Explore the best selling car makes
        </Typography>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
          <Typography  variant="h6" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
    
  );
}