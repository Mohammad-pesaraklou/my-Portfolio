import React from 'react';

//components
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Skills from './Skills';
import Work from './Work';

const MainPage = () => {
    return (
        <div>
            <Banner />
            <About />
            <Skills />
            <Work />
            <Contact />
        </div>
    );
};

export default MainPage;