import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ width:'100%',marginTop:'5%' }}>
      <FormControl fullWidth>
        <b style={{ float:'left', marginBottom:'2%',textAlign:'start', fontSize:20 }}>Single selection control</b>
        {/* <InputLabel id="demo-simple-select-label">HTML</InputLabel>9 */}
        <Select
        //   labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
        //   defaultValue="HTML"
        //   placeholder='HTML'
          onChange={handleChange}
        >
          <MenuItem value={10}>HTML</MenuItem>
          <MenuItem value={20}>Java script</MenuItem>
          <MenuItem value={30}>JQuery</MenuItem>
          <MenuItem value={30}>CSS</MenuItem>
          <MenuItem value={30}>Bootstrap</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
