import React from 'react';
import { Example } from '../axample/Example';
import Navber from '../Navbar/Navber';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Project from './Project';
import Testimonials from './Testimonials';
import {BsWhatsapp} from 'react-icons/bs'
import {motion} from 'framer-motion'


const Home = () => {

  return (
    <div>
      <motion.div
      whileHover={{ scale: 1.2 }}
      className='fixed bottom-12 right-12 z-40'>
        <a
        
        href=" https://wa.me/01794274148" target="_blank"><BsWhatsapp className='text-6xl' style={{color: '#075E54'}}/></a>
      </motion.div>
    <Banner />
    <About />
    <Project />
    <Testimonials />

    <Contact />
   
   </div>

  );
};

export default Home;