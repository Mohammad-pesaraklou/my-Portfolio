import React,{ useState } from 'react';
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
import MailIcon from '@mui/icons-material/Mail';
import { GiSkills } from 'react-icons/gi' 
import { IoMdCodeWorking } from 'react-icons/io' 
import styled from '@emotion/styled';
import HomeIcon from '@mui/icons-material/Home';
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { RiContactsLine } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import { BsLink45Deg } from 'react-icons/bs';
import { Link } from 'react-scroll';
import logo from '../Assets/Mpp.png'
//Resume
import docL from '../Assets/Resume/Nresume.docx'

const Navbar = () => {

    const [toggle,setToggle] = useState(false)

    const handler = () => setToggle(!toggle)

    const drawerWidth = 240;

    return (
      <>
        <AppBar position='sticky' sx={{background: 'linear-gradient(to bottom right,#333333,#121212)'}}>
           <Toolbar sx={{display:'flex',justifyContent: "space-between",p:2,height: '120px'}}>
                <img src={logo} style={{width: '170px',marginTop: '13px',cursor: 'pointer'}}/>
             {/* <Typography  variant="h3"sx={{color:"#db6400",marginLeft:{lg:"70px"}}}>
            </Typography> */}

            <Box className='ulList' sx={{display:{xs:"none",sm: "flex"}}}>
                <ul className='ulList' style={{display: 'flex',margin: '0 10px',fontFamily: "Montserrat"}}>
                    <li className='listItem linkItem'>
                    <Link to="home" smooth={true} duration={900} >
                        Home
                    </Link>
                    </li>
                    <li className='listItem linkItem'>
                    <Link to="about" smooth={true} duration={900} >
                        About
                    </Link>
                    </li>
                    <li className='listItem linkItem'>
                    <Link to="skills" smooth={true} duration={900} >
                        Skills
                    </Link>
                    </li>
                    <li className='listItem linkItem'>
                    <Link to="work" smooth={true} duration={900} >
                        Work
                    </Link>
                    </li>
                    <li className='listItem linkItem'>
                    <Link to="contact" smooth={true} duration={900} >
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
            <MenuIcon sx={{color: '#db6400',fontSize: "50px"}}/>
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
            {window.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon style={{fontSize: "30px"}}/>}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Typography variant="h5"  p={"5px 15px"} sx={{}}>
          Menu
        </Typography>
            <List>
                {['Home', 'About', 'Skill', 'Work','Contact'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                              <Link to="home" smooth={true} duration={900} >
                            {index === 0 && 
                                  <HomeIcon style={{color: '#201f1f',fontSize: "30px"}}/>
                            }
                            </Link>
                            <Link to="about" smooth={true} duration={900} >
                            {index === 1 && <MailIcon style={{color: '#3f9885',fontSize: "30px"}}/>} 
                            </Link>
                            <Link to="skills" smooth={true} duration={900} >
                            {index === 2 && <GiSkills style={{color: '#565f69',fontSize: "30px"}}/>}
                            </Link>
                            <Link to="work" smooth={true} duration={900} >
                            {index === 3 && <IoMdCodeWorking style={{color: '#201f1f',fontSize: "30px"}}/>}
                            </Link>
                            <Link to="contact" smooth={true} duration={900} >
                            {index === 4 && <RiContactsLine style={{color: '#201f1f',fontSize: "30px"}}/>}
                            </Link>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant="h6">
                            {text}
                        </Typography>} />
                    </ListItemButton>
                    </ListItem>
                      ))}
            </List>
        <Divider />
        <Typography variant="h5" p={"5px 15px"} sx={{display: 'flex',alignItems: 'center',}}>
          Links <BsLink45Deg />
        </Typography>
        <List>
                {['Linkedin', 'github', 'Email', 'My Resume'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                              <a href="#">
                            {index === 0 && 
                                  <FaLinkedin style={{color: '#294aa6',fontSize: "30px"}}/>
                            }
                            </a>
                            <a href="https://github.com/Mohammad-pesaraklou" target="_blank" >
                            {index === 1 && <FaGithub style={{color: '#201f1f',fontSize: "30px"}}/>} 
                            </a>
                            <a href="mailto: mhmdpsr6@gmail.com">
                            {index === 2 && <HiOutlineMail style={{color: '#3f9885',fontSize: "30px"}}/>}
                            </a>
                            <a href={docL} download>
                            {index === 3 && <IoMdCodeWorking style={{color: '#38495e',fontSize: "30px"}}/>}
                            </a>
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
        <Grid item xs={12} sx={{position:"fixed",bottom:"44%",display:{xs:"none",sm:"none",md:"none",lg:"block"}}}>
            <Grid item xs={12}>
                    <Box sx={{width: "180px",display:"flex",justifyContent:"space-between",alignItems:"center"}} >
                    <div className="mainBox">
                        <a href={""} className='linkedinLink' >
                            Linkedin  <FaLinkedin fontSize="50px"/>
                        </a>
                    </div>
                </Box>
            </Grid>
            <Grid item xs={12}>
                    <Box sx={{width: "180px",display:"flex",justifyContent:"space-between",alignItems:"center"}} className="mainBox">
                    <div>
                        <a href="https://github.com/Mohammad-pesaraklou" target="_blank" className='linkedinLink github'>
                        github  <FaGithub fontSize="50px"/>
                        </a>
                    </div>
                </Box>
            </Grid>
            <Grid item xs={12}>
                    <Box sx={{width: "180px",display:"flex",justifyContent:"space-between",alignItems:"center"}} className="mainBox">
                    <div>
                        <a href="mailto: mhmdpsr6@gmail.com" className='linkedinLink email'>
                           Email <HiOutlineMail fontSize="50px" color={"#cad1d8"}/>
                        </a>
                    </div>
                </Box>
            </Grid>
            <Grid item xs={12}>
                    <Box sx={{width: "180px",display:"flex",justifyContent:"space-between",alignItems:"center"}} className="mainBox">
                    <div>
                        <a href={docL} download className='linkedinLink resume'>
                        Resume  <RiContactsLine fontSize="45px"/>
                        </a>
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