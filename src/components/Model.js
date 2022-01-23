import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import sedan from '../img/sedan.jpg'
import suv from '../img/suv.jpg'
import hatch from '../img/hatch.jpeg'
import coupe from '../img/coupe.jpeg'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Model() {
  return (
    <Box sx={{ flexGrow: 1, mt:5,mx:10 }}>
       <Typography gutterBottom variant="h4" component="div" align="left">
        Find Car by model
        </Typography>
      <Grid container spacing={3} >
        <Grid item xs={3}>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={sedan}
        alt="sedan"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Sedan
        </Typography>
      </CardContent>
    </Card>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={suv}
        alt="suv"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        SUV
        </Typography>
        </CardContent>
    </Card>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={coupe}
        alt="coupe"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Coupe
        </Typography>
      </CardContent>
    </Card>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={hatch}
        alt="Hatchback"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Hatch
        </Typography>
      </CardContent>
    </Card>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}