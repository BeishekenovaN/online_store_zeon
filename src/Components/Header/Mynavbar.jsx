import { AppBar, appBarClasses, Box, Button, Container, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import './Mynavbar.css'
import Montserrat from '../Fonts/Montserrat-VariableFont_wght.ttf'
import { ThemeProvider } from 'styled-components';
import Vector from '../Images/Vector.png';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Heart from '../Images/heart.png';
import ShoppingBag from '../Images/shopping-bag.png';
import Line from '../Images/Line.png'
import searchIcon from '../Images/searchIcon.png'
import DrawerComp from './Drawer/Drawer';
import {Link} from 'react-router-dom';

export default function Mynavbar() {

const [value, setValue] = useState();
const  theme = useTheme()
console.log(theme)
const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
console.log(isMatch);

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
{

   
    return (
    <Container  className='container' sx={{width: '100%', height: '4em', align: 'center', maxWidth: 'xs', padding: '0'}}>
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="sticky" sx={{display: {xs: 'none', sm: 'block', md: 'block'}, bgcolor: 'white'}}>
        <Toolbar sx={{ flexDirection: 'row' }}>
            <Tabs
            sx={{marginRight: 'auto'}}
            indicatorColor="secondary"
            color='black'
            value={value}
            onChange={(e, value) => setValue(value)}
            >
                <Link style={{textDecoration: 'none', color: 'black'}} to='/aboutUs'>
                <Tab  label="О Нас"/>
                </Link >
                <Link style={{textDecoration: 'none', color: 'black'}} to='/collections'>
                <Tab  label="Коллекции"/>
                </Link>
                <Link style={{textDecoration: 'none', color: 'black'}} to='news'>
                <Tab  label="Новости"/>
                </Link>
            </Tabs>
            
                <Button sx={{marginLeft: 'auto'}}>
                <a style={{textDecoration: 'none', color: 'black'}} href='tel:+996000000000'>Тел: +996 000 00 00 00</a>
                </Button>    
                
        </Toolbar>
        </AppBar>
        {/* <AppBar classes={{root: appBarClasses}} position="sticky" sx={{bgcolor: 'white', height: '88px'}}>  */}
        <Toolbar className='toolbar2' 
        sx={{ 
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
            paddingLeft: '0',
            paddingRight: '0',
            height: '5em'
             }}> 
                 { isMatch ? (
                <DrawerComp />
            ) : (
            <>
            </>
            )}
            <div className='logo'>
                <img src={Vector} alt="logo" style={{width:'90%'}} />
            </div>
            { isMatch ? (
                <img className="searchIcon" src={searchIcon} />
            ) : (
                <Search  sx={{ display: {xs: 'none', sm: 'none', md: 'block', lg: 'block'}, bgcolor: '#F8F8F8'}}>
                <StyledInputBase
                    sx={{ width: '30em', height: '3em', color: 'black'}}  
                    placeholder="Поиск" 
                    inputProps={{ 'aria-label': 'search', color: 'black', paddingtop:'0px' }}
                    //   value={searchVal}
                    //   onChange={handleValue}
                />
                <img className="searchIcon" src={searchIcon} style={{paddingtop: '10px', paddingright: '15px'}} />
                </Search>
            )}
            
            <div className='emptydiv' style={{display: 'flexbox'}}>
                <div style={{display: 'inline-flex'}}>
                <Typography 
            component='div'
            sx={{ display: { xs: 'none', sm: 'inline-flex'}, marginLeft: '10px', marginRight: '20px', color:'black'}}>
                 <img  src={Heart} alt="Избраное" style={{marginRight:'10px'}}/>
                Избраное
                </Typography>
            </div>
            <img id='line' src={Line} />
            <div style={{display: 'inline-flex', marginLeft: '20px'}}>
                <Typography
            component='div'
            sx={{ display: { xs: 'none', sm: 'block'}, marginLeft: '10px', color:'black'}}>
                <img src={ShoppingBag} alt="Корзина" style={{marginRight:'10px'}} />
                Корзина
                </Typography>
            </div>
            </div>

        </Toolbar> 
        {/* </AppBar> */}
    </Box>
    </Container>
 
  );
}

}
