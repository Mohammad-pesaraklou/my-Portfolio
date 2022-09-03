import React from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import './styles/Contact.css'
//icons
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { RiContactsLine } from 'react-icons/ri';
//resume
import docL from '../Assets/Resume/Nresume.pdf'
//styles
import styles from './styles/Contact.module.css';

function Contact() {
    return (
        <Container maxWidth="lg" sx={{minHeight: '100vh',position: 'relative'}} name="contact">
            <Grid container mt={8}>
            <Grid item xs={12} sx={{display:"flex",alignItems:"center"}}>
            <Typography variant="h3" mb={2} fontFamily='Quicksand' className='textContact'>
                Contact
            </Typography>
            </Grid>
            <Grid item xs={12} sx={{display:"flex",alignItems:"center"}}>
            <Typography variant="h5" mb={2} fontFamily='Quicksand' className='contactText'>
                // Submit the form below or shoot me an email - mhmdpsr6@gmail.com
            </Typography>
            </Grid>
            <Grid item xs={12}>
                <form style={{display: 'flex',flexDirection: 'column',gap: '15px'}} method='POST' action='https://getform.io/f/d1b962e6-e339-4a80-a114-1bef68f772ec'>
                    <TextField label={
                        <Typography color="warning" variant="h5">
                            Name
                        </Typography>
                    } variant="outlined" name='name' type="text" color="warning" sx={{background: '#cecece'}}/>
                    <TextField label={
                        <Typography color="warning" variant="h5">
                            Email
                        </Typography>
                    } variant="outlined" name='email' type="email" color="warning" sx={{background: '#cecece'}}/>
                    <TextField label={
                        <Typography color="warning" variant="h5">
                           Message
                        </Typography>
                    } variant="outlined" name='text' type="message" color="warning" sx={{background: '#cecece'}}
                    multiline
                    rows={6}
                    />
                    <div style={{display: 'flex',justifyContent: 'center',alignItems:'center'}}>
                  <button className='contactBtn'>Let's collaborate</button>
                    </div>
                </form>
            </Grid>
            <Grid item xs={12} mt={5} sx={{position: 'absolute',bottom: 4,display:{xs:'block',lg: 'none'}}}>
              
                <div style={{display: 'flex',justifyContent: 'space-evenly',width: '90vw'}}>
                         <a href="https://www.instagram.com/_.mhwmd6" className={styles.links} >
                            <FaInstagram fontSize="30px" color='#dc2743'/> 
                            <Typography color={"#cecece"} variant="subtitle1" fontFamily='Quicksand'>
                                Instagram
                            </Typography>
                        </a>
                        <a href="https://github.com/Mohammad-pesaraklou" className={styles.links} target="_blank">
                          <FaGithub fontSize="30px" color={"#6c6565"}/>
                          <Typography color={"#cecece"} variant="subtitle1" fontFamily='Quicksand'>
                                github
                        </Typography>
                        </a>
                        <a href="mailto: mhmdpsr6@gmail.com" className={styles.links} >
                          <HiOutlineMail fontSize="30px" color={"#3f9885"}/>
                          <Typography color={"#cecece"} variant="subtitle1" fontFamily='Quicksand'>
                                Email
                        </Typography>
                        </a>
                        <a href={docL} download  className={styles.links}>
                        <RiContactsLine fontSize="30px" color="#38495e"/> 
                        <Typography color={"#cecece"} variant="subtitle1" fontFamily='Quicksand'>
                                Resume
                        </Typography>
                        </a>

                </div>
                <div className={styles.copyR}>
                <Typography color="secondary" fontFamily='Quicksand'>
                &copy;
                This Portfolio Project Created in 8/28/2022
                </Typography>
                </div>
            </Grid>
         </Grid>
        </Container>
    );
}

export default Contact;


