import Head from 'next/head';
import React from 'react';

export default function ServiceBanner(props) {
  return (
    <div>
      <div className='z-5 absolute w-full'>
        <div className=' flex-1 text-white lg:text-6xl text-xl mx-auto font-themefont font-extrabold text-center lg:pt-64 pt-32 lg:mt-56 '>
          Services
        </div>
      </div>
      <img src={props.homepagebanner} className='lg:w-full ' />
    </div>
  );
}
