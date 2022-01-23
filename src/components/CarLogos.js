import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import bmw from '../img/bmw.png'
import benz from '../img/benz.png'
import lexus from '../img/lexus.png'
import toyota from '../img/toyota.png'
import honda from '../img/honda.jpg'
import nissan from '../img/nissan.jpg'
import audi from '../img/audi.png'



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  alignItems: 'center',
  justifyContent:'center',
  color: theme.palette.text.secondary,
}));

export default function DirectionStack() {
  return (
    <div>
      <Stack align='center' direction="row" m={5}  spacing={5}>
        <Item><img src={bmw} width="100" height="50" /></Item>
        <Item><img src={benz} width="100" height="50" /></Item>
        <Item><img src={lexus} width="100" height="50" /></Item>
        <Item><img src={toyota} width="100" height="50" /></Item>
        <Item><img src={lexus} width="100" height="50" /></Item>
        <Item><img src={honda} width="100" height="50" /></Item>
        <Item><img src={audi} width="100" height="50" /></Item>
        <Item><img src={nissan} width="100" height="50" /></Item>
      </Stack>
    </div>
  );
}