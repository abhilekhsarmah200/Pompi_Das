import Head from 'next/head';
import React from 'react';

export default function BusinessesBanner(props) {
  return (
    <div>
      <div className='z-5 absolute  w-full'>
        <div className=' flex-1 text-white lg:text-6xl text-xl mx-auto font-themefont font-extrabold text-center pt-12 '>
          Businesses
        </div>
      </div>
      <img src={props.homepagebanner} className='lg:w-full ' />
    </div>
  );
}
