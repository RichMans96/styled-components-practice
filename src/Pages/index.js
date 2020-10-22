import React, { useState } from 'react';
import HeroSection from '../Components/HeroSection';
import Navbar from '../Components/Navbar';
import Services from '../Components/services';
import Sidebar from '../Components/Sidebar';
import InfoSection from '../InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../InfoSection/Data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
        </>
    );
};

export default Home;
