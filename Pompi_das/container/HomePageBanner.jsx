import Head from 'next/head';
import React from 'react';
import TextScroll from '../components/TextScroll';

export default function HomePageBanner(props) {
  return (
    <div>
      <div className='z-5 absolute  w-full bg-opacity-0'>
        <div className='font-bold lg:mt-40 mt-16 xl:mt-56 flex '>
          <div className='flex-2 lg:w-1/2 w-1/3'></div>
          <div className='flex-1 lg:mr-4 lg:ml-20'>
            <TextScroll />
          </div>
        </div>
      </div>
      <img
        src={props.homepagebanner}
        className='bg-contain w-auto lg:w-auto  top-0 xl:w-screen'
      />
    </div>
  );
}
