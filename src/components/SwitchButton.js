import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from 'react';

export default function SwitchLabels() {

    const [light,setLight] = useState('Dark')

    const switchHandler = () => {
        setLight(light === 'Dark' ? 'Light' : 'Dark')
    }

  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked onChange={switchHandler} sx={{'& .MuiSwitch-switchBase': {
        color: 'red',
      },}}/>} label={light}   />
    </FormGroup>
  );
}