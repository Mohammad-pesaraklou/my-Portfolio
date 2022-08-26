import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import HtmlP from '../Assets/html.png';
import CSS from '../Assets/css.png';
import Js from '../Assets/javascript.png';
import reactPhoto from '../Assets/react.png';
import matreialUi from '../Assets/logo.png';
import rest from '../Assets/picwish.png';
import gitPhoto from '../Assets/github.png';
import Graph from '../Assets/index.png';
//styles
import "./styles/Skills.css";




const Skills = () => {
    return (
          <Container maxWidth="lg">
                       <Grid container className='container' p={4}>
                <Grid item xs={12} sx={{display:"flex",alignItems:"center"}}>
                    <Typography variant="h3" mb={2} fontFamily="Montserrat" className='textSkill'>
                        Skills
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{display:"flex",alignItems:"center"}}>
                    <Typography variant="h5" mb={2} fontFamily="Montserrat" className='secondText'>
                        // These are the Technologies i've worked with
                    </Typography>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={6} lg={4}>
                        <div className='itemContainer'>
                           <img src={HtmlP} className="imgP" alt="Html photo"/>
                           <Typography mt={2} variant="h6" fontWeight={500} fontFamily="Montserrat">
                            HTML    
                        </Typography> 
                        </div>
                    </Grid>
                    <Grid item xs={6} lg={4}>
                        <div className='itemContainer'>
                           <img src={CSS} className="imgP" alt="Html photo"/>
                           <Typography mt={2} variant="h6" fontWeight={500} fontFamily="Montserrat">
                            CSS    
                        </Typography> 
                        </div>
                    </Grid>
                    <Grid item xs={6} lg={4}>
                        <div className='itemContainer'>
                           <img src={Js} className="imgP" alt="Html photo"/>
                           <Typography mt={2} variant="h6" fontWeight={500} fontFamily="Montserrat">
                            JAVASCRIPT    
                        </Typography> 
                        </div>
                    </Grid>
                    <Grid item xs={6} lg={4}>
                        <div className='itemContainer'>
                           <img src={reactPhoto} className="imgP" alt="Html photo"/>
                           <Typography mt={2} variant="h6" fontWeight={500} fontFamily="Montserrat">
                            REACT    
                        </Typography> 
                        </div>
                    </Grid>
                    <Grid item xs={6} lg={4}>
                        <div className='itemContainer'>
                           <img src={matreialUi} className="imgP" alt="Html photo"/>
                           <Typography mt={2} variant="h6" fontWeight={500} fontFamily="Montserrat">
                               MATERIAL-UI
                        </Typography> 
                        </div>
                    </Grid>
                    <Grid item xs={6} lg={4}>
                        <div className='itemContainer'>
                           <img src={Graph} className="imgP" alt="Html photo"/>
                           <Typography mt={2} variant="h6" fontWeight={500} fontFamily="Montserrat">
                            GRAPH QL    
                        </Typography> 
                        </div>
                    </Grid>
                    <Grid item xs={6} lg={4}>
                        <div className='itemContainer'>
                           <img src={rest} className="imgP" alt="Html photo"/>
                           <Typography mt={2} variant="h6" fontWeight={500} fontFamily="Montserrat">
                           REST API    
                        </Typography> 
                        </div>
                    </Grid>
                    <Grid item xs={6} lg={4}>
                        <div className='itemContainer'>
                           <img src={gitPhoto} className="imgP" alt="Html photo"/>
                           <Typography mt={2} variant="h6" fontWeight={500} fontFamily="Montserrat">
                               GITHUB 
                        </Typography> 
                        </div>
                    </Grid>
                </Grid>
            </Grid>
          </Container>
    );
};

export default Skills;