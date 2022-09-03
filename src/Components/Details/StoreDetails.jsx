import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import mee from '../Assets/project-Pic/currency.png'
import './styles/Crypto.css'
import {useNavigate} from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import pic3 from '../Assets/project-Pic/store.png'

const StoreDetails = () => {

    const navigate = useNavigate();

    return (
        <div className='mainDiv'>
                 <img src={pic3} style={{width: "98vw",height: '500px'}}/>
                 <div className='category'>
                    <Typography mb={2} variant='h3'  fontFamily="Montserrat">
                        Store shop
                    </Typography>
                 <Typography color={"#db6400"} fontFamily="Montserrat" variant='h5'>
                    React/Material-Ui
                </Typography>
                 </div>
            <div className='backContainer'>
            </div>
        <Grid container className='container'p={2}>
           <Grid container>
                <Grid item xs={12}> 
                <AiOutlineArrowLeft color='black' style={{fontSize: '30px',cursor: 'pointer'}} onClick={() => navigate(-1)}/>
                <Typography mt={2} fontFamily="Montserrat" color={"#db6400"} fontWeight={600} variant="h6">
                        Project 
                    </Typography>
                    <Typography variant="h2" fontFamily="Montserrat" color={"#111111"} fontWeight={600} >
                        Overview
                        </Typography>
                    <Typography fontFamily="Montserrat" color={"#db6400"} fontWeight={600} variant="h5" sx={{display:'flex',alignItems:'center'}}>
                      Description:
                   </Typography>
                   <Typography variant="h6" fontFamily="Montserrat" color={"#010201"} mb={3}>
                   This web application, called The Shopping Cart Project, has features such as adding a product to the shopping cart, reducing and deleting and clearing.
                    </Typography>
               <div className='btnContainerF'>
                   <a className='gitLink' href="https://github.com/Mohammad-pesaraklou/store-shop">
                   <Button variant="contained">Git Rep</Button>
                   </a>
                   <a className='gitLink' href="https://storeshopate.netlify.app">
                    <Button variant="contained">Demo</Button>
                    </a>
               </div> 
                </Grid>

           </Grid>
        </Grid>
        </div>
    );
};

export default StoreDetails;

