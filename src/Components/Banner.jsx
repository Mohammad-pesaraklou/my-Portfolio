import React from 'react';
import { Button, Grid, SpeedDialIcon, Typography } from '@mui/material';
import { Box } from '@mui/system';
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import SpeedDial from '@mui/material/SpeedDial';
import { Link } from 'react-router-dom';
import { RiContactsLine } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import { HiArrowSmRight } from 'react-icons/hi';

import "./styles/Banner.css";

const Banner = () => {
    return (
        <Grid container>
        <Grid item ml={12}>
        <Box sx={{display: 'flex',alignItems: 'center',height: "70vh"}}> 
            <Box sx={{marginLeft:{xs:"20px",sm:"65px", lg: "100px"}}}>
                <Typography variant="h4"  sx={{color:"#db6400",fontFamily: "Montserrat"}}>
                    Hello my Name is
                </Typography>
                <Typography  sx={{color: "#cccccc",fontSize:{xs:"40px",md: "60px",lg:"70px"},fontFamily: "Montserrat"}}>
                    Mohammad.P
                </Typography>
                <Typography  sx={{color:"#baabda",fontSize:{xs:"50px",md: "58px",lg: "83px"},fontFamily: "Montserrat"}}>
                    i'm Front-End Developer
                </Typography>
                <Typography variant="h5"  sx={{color:"#db6300ba",fontFamily: "Montserrat",textTransform:"capitalize",width:{xs:"300px",sm:"410px",md:"600px"}}}>
                i am front end developer specializing in building and occasionally designing.exceptional digital experience currently,i'm focused on building responsive web application
                </Typography>
                <button className='btnView'>
                    view Work
                    <span className='btnSpan'>
                     <HiArrowSmRight fontSize="28px"/>
                    </span>
                </button>
            </Box>
        </Box>
        </Grid>          
        </Grid>

    );
};

export default Banner;


