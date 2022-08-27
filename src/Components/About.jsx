import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import "./styles/About.css";

const About = () => {
    return (
        <Container maxWidth="lg" name="about">
        <Grid container className='container'p={2}>
           <Grid item xs={12} sx={{display:"flex",justifyContent:{xs:"left",md:"center"},ml:{xs:15,sm:0,lg:0},alignItems:"center",transform:"translateY(60px)"}}>
            <Typography variant="h2" className='aboutText'>
                About
            </Typography>
           </Grid>
           <Grid container spacing={2} sx={{display:{xs:"block",md:"flex"},justifyContent:"center",alignItems:"center"}}>
                <Grid item xs={12} md={6}> 
                <Typography  sx={{textTransform: "capitalize",fontSize:"30px",mt:{xs:9,md:0}}} fontFamily={"Montserrat"} textAlign={{xs:'left',sm:"left",md: "center"}}>
                   hi iam mohammad hi iam mohammad hi iam mohammad hi iam mohammad hi iam mohammad hi iam mohammad hi iam mohammad hi iam mohammad
                </Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{mt:{xs:6,sm:6,md:0}}}>
                <Typography fontSize="20px" fontFamily={"Montserrat"} textAlign={{xs:'left',sm:"left",md: "center"}}>
                   hi iam mohammad hi iam mohammad hi iam mohammad hi iam mohammad hi iam mohammad hi iam mohammad hi iam mohammad hi iam mohammad
                </Typography>
                </Grid>
           </Grid>
        </Grid>
        </Container>
    );
};

export default About;