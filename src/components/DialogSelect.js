import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function DialogSelect() {
    const [open, setOpen] = React.useState(false);
    const [skill, setSkill] = React.useState('');
    const [level, setLevel] = React.useState('');
    const [okButtonState, setOkButtonState] = React.useState(false);

    const handleChangeSkill = (event) => {
        setSkill((event.target.value) || '');
    };
    const handleChangeLevel = (event) => {
        setLevel((event.target.value) || '');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOkButton = () => {
        if(skill !='' && level !=''){
            setOkButtonState(true)
        }
    }

    return (
        <div>
            <Button onClick={handleClickOpen} sx={{ color: '#ffffff', border: '1px solid white', margin: '10px' }}>Open select dialog</Button>
            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Fill the form</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel htmlFor="demo-dialog-native">Skill</InputLabel>
                            <Select
                                native
                                value={skill}
                                onChange={handleChangeSkill}
                                input={<OutlinedInput label="Skill" id="demo-dialog-native" />}
                            >
                                <option value='Html'>Html</option>
                                <option value='Css'>Css</option>
                                <option value='Js'>Js</option>
                                <option value='React'>React</option>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-dialog-select-label">Level</InputLabel>
                            <Select
                                labelId="demo-dialog-select-label"
                                id="demo-dialog-select"
                                value={level}
                                onChange={handleChangeLevel}
                                input={<OutlinedInput label="Level" />}
                            >
                                <MenuItem value='Junior'>Junior</MenuItem>
                                <MenuItem value='Middle'>Middle</MenuItem>
                                <MenuItem value='Senior'>Senior</MenuItem>
                            </Select>
                        </FormControl>
                        <div>

                        </div>
                    </Box>
                    {(okButtonState && skill !=='' && level !== '') && <h2>Wybrałeś {skill} {level}</h2>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleOkButton}>Ok</Button>
                </DialogActions>

            </Dialog>

        </div>
    );
}
