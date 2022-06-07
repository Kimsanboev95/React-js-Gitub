import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid'
import { Box, } from '@mui/system';
import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CheckIcon from '@mui/icons-material/Check';
import InputAdornment from '@mui/material/InputAdornment';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ClearIcon from '@mui/icons-material/Clear';
import Selection from './Selection';
import Native from './Native'
import Knopka from './Knopka'
import RadioBooton from './RadioBooton'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button'

import  { useState, useEffect } from "react";






const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function handleClick(event) {
    event.preventDefault();
}

export default function BasicBreadcrumbs() {

    const [age, setAge] = React.useState('');

    const [name, setName] = React.useState('John');
    const handleChange = (event) => {
        setName(event.target.value);
    };




    const [edit, setEdit] = useState(false);

    const updateUser = (e) => {
        e.preventDefault();
        //update action
        setEdit(false);
    };

    const editUser = (e) => {
        e.preventDefault();
        //stuffs you wanna do for editing
        setEdit(true);
    };

    useEffect(() => { }, [edit]);



    return (
        <Box sx={{ m: '3%' }}>
            <Box role="presentation" bgcolor="#f3f1f1ed" onClick={handleClick}>
                <Stack>
                    <Breadcrumbs aria-label="breadcrumb" sx={{ bgcolor: '', margin: '0.5%', }}>
                        <Link
                            underline="hover"
                            variant='h6'
                            color="blue"
                            href="/"
                        >
                            Admin Panel
                        </Link>
                        <Link
                            underline="hover"
                            color="blue"
                            variant='h6'
                            href="/material-ui/getting-started/installation/"
                        >
                            Preferences
                        </Link>
                        <Typography
                            color="text.secondary"
                            variant='h6'
                        >
                            Form Controls</Typography>
                    </Breadcrumbs>
                </Stack>
            </Box>
            <Box sx={{ mt: '1.5%', textAlign: 'start' }}>
                <Typography variant='h4'>Prefrences</Typography>
                <Typography variant='h6' >Here goes another form and form controls.</Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={6} sx={{ height: '100%', paddingRight: '5%', mt: '2%' }}>
                    <b style={{ float: 'left', marginBottom: '1%' }}>Last Name</b>
                    <TextField
                        type="text"
                        defaultValue="john"
                        style={{ width: '100%', }}
                    />
                </Grid>
                <Grid item xs={6} sx={{ height: '100%', paddingRight: '5%', mt: '2%' }} >
                    <b style={{ float: 'left', marginBottom: '1%' }}>User Name</b>
                    <TextField
                        type="text"
                        defaultValue="Henry"
                        style={{ width: '100%' }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ float: 'left' }}>
                        <strong>User name</strong>
                        <p>@admin</p>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <Box sx={{ float: 'left' }}>
                        <strong>Email address</strong>
                        <p>admin@compony.com</p>
                    </Box>
                </Grid>
                <Grid item xs={12} m={6} lg={6} sx={{ margin: '0%', paddingRight: '5%', '&:hover': { cursor: 'not-allowed' } }} >
                    <b style={{ float: 'left', marginBottom: '1%', }}>Current Password</b>
                    <TextField
                        disabled
                        id="curser"
                        // id="standard-password-input"
                        type="password"
                        autoComplete="current-password"
                        value="12335451321"
                        style={{ width: '100%', }}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={6} sx={{ paddingRight: '5%' }}>
                    <b style={{ float: 'left', marginBottom: '1%' }}>New Password</b>
                    <TextField
                        // id="standard-password-input"
                        type="password"
                        // autoComplete="current-password"
                        label="New Password"
                        leading icon="CheckIcon"
                        // Trailing icon
                        style={{ width: '100%', }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}  >
                    <b style={{ float: 'left', marginBottom: '1%', }}>Confirm New Password</b>
                    <TextField
                        type="password"
                        // autoComplete="current-password"
                        label="Confirm New Password"
                        leading CheckIcon
                        // secureTextEntry
                        // right={<TextFaild.CheckIcon name="eye" />}
                        style={{ width: '100%' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <b style={{ float: 'left', marginBottom: '1%', color: 'green' }}>Input with success</b>
                    <CheckIcon sx={{ position: 'absolute', left: '93%', color: 'green' }} />
                    <input
                        type="text"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CheckIcon />
                                </InputAdornment>
                            ),
                        }}
                        CheckIcon
                        CheckIconPosition="end"
                        style={{ width: '100%', height: '50%', border: '1px solid green' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <b style={{ float: 'left', marginBottom: '1%', color: 'brown' }}>Input with success</b>
                    <WarningAmberIcon sx={{ position: 'absolute', left: '93%', color: 'brown' }} />
                    <input
                        type="text"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CheckIcon />
                                </InputAdornment>
                            ),
                        }}
                        CheckIcon
                        CheckIconPosition="end"
                        style={{ width: '100%', height: '50%', border: '1px solid brown' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <b style={{ float: 'left', marginBottom: '1%', color: 'red' }}>Input with success</b>
                    <ClearIcon sx={{ position: 'absolute', left: '93%', color: 'red' }} />
                    <input
                        type="text"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CheckIcon />
                                </InputAdornment>
                            ),
                        }}
                        CheckIcon
                        CheckIconPosition="end"
                        style={{ width: '100%', height: '50%', border: '1px solid red' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <b style={{float:'left', width:'100%', textAlign:'left', marginBottom: '1%', color: 'green',  }}>Notes</b>
                    <TextareaAutosize
                        aria-label="maximum height"
                        minRows={3}
                        placeholder=""
                        style={{ width: '100%', height: '100%' }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Selection />
                    <Native />
                </Grid>
                <Grid item xs={6}>
                    <Knopka />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'left' }}>
                    <FormControlLabel value="start" control={<Checkbox defaultChecked />} label="Server status " />
                    <FormControlLabel control={<Checkbox />} label="Member status" />
                    <FormControlLabel control={<Checkbox />} label="Expired members" />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'left', marginTop: '-1%' }}>
                    <RadioBooton />
                </Grid>
                <Grid item xs={12} >
                    <Box column sx={{}}>
                        <b style={{ float: 'left' }}>File input</b>
                        <input type="file" style={{ float: 'left', width: '100%' }} />
                        <Typography sx={{ float: 'left', color: 'text.secondary' }}>You can upload file here.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} marginTop="2%">
                    <Stack spacing={0.5} direction="row">
                        <Button onclick="activateLasers()" type="submit" variant="contained">Update</Button>
                        <Button variant="outlined" onClick={() => { setEdit(true) }}>Reset</Button>
                        <div>
                            <form onSubmit={(e) => updateUser(e)}>
                                <input type="text" />
                                <input type="text" />
                                {edit ? (
                                    <button type="submit">Save</button>
                                ) : (
                                    <button onClick={(e) => editUser(e)}>Edit</button>
                                )}
                            </form>
                        </div>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}

