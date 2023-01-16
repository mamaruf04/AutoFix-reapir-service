import React from 'react';
import About from '../../About/About';
import Banner from "../Banner/Banner";
import Experts from '../Experts/Experts';
import Services from "../Services/Services";

const Home = () => {
    return (
      <div className="container-xxl">
        <Banner></Banner>
        <About></About>
        <Services></Services>
        <Experts></Experts>
      </div>
    );
};

export default Home;