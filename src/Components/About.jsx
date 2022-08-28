import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import "./styles/About.css";
import mee from '../Assets/mee.jpg'
const About = () => {
    return (
        <div className='mainContainer2'>
        <Container maxWidth="lg" name="about">


        <Grid container className='container'p={2}>


           <Grid item mb={2} xs={12} sx={{display:"flex",justifyContent:{xs:"left",md:"center"},ml:{xs:15,sm:0,lg:0},alignItems:"center"}}>
            <Typography variant="h2" className='aboutText'>
                About
            </Typography>
           </Grid>


           <Grid container spacing={1} sx={{display:{xs:"block",md:"flex"},justifyContent:"center",alignItems:"center"}}>
                <Grid item xs={12}> 
                <Typography fontFamily={"Montserrat"} color={"#db6300"} variant='h4' mb={1} >
                    Who i am
                </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{textTransform: "capitalize",fontSize:"20px",mt:{xs:9,md:0}}} fontFamily={"Montserrat"} textAlign="left">
                   Hi my name is mohammad pesraklou and im 21 years old.i am front end Developer living in Iran chasing my goal and building my career path.
                </Typography>
                <Typography  sx={{fontSize:"20px",mt:4}} fontFamily={"Montserrat"} textAlign="left">
                     Technology is fascinated me with how intricate programming can be i was quickly drawn to learn more.i started learning html & Css and java script with mr.milad azami courses.after while i start learning the popular frame work in the world which means React
                   and now i am spending my time to learning new technologies and create project with React js and CSS frame work such as material ui.
                </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={mee} className="mePic"/>
                </Grid>
           </Grid>


        </Grid>

        </Container>
        </div>
    );
};

export default About;