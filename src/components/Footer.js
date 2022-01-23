import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

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
        <Grid item xs={5}>
          <Item>
              <Typography  fontWeight= 'bold'>
                  About
              </Typography>
          </Item>
          <Stack spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
        </Grid>
        <Grid item xs={5}>
          <Item>
          <Typography  fontWeight= 'bold'>
                  Community
              </Typography>
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
          <Typography  fontWeight= 'bold'>
                  Become a seller
              </Typography>
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
          <Typography  fontWeight= 'bold'>
                  Bookings support
              </Typography>
          </Item>
        </Grid>
        </Grid>
    </Box>
  );
}