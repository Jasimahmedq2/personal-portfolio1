import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { BsCodeSlash } from 'react-icons/bs'
import { FiDownloadCloud } from 'react-icons/fi'
import Reveal from 'react-reveal/Reveal';

import { motion } from "framer-motion";



import './About.css'
const About = () => {
  return (
    <div className='my-28 '>
   
      <div className='px-12 py-12 bg-base-300'>
        <h2 className='text-2xl font-bold after-effect'>About me</h2>
        <h3 className='text-xl font-bold '>I'm Jasim Web developer</h3>
        <h3 className='text-xl mt-8 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tenetur, iusto rerum, pariatur deleniti nostrum error nam in animi ipsa cupiditate numquam eligendi, expedita quo aliquid earum placeat similique laudantium!</h3>
      </div>
   
      

      <div className='w-5/6 mx-auto bg-base-100 z-10 rounded-md about-me' style={{ marginTop: '-2rem' }}>
        <h2 className='text-2xl text-primary font-bold text-center pb-4'>
          <BsCodeSlash className='w-50 mx-auto text-5xl' />
          Skills & Technology</h2>

        <div className='relative'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-12 py-6'>

              <motion.h2
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
               whileHover={{ scale: 1.1 }}
               transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className='flex lg:max-w-lg items-center justify-around font-bold text-4xl bg-base-300 shadow-xl rounded-lg'>
                <IoMdCheckmarkCircleOutline className='text-primary' />
                <span className=''>Javascript</span> </motion.h2>

              <motion.h2
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
               whileHover={{ scale: 1.1 }}
               transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className='flex lg:max-w-lg items-center justify-around font-bold text-4xl bg-base-300 shadow-xl rounded-lg'>
                <IoMdCheckmarkCircleOutline className='text-primary' />
                <span className=''>REACT JS</span> </motion.h2>
         


            <motion.h2
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
               whileHover={{ scale: 1.1 }}
               transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className='flex lg:max-w-lg items-center justify-around font-bold text-4xl bg-base-300 shadow-xl rounded-lg'>
              <IoMdCheckmarkCircleOutline className='text-primary' />
              <span className=''>NODE JS</span> </motion.h2>

            <motion.h2
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
             whileHover={{ scale: 1.1 }}
             transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className='flex lg:max-w-lg items-center justify-around font-bold text-4xl bg-base-300 shadow-xl rounded-lg'>
              <IoMdCheckmarkCircleOutline className='text-primary' />
              <span className=''>MONGODB</span> </motion.h2>

            <motion.h2
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
             whileHover={{ scale: 1.1 }}
             transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className='flex lg:max-w-lg items-center justify-around font-bold text-4xl bg-base-300 shadow-xl rounded-lg'>
              <IoMdCheckmarkCircleOutline className='text-primary' />
              <span className=''>EXPRESS JS</span> </motion.h2>

            <motion.h2
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
             whileHover={{ scale: 1.1 }}
             transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className='flex lg:max-w-lg items-center justify-around font-bold text-4xl bg-base-300 shadow-xl rounded-lg'>
              <IoMdCheckmarkCircleOutline className='text-primary' />
              <span className=''>HTML & CSS</span> </motion.h2>
          </div>
          <button className='flex justify-between items-center btn btn-primary text-xl font-bold absolute right-0 '><FiDownloadCloud className='mr-2 text-2xl' /> download CV</button>
        </div>
      </div>

    </div>
  );
};

export default About;