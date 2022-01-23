import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import subaru from '../img/subaru.jpg'
import supra from '../img/supra.jpeg'
import vw from '../img/vw.jpeg'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Auction() {
  return (
    <Box sx={{ flexGrow: 1 ,mx:10, mt:15 }}>
        <Typography  variant="h4"  align="left">
        Trending near you
        </Typography>
      <Grid container spacing={4} >
        <Grid item xs={4}>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={subaru}
        alt="subaru"
      />
      <CardContent>
        <Typography>
        Used Car $15,000
        </Typography>
      </CardContent>
    </Card>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={vw}
        alt="VW beetle"
      />
      <CardContent>
        <Typography>
        Used Cars under $6000
        </Typography>
        </CardContent>
    </Card>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={supra}
        alt="supra"
      />
      <CardContent>
        <Typography   >
          Toyota Models 2021
        </Typography>
      </CardContent>
    </Card>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}