import React from 'react';
import Navber from '../Navbar/Navber';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Project from './Project';
import Testimonials from './Testimonials';

const Home = () => {
  return (
   <>
   <Navber />
   <Banner />
   <About />
   <Project />
   <Testimonials />
   <Contact />
   </>
  );
};

export default Home;