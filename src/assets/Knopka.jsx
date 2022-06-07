import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import { RadioGroup } from '@mui/material';

export default function CheckboxLabels() {
  return (
    <div style={{marginLeft:'3%'}}>
    <FormGroup sx={{ marginTop:'10%'}}>
      <FormControlLabel value="start" control={<Checkbox defaultChecked />} label="Email me when new memeber sign up." />
      <FormControlLabel control={<Checkbox disabled />} label="Never email me."/>
    </FormGroup>
    <FormGroup>
    <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="HTML format" />
        <FormControlLabel value="male" control={<Radio />} label="Plain text" sx={{mt:'1%',mb:'-1%'}}/>
        <FormControlLabel value="other" control={<Radio  disabled/>} label="Rich text" sx={{ '&:hover':{color:'red',cursor:'not-allowed'}}} />
      </RadioGroup>
    </FormGroup>
    </div>
  );
}
