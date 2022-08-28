import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import "../styles/About.css";
import mee from '../Assets/project-Pic/currency.png'
import './styles/Crypto.css'
import {useNavigate} from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai'

const CryptoDetails = () => {

    const navigate = useNavigate();

    return (
        <div className='mainDiv'>
                 <img src={mee} style={{width: "98vw",height: '500px'}}/>
                 <div className='category'>
                    <Typography  variant='h3'  fontFamily="Montserrat">
                        Crypto Exchange
                    </Typography>
                 <Typography color={"#db6400"} fontFamily="Montserrat" variant='h5'>
                    React/Material-Ui
                </Typography>
                 </div>
            <div className='backContainer'>
            </div>
        <Grid container className='container'p={2}>
        <Container maxWidth="lg">
           <Grid container spacing={6} sx={{display:{xs:"block",md:"flex"},justifyContent:"center",alignItems:"center"}}>
                <Grid item xs={12}>
                <AiOutlineArrowLeft color='black' style={{fontSize: '30px',cursor: 'pointer'}} onClick={() => navigate(-1)}/>
                <Typography fontFamily="Montserrat" color={"#db6400"} fontWeight={600} variant="h6">
                        Project 
                    </Typography>
                    <Typography variant="h2" fontFamily="Montserrat" color={"#111111"} fontWeight={600} >
                        Overview
                        </Typography>
                    <Typography fontFamily="Montserrat" color={"#db6400"} fontWeight={600} variant="h6" sx={{display:'flex',alignItems:'center'}}>
                      Description:
                   </Typography>
                   <Typography fontFamily="Montserrat" color={"#010201"} mb={3}>
                    This React app This program has the ability to go online for any currency available on the market.
                    It also has a weekly monthly and annual daily chart of each currency of inventory.The program also has the ability to show trended currencies
                    </Typography>
               <div className='btnContainerF'>
                   <a className='gitLink' href="https://github.com/Mohammad-pesaraklou/currency-land">
                   <Button variant="contained">Git Rep</Button>
                   </a>
                   <a className='gitLink' href="https://currencylandate.netlify.app/">
                    <Button variant="contained">Demo</Button>
                    </a>
               </div> 
                </Grid>

           </Grid>
        </Container>
        </Grid>
        </div>
    );
};

export default CryptoDetails;