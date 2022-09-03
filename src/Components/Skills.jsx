import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
//Photos
import HtmlP from '../Assets/html.png';
import CSS from '../Assets/css.png';
import Js from '../Assets/javascript.png';
import reactPhoto from '../Assets/react.png';
import matreialUi from '../Assets/logo.png';
import rest from '../Assets/picwish.png';
import gitPhoto from '../Assets/github.png';
import Graph from '../Assets/index.png';
import types from '../Assets/types.png';
//styles
import "./styles/Skills.css";




const Skills = () => {
    return (
          <Container maxWidth="lg" name="skills">
                       <Grid container className='container' p={4}>
                <Grid item xs={12} sx={{display:"flex",alignItems:"center"}}>
                    <Typography variant="h3" mb={2} fontFamily='Quicksand' className='textSkill'>
                        Skills
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{display:"flex",alignItems:"center"}}>
                    <Typography variant="h5" mb={2} fontFamily='Quicksand' className='secondText'>
                        // These are the Technologies i've worked with
                    </Typography>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={6} lg={4}>
                        <div className='itemContainer'>
                           <img src={HtmlP} className="imgP" alt="Html photo"/>
                           <Typography mt={2} variant="h6" fontWeight={500} fontFamily='Quicksand'>
                            HTML    
                        </Typography> 
                        </div>
                    </Grid>
                    <Grid item xs={6} lg={4}>
                        <div className='itemContainer'>
                           <img src={CSS} className="imgP" alt="Html photo"/>
                           <Typography mt={2} variant="h6" fontWeight={500} fontFamily='Quicksand'>
                            CSS    
                        </Typography> 
                        </div>
                    </Grid>
                    <Grid item xs={6} lg={4}>
                        <div className='itemContainer'>
                           <img src={Js} className="imgP" alt="Html photo"/>
                           <Typography mt={2} variant="h6" fontWeight={500} fontFamily='Quicksand'>
                            JAVASCRIPT    
                        </Typography> 
                        </div>
                    </Grid>
                    <Grid item xs={6} lg={4}>
                        <div className='itemContainer'>
                           <img src={reactPhoto} className="imgP" alt="Html photo"/>
                           <Typography mt={2} variant="h6" fontWeight={500} fontFamily='Quicksand'>
                            REACT    
                        </Typography> 
                        </div>
                    </Grid>
                    <Grid item xs={6} lg={4}>
                        <div className='itemContainer'>
                           <img src={matreialUi} className="imgP" alt="Html photo"/>
                           <Typography mt={2} variant="h6" fontWeight={500} fontFamily='Quicksand'>
                               MATERIAL-UI
                        </Typography> 
                        </div>
                    </Grid>
                    <Grid item xs={6} lg={4}>
                        <div className='itemContainer'>
                           <img src={Graph} className="imgP" alt="Html photo"/>
                           <Typography mt={2} variant="h6" fontWeight={500} fontFamily='Quicksand'>
                            GRAPH QL    
                        </Typography> 
                        </div>
                    </Grid>
                    <Grid item xs={6} lg={4}>
                        <div className='itemContainer'>
                           <img src={types} className="imgP" alt="Html photo"/>
                           <Typography mt={2} variant="h6" fontWeight={500} fontFamily='Quicksand'>
                            TYPESCRIPT 
                        </Typography> 
                        </div>
                    </Grid>
                    <Grid item xs={6} lg={4}>
                        <div className='itemContainer'>
                           <img src={rest} className="imgP" alt="Html photo"/>
                           <Typography mt={2} variant="h6" fontWeight={500} fontFamily='Quicksand'>
                           REST API    
                        </Typography> 
                        </div>
                    </Grid>
                    <Grid item xs={6} lg={4}>
                        <div className='itemContainer'>
                           <img src={gitPhoto} className="imgP" alt="Html photo"/>
                           <Typography mt={2} variant="h6" fontWeight={500} fontFamily='Quicksand'>
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