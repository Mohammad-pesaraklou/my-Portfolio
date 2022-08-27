import React from 'react';
//components
import MainPage from './MainPage';
import Navbar from './Navbar';

const Hero = () => {
    return (
        <div style={{background: "linear-gradient(to bottom right,#333333,#121212)"}}>
            <Navbar />
            <MainPage />
        </div>
    );
};

export default Hero;