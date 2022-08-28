import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import mee from '../Assets/project-Pic/currency.png'
import './styles/Crypto.css'
import {useNavigate} from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import pic1 from '../Assets/project-Pic/sign-up.png'

const FormDetails = () => {

    const navigate = useNavigate();

    return (
        <div className='mainDiv'>
                 <img src={pic1} style={{width: "98vw",height: '500px'}}/>
                 <div className='category'>
                    <Typography variant='h3'  fontFamily="Montserrat">
                        Validation Form
                    </Typography>
                 <Typography color={"#db6400"} fontFamily="Montserrat" variant='h5'>
                    React/Pure Css
                </Typography>
                 </div>
            <div className='backContainer'>
            </div>
        <Grid container className='container'p={2}>
        <Container maxWidth="lg">
           <Grid container spacing={6} sx={{display:{xs:"block",md:"flex"},justifyContent:"center",alignItems:"center"}}>
                <Grid item xs={12}> 
                <AiOutlineArrowLeft color='black' style={{fontSize: '30px',cursor: 'pointer'}} onClick={() => navigate(-1)}/>
                <Typography fontFamily="Montserrat" color={"#db6400"} mt={2} fontWeight={600} variant="h6">
                        Project 
                    </Typography>
                    <Typography variant="h2" fontFamily="Montserrat" color={"#111111"} fontWeight={600} >
                        Overview
                        </Typography>
                    <Typography fontFamily="Montserrat" color={"#db6400"} fontWeight={600} variant="h6" sx={{display:'flex',alignItems:'center'}}>
                      Description:
                   </Typography>
                   <Typography fontFamily="Montserrat" color={"#010201"} mb={3}>
                   This react registration form contains the identity of the name of the two-step password email and privacy policy and shows the user the error of the hara at the same time
                    </Typography>
                    <Grid item xs={12}>
                    <div className='btnContainerF'>
                        <a className='gitLink' href="https://github.com/Mohammad-pesaraklou/react-validation">
                        <Button variant="contained">Git Rep</Button>
                        </a>
                        <a className='gitLink' href="#">
                            <Button variant="contained">Demo</Button>
                            </a>
                    </div> 
                    </Grid>
                </Grid>

           </Grid>
        </Container>
        </Grid>
        </div>
    );
};

export default FormDetails;

