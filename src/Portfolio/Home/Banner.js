import React, { useCallback } from 'react';
import { BsFacebook } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";


import './Banner.css'
import { Link } from 'react-scroll';

const Banner = () => {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }


  return (
    <div className='banner-container'>

      <div className="px-12 pt-20 p-20" Id='home'>
        <div className=' sm:flex justify-center items-center'>

          <div className='sm:w-1/2'>
            <h2
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="1000"
              className="text-2xl font-bold text-amber-100"><span className='after-effect '>I'M Jasim</span>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString('Web Developer').pauseFor(2000).deleteAll().typeString('React Developer').pauseFor(2000).deleteAll().typeString('Coding Lover').pauseFor(2000).deleteAll().typeString('Mern Stack developer')
                    .start()
                }}
              />

            </h2>
            <p className='mt-5 text-xl text- bg-text text-teal-200	 font-bold tracking-wide'>
            I'm a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest! if you're looking for a developer to add to your team, I'd love to hear from you!
            </p>
         
            <Link 
            className="btn btn-accent"
            to='contact'
            smooth={true}
            spy={true}
            duration={1000}
            >contact me</Link>
         
          </div>
          <div className='sm:w-1/2 sm:flex'>

            <div className='container svg-style'>
              <motion.svg
                width="300"
                height="300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 300"
                className="icon"
              >
                <motion.path
                  d="M187.2 56.25A18.75 18.75 0 0 0 168.75 75.3V187.5c0 10.707 -8.043 18.75 -18.75 18.75s-18.75 -8.043 -18.75 -18.75a18.75 18.75 0 0 0 -19.05 -18.975A18.75 18.75 0 0 0 93.75 187.5c0 30.844 25.407 56.25 56.25 56.25 29.268 0 53.381 -22.97 55.782 -51.675a18.75 18.75 0 0 0 0.47 -4.275v-112.5A18.75 18.75 0 0 0 187.2 56.25z"
                  width=""
                  variants={icon}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    default: { duration: 3, ease: "easeInOut" },
                    fill: { duration: 3, ease: [1, 0, 0.8, 1] }
                  }}
                />
              </motion.svg>
            </div>


            <div
              data-aos="fade-down"
              data-aos-delay="500"
              data-aos-duration="3000"
              className='mt-4 ancor-tag grid sm:grid-cols-1 grid-cols-3 bg-white shadow-lg rounded px-2 py-2'>

              <h2 className='w-50 mx-auto'><a href="https://www.facebook.com/jasim4148/" target="_blank"><BsFacebook className='text-5xl ' /></a></h2>

              <h2 className='w-50 mx-auto'><a href="https://www.linkedin.com/in/jasim-ahmed-838a24242/" target="_blank"><AiFillLinkedin className='text-5xl ' /></a></h2>

              <h2 className='w-50 mx-auto'><a href="https://github.com/Jasimahmedq2" target="_blank"><AiFillGithub className='text-5xl ' /></a></h2>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;