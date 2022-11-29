import Head from 'next/head';
import React from 'react';
import WhyUs from '../components/WhyUS';

export default function HomeWhyUs(props) {
  return (
    <div className='lg:mt-5 mt-2'>
      <div className='flex  items-center content-center justify-center'>
        <div className=' flex font-themefont lg:text-5xl text-2xl text-primary text-center lg:mt-6 mt-2'>
          Why Us
        </div>
      </div>
      <div className='flex  items-center content-center justify-center'>
        <WhyUs section3image={props.section3image} />
      </div>
      <div className='flex-center font-themefont lg:text-2xl text-sm text-black text-center  lg:mt-20 mt-8 '>
        {/* {props.section3content} */}
        <div dangerouslySetInnerHTML={{ __html: props.section3content }}></div>
      </div>

      <div className='mx-auto lg:mt-10 mt-5 pt-2  lg:w-3/4 w-6/8 '>
        <img src={props.section4image} />
      </div>

      <div className='mx-auto mt-10 pt-2  lg:w-3/4 w-6/8'>
        <img src={props.section5image} />
      </div>

      <div className='mx-auto mt-10 pt-2  lg:w-3/4 w-6/8'>
        <img src={props.section6image} />
      </div>
    </div>
  );
}
