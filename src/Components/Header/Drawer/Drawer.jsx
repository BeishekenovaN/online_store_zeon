import { IconButton, ListItemButton, List, ListItemIcon, ListItemText, Drawer } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["О Нас", "Новости", "Коллекции", "Избранное", "Корзина"]
export default function DrawerComp(){

const [openDrawer, setOpenDrawer] = useState(false)

    return (
    <React.Fragment>
        <Drawer
            anchor="left"
            open={openDrawer}
            onClose={()=> setOpenDrawer(false)}
        >
            <List sx={{width: '16em'}}>
                {pages.map((page, index) => (
                    <ListItemButton key={index}>
                        <ListItemIcon>
                            <ListItemText>{page}</ListItemText>                                 
                        </ListItemIcon>
                    </ListItemButton>
                ))} 
                <div style={{ marginTop: '15em', marginLeft: '16px'}}>
                    <a style={{textDecoration: 'none', color: 'black'}} href='tel:+996000000000'>Тел: +996 000 00 00 00</a>
                </div>
            </List>
        </Drawer>
        <IconButton 
        sx={{color: 'black', marginLeft: '0'}}
        onClick={()=> setOpenDrawer(!openDrawer)}>
            <MenuIcon color="black"/>
        </IconButton>
    </React.Fragment>
       
    );
};
