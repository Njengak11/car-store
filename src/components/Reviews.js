import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import caddy2 from '../img/caddy2.jpg'
import elantra from '../img/elantra.jpg'
import cla from '../img/cla.jpg'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Reviews() {
  return (
    <Box sx={{ flexGrow: 1 ,mx:10, mt:15 }}>
        <Typography  variant="h4"  align="left">
        Recent reviews
        </Typography>
      <Grid container spacing={4} >
        <Grid item xs={4}>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={caddy2}
        alt="caddy"
      />
      <CardContent>
        <Typography>
        Cadillac Escalade
        </Typography>
        <Rating name="size-medium" defaultValue={2} />
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
        image={elantra}
        alt="elantra"
      />
      <CardContent>
        <Typography>
        Hyundai Elantra
        </Typography>
        <Rating name="size-medium" defaultValue={4} />
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
        image={cla}
        alt="cla"
      />
      <CardContent>
        <Typography   >
          Mercedes CLA
        </Typography>
        <Rating name="size-medium" defaultValue={2} />
      </CardContent>
    </Card>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}