import React from 'react';
import { AppBar, Grid, Toolbar } from '@mui/material'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {Link} from 'react-router-dom'
import { GiSkills } from 'react-icons/gi' 
import { GrContact } from 'react-icons/gr' 
import { IoMdCodeWorking } from 'react-icons/io' 
import { useState } from 'react';
import styled from '@emotion/styled';
import HomeIcon from '@mui/icons-material/Home';
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import SpeedDial from '@mui/material/SpeedDial';
import { RiContactsLine } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';

const Navbar = () => {

    const [toggle,setToggle] = useState(false)

    const handler = () => setToggle(!toggle)

    const drawerWidth = 240;

    return (
      <>
        <AppBar color="transparent" sx={{position:'relative'}}>
           <Toolbar sx={{display:'flex',justifyContent: "space-between",p:2}}>
             <Typography  variant="h3"sx={{color:"#db6400",marginLeft:{lg:"70px"}}}>
                Portofilo
            </Typography>

            <Box className='ulList' sx={{display:{xs:"none",sm: "flex"}}}>
                <ul className='ulList' style={{display: 'flex',margin: '0 10px'}}>
                    <li className='listItem'>
                    <Link to="/" className='linkItem'>
                        Home
                    </Link>
                    </li>
                    <li className='listItem'>
                    <Link to="/" className='linkItem'>
                        About
                    </Link>
                    </li>
                    <li className='listItem'>
                    <Link to="/" className='linkItem'>
                        Skill
                    </Link>
                    </li>
                    <li className='listItem'>
                    <Link to="/" className='linkItem'>
                        Work
                    </Link>
                    </li>
                    <li className='listItem'>
                    <Link to="/" className='linkItem'>
                        Contact
                    </Link>
                    </li>
                </ul>
            </Box>

           <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handler}
            sx={{ ...(toggle && { display: 'none' }),position: 'absolute',right: "30px",  display:{xs: 'flex',sm:'none'} }}
          >
            <MenuIcon sx={{color: '#674ea7',fontSize: "50px"}}/>
          </IconButton>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        
        }}
        variant="persistent"
        anchor="right"
        open={toggle}
     >
        <DrawerHeader>
          <IconButton onClick={handler}>
            {window.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
            <List>
                {['Home', 'About', 'Skill', 'Work','Contact'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                        {index === 0 && <HomeIcon style={{color: '#674ea7',fontSize: "30px"}}/> }
                        {index === 1 && <MailIcon style={{color: '#674ea7',fontSize: "30px"}}/>} 
                        {index === 2 && <GiSkills style={{color: '#674ea7',fontSize: "30px"}}/>}
                        {index === 3 && <IoMdCodeWorking style={{color: '#674ea7',fontSize: "30px"}}/>}
                        {index === 4 && <GrContact style={{color: '#674ea7',fontSize: "30px"}}/>}
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant="h6">
                            {text}
                        </Typography>} />
                    </ListItemButton>
                    </ListItem>
                      ))}
            </List>
       
             </Drawer>
           </Toolbar>
        </AppBar>
        <Grid item xs={12} sx={{position:"fixed",bottom:"44%",display:{xs:"none",sm:"none",md:"block"}}}>
            <Grid item xs={12}>
                    <Box sx={{width: "180px",display:"flex",justifyContent:"space-between",alignItems:"center"}} className="mainBox">
                    <div>
                        <Link to="/" className='linkedinLink' >
                        Linkedin  <FaLinkedin fontSize="50px"/>
                        </Link>
                    </div>
                </Box>
            </Grid>
            <Grid item xs={12}>
                    <Box sx={{width: "180px",display:"flex",justifyContent:"space-between",alignItems:"center"}} className="mainBox">
                    <div>
                        <Link to="/" className='linkedinLink github'>
                        github  <FaGithub fontSize="50px"/>
                        </Link>
                    </div>
                </Box>
            </Grid>
            <Grid item xs={12}>
                    <Box sx={{width: "180px",display:"flex",justifyContent:"space-between",alignItems:"center"}} className="mainBox">
                    <div>
                        <Link to="/" className='linkedinLink email'>
                           Email <HiOutlineMail fontSize="50px" color={"#cad1d8"}/>
                        </Link>
                    </div>
                </Box>
            </Grid>
            <Grid item xs={12}>
                    <Box sx={{width: "180px",display:"flex",justifyContent:"space-between",alignItems:"center"}} className="mainBox">
                    <div>
                        <Link to="/" className='linkedinLink resume'>
                        Resume  <RiContactsLine fontSize="45px"/>
                        </Link>
                    </div>
                </Box>
            </Grid>
        </Grid>
      </>
    );
};

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: 5
  
  }));

export default Navbar;