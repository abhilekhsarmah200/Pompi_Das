import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import Card from '../components/Card';
import Vision from '../components/Vision';
import Mision from '../components/Mision';

export default function WhatOurPurpose(props) {
  return (
    <div className=' mx-4   pt-1 xl:pt-6'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,300;1,400;1,500;1,600&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <div className='flex   lg:mx-auto h-14 lg:h-32  justify-center '>
        <div
          id='Whats-our-purpose'
          className=' flex font-themefont lg:text-6xl text-2xl text-primary text-center mt-3 lg:mb-10 '
        >
          {/* {props.section3title} */}
          <div dangerouslySetInnerHTML={{ __html: props.section3title }}></div>
        </div>
      </div>
      <img src={props.section3image} className='lg:w-4/5 lg:mx-auto ' />
    </div>
  );
}
