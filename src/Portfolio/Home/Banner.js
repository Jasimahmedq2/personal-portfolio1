import React from 'react';
import Typical from 'react-typical';

const Banner = () => {
  return (
    <div className="hero  bg-base-200 px-12">
    <div className="hero-content flex ">

      <div>
        <i className="text-5xl font-bold">Hello, I'M 
        <Typical
        steps={['J A S I M', 1000, 'web  developer']}
        loop={2}
        wrapper="p"
      />
        </i>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button className="btn btn-primary">See More</button>
      </div>
      <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
    </div>
  </div>
  );
};

export default Banner;