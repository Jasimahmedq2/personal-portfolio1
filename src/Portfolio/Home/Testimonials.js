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
    <div className='py-8 px-12 main-container'>

    <div className='text-center '>
      <h2 className='text-natural font-bold text-xl mt-2'>
        <MdOutlineRateReview className='text-8xl text-secondary w-50 mx-auto mb-5' />
        <span className='shadow-xl rounded-lg about text-black'>testimonials</span> </h2>
      <h2 className='text-2xl text-accent font-bold mt-10 flex items-center'>what say our client <AiFillQuestionCircle /></h2>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5'>
      {
        reviews.map((review, index) => (
          <div className='text-center slidebar'>

          <div className="lg:max-w-lg" style={{
            borderLeft: '5px solid #1C6EA4'
          }}>
            <div className="avatar" style={{ marginTop: '-1rem' }}>
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-300 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <div className=" ">
              <h2 className="text-3xl text-natural font-bold text-accent">{review.title}</h2>
              <i className='text-xl text-natural font-bold text-black'>{review.description}</i>
            </div>
          </div>
          </div>
        ))
      }
    </div>
    </div> 

  );
};

export default Testimonials;