
import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ShowService from '../ShowService/ShowService';

import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
           <ShowService></ShowService>
        </div>
    );
};

export default Home;