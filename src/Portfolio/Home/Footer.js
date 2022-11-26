import React from 'react';

const Footer = () => {
  return (
    <div className='py-6 text-center'>
      <h2 className='text-white text-xl font-bold'>@ copyright jasim  {(new Date().getFullYear())}</h2>
    </div>
  );
};

export default Footer;