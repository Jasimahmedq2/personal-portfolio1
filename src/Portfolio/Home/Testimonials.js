import React from 'react';
import { MdOutlineRateReview } from 'react-icons/md'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import './Testimonials.css'
const Testimonials = () => {
  return (
    <div className='py-8 px-12'>

      <div className='text-center '>
        <h2 className='text-natural font-bold text-xl mt-2'>
          <MdOutlineRateReview className='text-6xl text-primary w-50 mx-auto' />
          <span className='shadow-xl rounded-lg about'>testimonials</span> </h2>
        <h2 className='text-2xl text-primary font-bold mt-10 flex items-center'>what say our client <AiFillQuestionCircle /></h2>
      </div>

          <div className='text-center slidebar'>

            <div className="w-8/5" style={{
              borderLeft: '5px solid #1C6EA4'
            }}>
              <div className="avatar" style={{ marginTop: '-3rem' }}>
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-300 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <div className=" ">
                <h2 className="text-3xl text-natural font-bold">jasim ahmed</h2>
                <i className='text-xl text-natural font-bold'>If a dog chews shoes whose shoes does he choose Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, aliquid. </i>
              </div>
          </div>
          </div>

    </div>
  );
};

export default Testimonials;