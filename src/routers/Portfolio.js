import React from 'react';
import About from '../component/About';

import Contact from '../component/Contact';
import Footer from '../component/Footer';
import Home from '../component/Home';
import Navbar from '../component/Navbar';
import Swipe from '../component/Swipe';
import Testimony from '../component/Testimonial';
import Works from '../component/Works';


const Portfolio = () => {
    return ( <div>
        <Navbar/>
        <Home/>
        <About/>
        <Works/>
        <Testimony/>
        
        <Contact/>
        <Footer/>
        <Swipe/>
        
        
        
        
        
        </div> );
}
 
export default Portfolio;