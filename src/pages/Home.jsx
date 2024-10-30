import React from 'react';
import Hero from '../components/Hero';
import Latest_collection from '../components/Latest_collection';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <div>
            <Hero />
            <Latest_collection />
            <BestSeller />
            <OurPolicy />
            <Newsletter />
        </div>
    );
};

export default Home;