import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { BsCodeSlash } from 'react-icons/bs'
import { FiDownloadCloud } from 'react-icons/fi'
import Reveal from 'react-reveal/Reveal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { motion } from 'framer-motion'
import react from '../../image/react.png'
import js from '../../image/js.png'
import node from '../../image/node.png'
import express from '../../image/express.png'
import mongodb from '../../image/mongodb.png'
import htmlCss from '../../image/html-css.jfif'



import './About.css'
const About = () => {
  return (
    <div className=''>

      <div className='px-12 py-16 bg-base-300'>
        <h2 className='text-2xl font-bold after-effect'>About me</h2>
        <h3 className='text-xl font-bold '>I'm Jasim Web developer</h3>
        <h3 className='text-xl mt-8 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tenetur, iusto rerum, pariatur deleniti nostrum error nam in animi ipsa cupiditate numquam eligendi, expedita quo aliquid earum placeat similique laudantium!</h3>
      </div>



      <div className='w-5/6 mx-auto bg-base-100 z-10 rounded-md about-me' style={{ marginTop: '-2rem' }}>
        <h2 className='text-2xl text-primary font-bold text-center pb-16'>
          <BsCodeSlash className='w-50 mx-auto text-5xl' />
          Skills & Technology</h2>

        <div className='relative'>

          <Tabs>
            <TabList className="tabssm:space-x-4 -top-20 left-0 text-xl font-bold">
              <Tab className="tab tab-bordered">Skills</Tab>
              <Tab className=" tab tab-bordered ">service</Tab>
            </TabList>

            <TabPanel>


              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-12 py-6'>
                <div className='effect-container'>
                  <h2
                    data-aos="fade-down"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    data-aos-easing="ease-in-out"

                    className='flex lg:max-w-lg items-center justify-around font-bold text-4xl bg-base-300 shadow-xl rounded-lg'>
                    <IoMdCheckmarkCircleOutline className='text-primary' />
                    <span className=''>React</span> </h2>
                    <img src={react} alt="img" />
                </div>
                <div className='effect-container'>
                  <h2
                    data-aos="fade-down"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    data-aos-easing="ease-in-out"

                    className='flex lg:max-w-lg items-center justify-around font-bold text-4xl bg-base-300 shadow-xl rounded-lg'>
                    <IoMdCheckmarkCircleOutline className='text-primary' />
                    <span className=''>Javascript</span> </h2>
                    <img src={js} alt="img" />
                </div>
                <div className='effect-container'>
                  <h2
                    data-aos="fade-down"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    data-aos-easing="ease-in-out"

                    className='flex lg:max-w-lg items-center justify-around font-bold text-4xl bg-base-300 shadow-xl rounded-lg'>
                    <IoMdCheckmarkCircleOutline className='text-primary' />
                    <span className=''>Node js</span> </h2>
                    <img src={node} alt="img" />
                </div>
                <div className='effect-container'>
                  <h2
                    data-aos="fade-down"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    data-aos-easing="ease-in-out"

                    className='flex lg:max-w-lg items-center justify-around font-bold text-4xl bg-base-300 shadow-xl rounded-lg'>
                    <IoMdCheckmarkCircleOutline className='text-primary' />
                    <span className=''>Mongodb</span> </h2>
                    <img src={mongodb} alt="img" />
                </div>
                <div className='effect-container'>
                  <h2
                    data-aos="fade-down"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    data-aos-easing="ease-in-out"

                    className='flex lg:max-w-lg items-center justify-around font-bold text-4xl bg-base-300 shadow-xl rounded-lg'>
                    <IoMdCheckmarkCircleOutline className='text-primary' />
                    <span className=''>Express js</span> </h2>
                    <img src={express} alt="img" />
                </div>
                <div className='effect-container'>
                  <h2
                    data-aos="fade-down"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    data-aos-easing="ease-in-out"

                    className='flex lg:max-w-lg items-center justify-around font-bold text-4xl bg-base-300 shadow-xl rounded-lg'>
                    <IoMdCheckmarkCircleOutline className='text-primary' />
                    <span className=''>html & css</span> </h2>
                    <img src={htmlCss} alt="img" />
                </div>


              </div>


            </TabPanel>
            <TabPanel>
              <div
                data-aos="fade-up"
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 py-2'>
                <motion.div

                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="card lg:max-w-lg bg-base-200 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Front-End development</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                  </div>
                </motion.div>

                <motion.div

                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="card lg:max-w-lg bg-base-300 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Back-End development</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                  </div>
                </motion.div>

                <motion.div

                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="card lg-max-w-lg bg-base-200 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">full-Stack development</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                  </div>
                </motion.div>
              </div>
            </TabPanel>
          </Tabs>

          <button className='flex justify-between items-center btn btn-primary text-xl font-bold absolute right-0 '><FiDownloadCloud className='mr-2 text-2xl' /> download CV</button>
        </div>
      </div >

    </div >
  );
};

export default About;