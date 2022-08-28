import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { HiArrowSmRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
//style
import "./styles/Banner.css";

const Banner = () => {
    return (
        <div name="home">
        <Container maxWidth="lg">
        <Grid container>
        <Grid item ml={12}>
        <Box sx={{display: 'flex',alignItems: 'center',minHeight: "90vh"}}> 
            <Box >
                <Typography fontFamily="Montserrat" variant="h4"  sx={{color:"#db6400"}}>
                    Hello my Name is
                </Typography>
                <Typography fontFamily="Montserrat"  sx={{color: "#cccccc",fontSize:{xs:"40px",md: "60px",lg:"70px"}}}>
                    Mohammad.P
                </Typography>
                <Typography fontFamily="Montserrat"  sx={{color:"#baabda",fontSize:{xs:"50px",md: "58px",lg: "83px"}}}>
                    i'm Front-End Developer
                </Typography>
                <Typography fontFamily="Montserrat" variant="h5"  sx={{color:"#db6300ba",textTransform:"capitalize",width:{xs:"300px",sm:"410px",md:"600px"}}}>
                i am front end developer specializing in building and occasionally designing.exceptional digital experience currently,i'm focused on building responsive web application
                </Typography>
                <Link to="work" smooth={true} duration={900} >
                <button className='btnView'>
                    view Work
                    <span className='btnSpan'>
                     <HiArrowSmRight fontSize="28px"/>
                    </span>
                </button>
                </Link>
            </Box>
        </Box>
        </Grid>          
        </Grid>
        </Container>
        </div>

    );
};

export default Banner;


