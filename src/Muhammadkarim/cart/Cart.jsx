import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Toolbar from '@mui/material/Toolbar';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Fab from '@mui/material/Fab';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import {props} from 'react'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function ButtonAppBar() {


    const [counter, setCounter] = useState("")
    const [colorStyle, setColorStyle] = useState({ color: "yellow" })
  
    const one = () => {
      setCounter( "grey")
      setColorStyle({ bgcolor: "green" })
    };


    const [count, setCount] = useState(1)

    
    return (
        <Box >
            <Box sx={{ flexGrow: 1, mb:25}}>
                <Typography >caart</Typography>
                <Toolbar sx={{ bgcolor: '#D3D3D3', p: 6 }}>
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
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'start', color: '#505D68', ml: 2, display: { xs: 'none', md: 'flex' } }}>
                        Shopping cart
                    </Typography>
                </Toolbar>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'start', color: '#505D68', ml: 2 }}>
                        Subtotal (1 item)
                    </Typography>
                    <Typography variant='h4' sx={{ textAlign: 'end', color: '#505D68', m: 2 }}>
                        $42.14
                    </Typography>
                </Toolbar>
                <Box Container sx={{ bgcolor: '#D3D3D3' }}>
                    <Box sx={{ textAlign: 'start', p: 5 }}>
                        <Button variant="" sx={{ bgcolor: '#505D68', color: 'white', fontSize: 20, "&:hover": { bgcolor: 'green' } }}><KeyboardBackspaceIcon sx={{ fontSize: 50, mr: 4 }} />Continue Shopping</Button>
                    </Box>
                    <Card sx={{ m: '10%' }}>
                        <CardContent>
                            <Box sx={{ display: { xs: '12', md: 'flex' }, justifyContent: 'center', m: '0%' }}>
                                <img src="images.png" alt="" />
                                <Box sx={{ m: 10 }}>
                                    <Typography variant="h4" component="div" sx={{ textAlign: 'start' }}>
                                        Lyle & scott Men's Short<br />sleeve Camo Rocket
                                    </Typography>
                                    <Typography sx={{ fontSize: 24, textAlign: 'start' }} color="text.secondary" gutterBottom>
                                        Brand: Revolve
                                    </Typography>
                                    <Typography sx={{ fontSize: 35, textAlign: 'start', mt: 5 }} color="#505D68" gutterBottom>
                                        <b>$76</b>
                                    </Typography>
                                </Box>
                            </Box>
                            <Grid container  sx={{mt:5}} >
                                <Grid item xs={4} sx={{ border: '3px solid #D3D3D3', display: 'flex' }}>
                                    <Typography variant='h5' sx={{ alignSelf: 'center', m: 2 }} color="#C2D1D9" >
                                        Size:
                                    </Typography>
                                    <Typography sx={{ fontSize: 35, flexGrow: 0.5, alignSelf: 'center' }} color="#505D68" >
                                        <b>S</b>
                                    </Typography>
                                    <ViewComfyIcon fontSize='large' sx={{ alignSelf: 'center' }} />
                                </Grid>
                                <Grid item xs={4} sx={{ border: '3px solid #D3D3D3', display:'flex' }}>
                                    <Button  onClick={() => setCount(count - 1)} sx={{borderRadius:'100%',flexGrow:0.5}}>
                                    <RemoveIcon  sx={{ color:'#C2D1D9', alignSelf: 'center', m: 2, fontSize:50, }} />
                                    </Button>
                                    <Typography variant='h4'  sx={{flexGrow:0.1, alignSelf: 'center', m: 2 }}>
                                         {count}
                                    </Typography>
                                    <Button  onClick={() => setCount(count + 1)} sx={{borderRadius:'100%', flexGrow:0.5}}>
                                    <AddIcon  sx={{ color:'#C2D1D9', alignSelf: 'center', m: 2, fontSize:50 }}/>
                                    </Button>
                                </Grid>
                                <Grid item xs={4} sx={{ border: '3px solid #D3D3D3', }}>
                                    <Box sx={{float:'right', alignSelf:'center', mt:'5%'}}>
                                    <Fab sx={{colorStyle}}>{counter}</Fab>
                                    <Button onClick={one}>
                                    <ArrowDropDownIcon sx={{fontSize:50, color:'#C2D1D9',}}/>
                                    </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container sx={{mt:5}}>
                                <Grid item xs={12} md={6} display="flex" sx={{justifyContent:'center',align:'center'}}>
                                    <FavoriteBorderIcon  sx={{fontSize:50, color:'#C2D1D9',}}/>
                                    <Typography variant='h4'>
                                        Add to wishlist
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={6} display="flex" sx={{justifyContent:'center',}}>
                                    <CloseIcon  sx={{fontSize:50, color:'#C2D1D9',}} />
                                    <Typography variant='h4'>
                                    Remove Item
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Box sx={{display:{xs:'12', md:'flex', justifyContent:'center', spacing:5, alignItems:'center'}}}>
                        <Typography variant='h4' sx={{color:'#505D68',padding:'3%'}}>
                            We accept
                        </Typography>
                        <Typography sx={{p:'3%'}}>
                        <img src="mastercard.png" alt="" />
                        </Typography>
                        <Typography  sx={{p:'3%'}}>
                        <img src="visa.jpg" alt=""  />
                        </Typography>
                    </Box>
                    <Typography variant='h4' sx={{color:'#505D68', p:10}}>
                        <b>!00% Safe and Secure</b>
                    </Typography>
                </Box>
                <Container sx={{mt:'8%'}}>
                    <Button sx={{bgcolor:'#505D68', color:'white', width:'100%', fontSize:35, '&:hover':{bgcolor:'green'}}}>
                        Continue to ccheckout
                    </Button>
                </Container>
            </Box>
        </Box>
    );
} 