import React, { useEffect, useState } from 'react';
import { MdOutlineRateReview, MdReviews } from 'react-icons/md'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web'

import 'swiper/css';

import './Testimonials.css'
const Testimonials = () => {
  const [reviews, setReviews] = useState([])


  useEffect(() => {
    fetch('message.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])
  return (
    <div className='py-8 px-12 main-container' Id='testimonials'>

    <div className='text-center '>
      <h2 className='text-natural font-bold text-xl mt-2'>
        <MdOutlineRateReview className='text-8xl text-secondary w-50 mx-auto mb-5' />
        <span className='shadow-xl rounded-lg about text-white'>testimonials</span> </h2>
      <h2 className='text-2xl text-accent font-bold mt-10 flex items-center'>what say our client <AiFillQuestionCircle /></h2>
    </div>

    <Swiper
    
     >
      {
        reviews.map((review, index) => (
          <SwiperSlide className='text-center slidebar '>

          <div className="" style={{
            borderLeft: '5px solid #1C6EA4',
            background: '#191d2b'
          }}>
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-300 ring-offset-2 relative z-40">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <div className="">
              <h2 className="text-3xl text-natural font-bold text-accent">{review.title}</h2>
              <i className='text-xl text-natural font-bold text-black'>{review.description}</i>
            </div>
          </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
    </div> 

  );
};

export default Testimonials;