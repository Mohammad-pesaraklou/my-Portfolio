import React from 'react';
import {  Button,Container, Grid, Typography } from '@mui/material';
//styles
import './styles/Work.css';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';


const Work = () => {

    return (
    <Container maxWidth="lg" name="work">
            <Grid container className='workContainer' p={4}>
                
        <Grid item xs={12} sx={{display:"flex",alignItems:"center"}}>
            <Typography variant="h3" mb={2} fontFamily="Montserrat" className='textWork'>
                Work
            </Typography>
        </Grid>
        <Grid item xs={12} sx={{display:"flex",alignItems:"center"}}>
            <Typography variant="h5" mb={2} fontFamily="Montserrat" className='secondText'>
                // Check out Some of my Recent work
            </Typography>
        </Grid>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} lg={4}>
              <div className='currencyItem' >
                <Div>   
                    <Link style={{textDecoration: 'none'}} to="/crypto">
                    <button className="btn2">Details Page</button>
                    </Link>
                </Div>  
             </div>

            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
                <div className='weblogItem'>
                <Div>   
                    <Link style={{textDecoration: 'none'}} to="/weblog">
                    <button className="btn2">Details Page</button>
                    </Link>
                </Div>  
             </div>

            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
            <div className='recipeApp'>
            <Div>
                    <Link style={{textDecoration: 'none'}} to="/recipe">
                    <button className="btn2">Details Page</button>
                    </Link>
                </Div>  
             </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
             <div className='storItem'>
              <Div>
                    <Link style={{textDecoration: 'none'}} to="/store">
                    <button className="btn2">Details Page</button>
                    </Link>
                </Div>  
             </div>
            </Grid>


            <Grid item xs={12} sm={6} lg={4}>
            <div className='signItem'>
              <Div>
                    <Link style={{textDecoration: 'none'}} to="/form">
                    <button className="btn2">Details Page</button>
                    </Link>
                </Div>  
             </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
            <div className='weather'>
            <Div>
                    <Link style={{textDecoration: 'none'}} to="/weather">
                    <button className="btn2">Details Page</button>
                    </Link>
                </Div>  
             </div>
            </Grid>
       
        </Grid>
    </Grid>
    </Container>
    );
};

const Div = styled.div`
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    transition: 0.3s;
    padding: 10px;
    &:hover{
        border-radius: 3px;
        transition: 0.6s;
        background: linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(47,46,45,1) 33%, rgba(98,92,86,1) 68%, rgba(171,134,117,1) 100%);
button{
    display: block;
    transition: all .2s ease-in;
}
.workTitle{
    display: flex;
    color: #1a1919;
}
}
`



export default Work;


{/* <Typography fontFamily="Montserrat" className='workTitle' variant='h4' mb={3} sx={{display:'none'}}>
React App
</Typography>
<div className='btnContainer'>
<a className='gitLink' href="https://github.com/Mohammad-pesaraklou/Recipe-app">
<button className='btn2'>Git Rep</button>
</a>
<button className='btn2'>Demo</button>
</div> */
}