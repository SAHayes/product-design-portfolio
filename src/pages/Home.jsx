import React from 'react';
import Navigation from '../components/Navigation/Navigation.jsx';
import HomeHero from '../components/Home/HomeHero';
import HomeProjects from '../components/Home/HomeProjects';
import Footer from '../components/Footer/Footer.jsx';

const Home = () => {
    return (
        <>
            <Navigation page="work" />
            <HomeHero />
            <HomeProjects />
            <Footer />
        </>
    );
}

export default Home;