import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import Link from 'next/link';
import { services_aqcare_url } from '../data/urls.data';

export default function OurConcept(props) {
  return (
    <div className='lg:mt-5 mt-2'>
      <div className='flex  items-center content-center justify-center '>
        <div className=' flex font-themefont lg:text-5xl md:text-2xl text-2xl text-primary text-center lg:mt-5 mt-2 '>
          Our Concept
        </div>
      </div>
      <div className=' flex-center font-themefont lg:text-2xl md:text-xl text-sm text-black text-center items-center  '>
        {/* {props.section2content} */}
        <div dangerouslySetInnerHTML={{ __html: props.section2content }}></div>
      </div>

      <div className='mx-auto w-3/4 lg:w-1/2 mt-10  md:w-3/5 '>
        <img src={props.section2image1} className='self-center' />
      </div>
      <div className='mx-auto w-3/4 lg:w-1/2 mt-10  md:w-3/5 '>
        <img src={props.section2image2} className='self-center' />
      </div>
      <a href={services_aqcare_url}>
        <div className='flex mt-10 justify-center cursor-pointer'>
          <div className='lg:w-56 w-32  md:w-40 bg-500 rounded sm:rounded-lg hover:bg-600 text-center text-white lg:py-4 md:py-2 text-100 text-2xl text-bold   font-themefont mb-10'>
            Explore
          </div>
        </div>
      </a>
    </div>
  );
}
