import React from 'react';
import { BsFacebook } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import Typewriter from 'typewriter-effect';
import mern from '../../image/mern.jpg'
import { motion } from "framer-motion";


import './Banner.css'

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
    <div className="banner-container  px-12">


      <div className=' sm:flex justify-center items-center sm:relative'>

        <div className='sm:w-1/2'>
          <h2
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="1000"
          className="text-2xl font-bold text-white"><span className='after-effect'>I'M Jasim</span>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('web developer').pauseFor(2000).deleteAll().typeString('React developer').pauseFor(2000).deleteAll().typeString('Mern Stack developer')
                  .start()
              }}
            />

          </h2>
          <p className='mt-5 text-xl text-white'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('<strong>  Lorem ipsum dolor sit amet <span style="color: #27ae60;">  adipisicing elit. Aspernatur, exercitationem!</span>  Lorem ipsum dolor s!</strong>').start()
              }}
            />
          </p>


          <button
          data-aos="zoom-in-up"
          data-aos-delay="500"
          data-aos-duration="3000"


          className="btn btn-primary  absolute bottom-0">See More</button>
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
          className='mt-4 ancor-tag grid sm:grid-cols-1 grid-cols-3'>
            <h2 className='w-50 mx-auto'><a href="https://www.facebook.com/" target="_blank"><BsFacebook className='text-5xl ' /></a></h2>
            <h2 className='w-50 mx-auto'><a href="https://bd.linkedin.com/" target="_blank"><AiFillLinkedin className='text-5xl ' /></a></h2>
            <h2 className='w-50 mx-auto'><a href="https://github.com/" target="_blank"><AiFillGithub className='text-5xl ' /></a></h2>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;