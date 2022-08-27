import React from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import './styles/Contact.css'
function Contact() {
    return (
        <Container maxWidth="lg" sx={{minHeight: '100vh'}} name="contact">
            <Grid container mt={8}>
            <Grid item xs={12} sx={{display:"flex",alignItems:"center"}}>
            <Typography variant="h3" mb={2} fontFamily="Montserrat" className='textContact'>
                Contact
            </Typography>
            </Grid>
            <Grid item xs={12} sx={{display:"flex",alignItems:"center"}}>
            <Typography variant="h5" mb={2} fontFamily="Montserrat" className='contactText'>
                // Submit the form below or shoot me an email - mhmdpsr6@gmail.com
            </Typography>
            </Grid>
            <Grid item xs={12}>
                <form style={{display: 'flex',flexDirection: 'column',gap: '15px'}} method='POST' action='https://getform.io/f/d1b962e6-e339-4a80-a114-1bef68f772ec'>
                    <TextField label={
                        <Typography color="warning" variant="h6">
                            Name
                        </Typography>
                    } variant="outlined" name='name' type="text" color="warning"/>
                    <TextField label={
                        <Typography color="warning" variant="h6">
                            Email
                        </Typography>
                    } variant="outlined" name='email' type="email" color="warning"/>
                    <TextField label={
                        <Typography color="warning" variant="h6">
                           Message
                        </Typography>
                    } variant="outlined" name='text' type="message" color="warning"
                    multiline
                    rows={6}
                    />
                    <div style={{display: 'flex',justifyContent: 'center',alignItems:'center'}}>
                  <button className='contactBtn'>Let's collaborate</button>
                    </div>
                </form>
            </Grid>
            <Grid item xs={12} mt={5} sx={{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
            </Grid>
         </Grid>
        </Container>
    );
}

export default Contact;



// <input name='name' type="text"/>
//                     <input name='email' type="email"/>
//                     <input name='message' type="text"/>
//                     <button>submit</button>