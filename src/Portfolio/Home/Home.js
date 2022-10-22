import React from 'react';
import { Example } from '../axample/Example';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Project from './Project';
import Testimonials from './Testimonials';
import { BsWhatsapp } from 'react-icons/bs'
import { motion } from 'framer-motion'


const Home = () => {

  return (
    <div className='bg-base-300 '>
      <motion.div
        whileHover={{ scale: 1.2 }}
        className='fixed bottom-5 right-10 z-40'>
        <a

          href="https://wa.me/+8801794274148
        "target="_blank"><BsWhatsapp className='text-5xl' style={{ color: '#075E54' }} /></a>
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