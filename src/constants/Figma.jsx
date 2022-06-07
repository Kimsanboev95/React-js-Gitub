import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ForwardIcon from '@mui/icons-material/Forward';
import LoopIcon from '@mui/icons-material/Loop';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import LinkIcon from '@mui/icons-material/Link';
import Toolbar from '@mui/material/Toolbar';
import { Container } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ButtonAppBar() {
    return (
        <Box sx={{ m: '1%', mt: '1%', }}>
            <Box sx={{ flexGrow: 1, mb: '8%' }}>
                <Toolbar sx={{ bgcolor: '#EDF7EDFF', p: 6 }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Figma</Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <img src='picture.png' srcset='picture.png 4x' style={{ display: { xs: 'none', md: 'flex' } }} />
                    </Box>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'start', color: '#AEBAD3', ml: 2, display: { xs: 'none', md: 'flex' } }}>
                        FunCaptcha
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <img src="arkose-labs.webp" srcSet='arkose-labs.webp 4x' style={{}} />
                    </Box>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 10, textAlign: 'start', color: '#6AD3B1', display: { xs: 'none', md: 'flex' } }}>
                        Arkose Labs
                    </Typography>
                    <Button color="inherit" href='https://Figma.com' sx={{ textDecoration: 'inline', display: { xs: 'none', md: 'flex' } }}><LinkIcon /><u><b>Website</b></u></Button>
                </Toolbar>
            </Box>
            <Container>
                <Grid  rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 6 }} >
                    <Grid item xs={12} sm={6} md={4} >
                        <Box sx={{ float: 'center', border: '1px solid #b4b4b4', pb: '10%' }}>
                            <Box sx={{ width: '100%', marginTop: '5%', mb: '5%' }}>
                                <img src="istock.jpg" alt="" style={{ width: '60%', }} />
                            </Box>
                            <Typography sx={{ mb: '9%' }}>
                                Please verify you'ra not a spammer<br /> by doing this quick activity
                            </Typography>
                            <Button type="submit" sx={{ border: '3px solid black', borderRadius: '0px', color: 'black', }} >Verify <ForwardIcon /></Button>
                        </Box>
                        <Box sx={{}}>
                            <Toolbar spacing={3} sx={{ bgcolor: '#F1F1F1', color: '#C0C0C0', display: 'flex', }}>
                                <Box>
                                    <img src='picture.png' srcset='picture.png 8x' />
                                </Box>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 10, textAlign: 'start', ml: 1, fontFamily: 'monospace', }}>
                                    <b>FunCaptcha</b>
                                </Typography>
                                <Typography sx={{}}>
                                    <Typography sx={{ display: 'flex' }}>
                                        <QuestionMarkIcon />
                                        <LoopIcon />
                                        <VolumeUpIcon />
                                    </Typography>
                                </Typography>
                            </Toolbar>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Box sx={{ float: 'center', border: '1px solid #b4b4b4', pb: '8%' }}>
                            <Typography>
                                When the main image<br /> <b>is the right way up </b><br />touch Done!
                            </Typography>
                            <Box sx={{ width: '100%', mb: '4%', mt: '2%' }}>
                                <img src="photo.jpg" alt="" style={{ borderRadius: '100%', border: '1px solid black' }} />
                            </Box>
                            <Button type="submit" sx={{ border: '3px solid black', borderRadius: '0px', color: 'black ' }} >Done <ForwardIcon /></Button>
                        </Box>
                        <Box sx={{}}>
                            <Toolbar spacing={3} sx={{ bgcolor: '#F1F1F1', color: '#C0C0C0', display: 'flex', }}>
                                <Box>
                                    <img src='picture.png' srcset='picture.png 8x' />
                                </Box>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 10, textAlign: 'start', ml: 1, fontFamily: 'monospace', }}>
                                    <b>FunCaptcha</b>
                                </Typography>
                                <Typography >
                                    <Typography sx={{ display: 'flex' }}>
                                        <QuestionMarkIcon />
                                        <LoopIcon />
                                        <VolumeUpIcon />
                                    </Typography>
                                </Typography>
                            </Toolbar>
                        </Box>                
                        </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{ float: 'center', border: '1px solid #b4b4b4', pb: '5%' }}>
                            <Typography mt="3%">
                                whoops! That's not quite right
                            </Typography>
                            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', mt: '14%', mb: '8%', justifyContent: 'center' }}>
                                <Typography>
                                    When the main image<br /> <b> is the right way up </b><br /> touch Done!
                                </Typography>
                                <img src="photo2.jpg" alt="" />
                            </Box>
                            <Button type="submit" sx={{ border: '3px solid black', borderRadius: '0px', color: 'black ' }} >Try again <ForwardIcon /></Button>
                        </Box>
                        <Box >
                            <Toolbar spacing={3} sx={{ bgcolor: '#F1F1F1', color: '#C0C0C0', display: 'flex', }}>
                                <Box>
                                    <img src='picture.png' srcset='picture.png 8x' />
                                </Box>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 10, textAlign: 'start', ml: 1, fontFamily: 'monospace', }}>
                                    <b>FunCaptcha</b>
                                </Typography>
                                <Typography sx={{ textAlign: 'end', pl: '30%' }}>
                                    <Typography sx={{ display: 'flex' }}>
                                        <QuestionMarkIcon />
                                        <LoopIcon />
                                        <VolumeUpIcon />
                                    </Typography>
                                </Typography>
                            </Toolbar>
                        </Box>
                    </Grid>
                    </Grid>
                <Grid container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 9 }} sx={{ justifyContent:'center',mt:'2%'}}>
                    <Grid item xs={12} sm={6} md={4} ml="%" >
                        <Box sx={{ border: '1px solid gray', pb: '20%' }}>
                            <Typography sx={{ textAlign: 'center', m: '4%' }}>
                                <b>Touch the arrow</b><br /> to roll the ball
                            </Typography>
                            <Box sx={{ width: '100%', mt: '9%' }}>
                                <img src="photo.jpg" alt="" />
                            </Box>
                        </Box>
                        <Box sx={{}}>
                            <Toolbar spacing={3} sx={{ bgcolor: '#F1F1F1', color: '#C0C0C0', display: 'flex', }}>
                                <Box>
                                    <img src='picture.png' srcset='picture.png 8x' />
                                </Box>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 10, textAlign: 'start', ml: 1, fontFamily: 'monospace', }}>
                                    <b>FunCaptcha</b>
                                </Typography>
                                <Typography sx={{ textAlign: 'end', pl: '30%' }}>
                                    <Typography sx={{ display: 'flex' }}>
                                        <QuestionMarkIcon />
                                        <LoopIcon />
                                        <VolumeUpIcon />
                                    </Typography>
                                </Typography>
                            </Toolbar>
                        </Box>
                        <Typography component='div' sx={{}}>
                            <Button variant="contained" sx={{ width: '100%', mt: '4%', mb: '4%' }} >
                                Submit
                            </Button>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Box sx={{ border: '1px solid gray', pb: '5%' }}>
                            <Typography color="gray" sx={{ m: '4%' }}>
                                When the main image<br /> <b>is the right way up </b><br />touch Done!
                            </Typography>
                            <Box sx={{ width: '100%', }}>
                                <img src="photo.jpg" alt="" />
                            </Box>
                            <Button variant="contained" endIcon={<ForwardIcon />} sx={{ borderRadius: '0px', mt: '4%' }}>
                                Done
                            </Button>
                        </Box>
                        <Box sx={{}}>
                            <Toolbar spacing={3} sx={{ bgcolor: '#F1F1F1', color: '#C0C0C0', display: 'flex', }}>
                                <Box>
                                    <img src='picture.png' srcset='picture.png 8x' />
                                </Box>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 10, textAlign: 'start', ml: 1, fontFamily: 'monospace', }}>
                                    <b>FunCaptcha</b>
                                </Typography>
                                <Typography sx={{ textAlign: 'end', pl: '30%' }}>
                                    <Typography sx={{ display: 'flex' }}>
                                        <QuestionMarkIcon />
                                        <LoopIcon />
                                        <VolumeUpIcon />
                                    </Typography>
                                </Typography>
                            </Toolbar>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
