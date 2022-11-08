import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { Navigation, Pagination } from 'swiper'
import { motion } from 'framer-motion'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'


import 'swiper/css';


const Project = () => {



  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])
  return (
    <div Id='service'>
      <div className='text-center text-xl font-bold text-primary about my-12'>
        <motion.h2
          whileHover={{ scale: 1.2 }}
         

        ><AiOutlineFundProjectionScreen className='text-8xl w-50 mx-auto mb-5' /></motion.h2>
        Recent I've build {projects.length}  projects</div>


      <div className='px-12 py-12 sm:grid-cols-1'>
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}

          slidesPerView={2}
          spaceBetween={30}
        
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}

          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {

            projects.map((project, index) => (


              <SwiperSlide key={index}>
                <div className="card lg:max-w-lg bg-slate-700 hover:shadow-lg border">
                  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="card-title text-accent text-xl font-bold">
                      {project.title}
                      <div className="badge badge-secondary">{index + 1}</div>
                    </h2>
                    <p className='text-sm text-yellow-100 font-bold'>{project?.description}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-outline btn-sm text-white" disabled={project.length === 0}>Preview</button>
                      <button className="btn btn-outline btn-sm text-white" disabled={project.length === 0}>screenshot</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>


            ))

          }
        </Swiper>
      </div>

    </div>
  );
};

export default Project;