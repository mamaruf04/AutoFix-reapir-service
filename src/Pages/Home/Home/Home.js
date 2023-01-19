import React from 'react';
import About from '../../About/About';
import Banner from "../Banner/Banner";
import Contact from '../Contact/Contact';
import Experts from '../Experts/Experts';
import Products from '../Products/Products';
import Services from "../Services/Services";

const Home = () => {
    return (
      <div className="container-xxl">
        <Banner></Banner>
        <About></About>
        <Services></Services>
        <Contact></Contact>
        <Products></Products>
        <Experts></Experts>
      </div>
    );
};

export default Home;