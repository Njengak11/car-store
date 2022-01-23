import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'; 

export default function DropDown() {
  const [age, setAge] = React.useState('');


  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label"  style={{color:'purple'}}>Type</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>New</MenuItem>
          <MenuItem value={20}>Used</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label"  style={{color:'purple'}}>Make</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Toyota</MenuItem>
          <MenuItem value={20}>BMW</MenuItem>
          <MenuItem value={30}>Nissan</MenuItem>
          <MenuItem value={40}>Subaru</MenuItem>
          <MenuItem value={50}>Ford</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label"  style={{color:'purple'}}>Model</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Corolla</MenuItem>
          <MenuItem value={20}>Vitz</MenuItem>
          <MenuItem value={30}>Hilux</MenuItem>
          <MenuItem value={40}>Noah</MenuItem>
          <MenuItem value={50}>Prado</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label" style={{color:'purple'}}>Price</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Less than 500K</MenuItem>
          <MenuItem value={20}>More than 1m</MenuItem>
          <MenuItem value={30}>More than 2m</MenuItem>
          <MenuItem value={40}>More than 3m</MenuItem>
          <MenuItem value={50}>More than 4m</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}