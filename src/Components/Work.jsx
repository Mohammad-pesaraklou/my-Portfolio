import React from 'react';
import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
//styles
import './styles/Work.css';
import styled from '@emotion/styled';


const Work = () => {

    const navigate = useNavigate();


    return (
    <Container>
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
              <div className='currencyItem' style={{height:'300px'}}>
            
            </div>
                <Div>   
               <div style={{display: 'flex',alignItems:'center',flexWrap: 'wrap',justifyContent:"center"}}>
                        <Typography fontFamily="Montserrat" color={"#db6400"} fontWeight={600} variant="h6">
                        Project Name: 
                    </Typography>
                    <Typography fontFamily="Montserrat" color={"#010201"} fontWeight={600} >
                        currency Exchange
                        </Typography>
                    </div>
                    <Typography fontFamily="Montserrat" color={"#db6400"} fontWeight={600} variant="h6" sx={{display:'flex',alignItems:'center'}}>
                      Description:
                   </Typography>
                   <Typography fontFamily="Montserrat" color={"#010201"} mb={3}>
                        This web app created by React Js& React Context & material-ui & Chart js and react carousel
                    </Typography>
               <div className='btnContainer'>
                   <a className='gitLink' href="https://github.com/Mohammad-pesaraklou/currency-land">
                   <Button variant="contained">Git Rep</Button>
                   </a>
                   <a className='gitLink' href="https://currencylandate.netlify.app/">
                    <Button variant="contained">Demo</Button>
                    </a>
               </div> 
                </Div>  
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
                <div className='weblogItem' style={{height:"300px"}}>
                </div>
                <Div>
        
               <div style={{display: 'flex',alignItems:'center',flexWrap: 'wrap',justifyContent:"center"}}>
                        <Typography fontFamily="Montserrat" color={"#db6400"} fontWeight={600} variant="h6">
                        Project Name: 
                    </Typography>
                    <Typography fontFamily="Montserrat" color={"#010201"} fontWeight={600} >
                        WebLog
                        </Typography>
                    </div>
                    <Typography fontFamily="Montserrat" color={"#db6400"} fontWeight={600} variant="h6" sx={{display:'flex',alignItems:'center'}}>
                      Description:
                   </Typography>
                   <Typography fontFamily="Montserrat" color={"#010201"} mb={3}>
                        This web app created by React Js& Material-ui & hygraph & Graph Ql and 
                        React carousel
                    </Typography>
               <div className='btnContainer'>
                   <a className='gitLink' href="https://github.com/Mohammad-pesaraklou/webLog-app">
                   <Button variant="contained">Git Rep</Button>
                   </a>
                   <a className='gitLink' href="https://weblandatee.netlify.app">
                    <Button variant="contained">Demo</Button>
                    </a>
               </div> 
                </Div>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
             <div className='storItem' style={{height:'300px'}}>
              </div>
                <Div>
           
                    <div style={{display: 'flex',alignItems:'center',flexWrap: 'wrap',justifyContent:"center"}}>
                        <Typography fontFamily="Montserrat" color={"#db6400"} fontWeight={600} variant="h6">
                        Project Name: 
                    </Typography>
                    <Typography fontFamily="Montserrat" color={"#010201"} fontWeight={600} >
                        Store shop
                        </Typography>
                    </div>
                    <Typography fontFamily="Montserrat" color={"#db6400"} fontWeight={600} variant="h6" sx={{display:'flex',alignItems:'center'}}>
                      Description:
                   </Typography>
                   <Typography fontFamily="Montserrat" color={"#010201"} mb={3}>
                        This web app created by React Js& React Context and Pure Css 
                    </Typography>
               <div className='btnContainer'>
                   <a className='gitLink' href="https://github.com/Mohammad-pesaraklou/store-shop">
                   <Button variant="contained">Git Rep</Button>
                   </a>
                   <Button variant="contained">Demo</Button>
               </div> 
                </Div>
             
            </Grid>


            <Grid item xs={12} sm={6} lg={4}>
            <div className='signItem' style={{height:'300px'}}>
            </div>
                <Div>
                  <div style={{display: 'flex',alignItems:'center',flexWrap: 'wrap',justifyContent:"center"}}>
                        <Typography fontFamily="Montserrat" color={"#db6400"} fontWeight={600} variant="h6">
                        Project Name: 
                    </Typography>
                    <Typography fontFamily="Montserrat" color={"#010201"} fontWeight={600} >
                        Validation Form
                        </Typography>
                    </div>
                    <Typography fontFamily="Montserrat" color={"#db6400"} fontWeight={600} variant="h6" sx={{display:'flex',alignItems:'center'}}>
                      Description:
                   </Typography>
                   <Typography fontFamily="Montserrat" color={"#010201"} mb={3}>
                        This Form created by React js and Pure css 
                    </Typography>
               <div className='btnContainer'>
                   <a className='gitLink' href="https://github.com/Mohammad-pesaraklou/react-validation">
                   <Button variant="contained">Git Rep</Button>
                   </a>
                   <Button variant="contained">Demo</Button>
               </div> 
                </Div>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
            <div className='weather' style={{height:'300px'}}>
            </div>
                <Div>
                <div style={{display: 'flex',alignItems:'center',flexWrap: 'wrap',justifyContent:"center"}}>
                        <Typography fontFamily="Montserrat" color={"#db6400"} fontWeight={600} variant="h6">
                        Project Name: 
                    </Typography>
                    <Typography fontFamily="Montserrat" color={"#010201"} fontWeight={600} >
                        Weather App
                        </Typography>
                    </div>
                    <Typography fontFamily="Montserrat" color={"#db6400"} fontWeight={600} variant="h6" sx={{display:'flex',alignItems:'center'}}>
                      Description:
                   </Typography>
                   <Typography fontFamily="Montserrat" color={"#010201"} mb={3}>
                        This simple weather app by React Js & Material-ui and REST Api
                    </Typography>
                <div className='btnContainer'>
                    <a className='gitLink' href="https://github.com/Mohammad-pesaraklou/weather-app-react">
                    <Button variant="contained">Git Rep</Button>
                    </a>
                    <Button variant="contained">Demo</Button>
                </div> 
                </Div>
          
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
            <div className='recipeApp' style={{height:'300px'}}>
            </div>
                     <Div>
                <div style={{display: 'flex',alignItems:'center',flexWrap: 'wrap',justifyContent:"center"}}>
                        <Typography fontFamily="Montserrat" color={"#db6400"} fontWeight={600} variant="h6">
                        Project Name: 
                    </Typography>
                    <Typography fontFamily="Montserrat" color={"#010201"} fontWeight={600} >
                        Store shop
                        </Typography>
                    </div>
                    <Typography fontFamily="Montserrat" color={"#db6400"} fontWeight={600} variant="h6" sx={{display:'flex',alignItems:'center'}}>
                      Description:
                   </Typography>
                   <Typography fontFamily="Montserrat" color={"#010201"} mb={3}>
                        This web app created by React Js& React Context and Pure Css 
                    </Typography>
                <div className='btnContainer'>
                    <a className='gitLink' href="https://github.com/Mohammad-pesaraklou/Recipe-app">
                    <Button variant="contained">Git Rep</Button>
                    </a>
                    <a className='gitLink' href="https://currencylandate.netlify.app/">
                    <Button variant="contained">Demo</Button>
                    </a>
                </div> 
                    </Div>
            </Grid>
        </Grid>
    </Grid>
    </Container>
    );
};

const Div = styled.div`
    height: 230px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    transition: 0.3s;
    background-color: #d8d4e1;
    padding: 10px;
    &:hover{
        border-radius: 3px;
        transition: 0.6s;
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