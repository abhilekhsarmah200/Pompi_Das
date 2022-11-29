import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import OurPrincipleCard from '../components/OurPrincipleCard';
// import Card from "../components/Card";

export default function SDG(props) {
  return (
    <div
      className='bg-cover bg-no-repeat'
      style={{ backgroundImage: `url(${props.section5image})` }}
    >
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,300;1,400;1,500;1,600&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <div className=' '>
        <div className='flex  lg:h-32  items-center content-center justify-center'>
          <div className=' flex font-themefont lg:text-5xl text-xl text-black font-secondary text-center mt-3'>
            {/* {props.section5title} */}
            <div
              dangerouslySetInnerHTML={{ __html: props.section5title }}
            ></div>
          </div>
        </div>
        <div
          className={`px-2 md:px-8 w-full flex flex-col justify-center content-center items-center`}
        >
          <div className=' flex font-secondary font-medium lg:text-13 text-xs text-black text-center mx-2'>
            {/* {props.section5content} */}
            <div
              dangerouslySetInnerHTML={{ __html: props.section5content }}
            ></div>
          </div>
        </div>
        <div className=' flex-center font-secondary font-medium lg:text-2xl text-lg text-black text-center  lg:mt-8 mt-4'>
          HIGH POTENTIAL TO IMPACT
        </div>
        <div class='grid grid-rows-1 grid-flow-col gap-1 lg:mt-4 mt-2 lg:mx-32 mx-12 '>
          <div>
            <img
              title='Sustainable Development Goal 4'
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_4.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
              alt='Sustainable Impact - Quality Education'
            />
          </div>
          <div>
            <img
              title='Sustainable Development Goal 7'
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_7.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
              alt='Sustainable Impact - Affordable and Clean Energy'
            />
          </div>
          <div>
            <img
              title='Sustainable Development Goal 9'
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_9.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
              alt='Sustainable Impact - Industry, Innovation and Infrastructure'
            />
          </div>
          <div>
            <img
              title='Sustainable Development Goal 11'
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_11.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
              alt='Sustainable Impact - Sustainable Cities and Communities'
            />
          </div>
          <div>
            <img
              title='Sustainable Development Goal 12'
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_12.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
              alt='Sustainable Impact - Responsible Consumption and Production'
            />
          </div>
          <div>
            <img
              title='Sustainable Development Goal 13'
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_13.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
              alt='Sustainable Impact - Climate Action'
            />
          </div>
          <div>
            <img
              title='Sustainable Development Goal 15'
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_15.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
              alt='Sustainable Impact - Life on Land'
            />
          </div>
          <div>
            <img
              title='Sustainable Development Goal 17'
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_17.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
              alt='Sustainable Impact - Partnerships to achieve the Goal'
            />
          </div>
        </div>

        <div className=' flex-center font-secondary font-medium lg:text-2xl text-lg text-black text-center  lg:mt-8 mt-4 '>
          INDIRECT POSITIVE IMPACT
        </div>

        <div class='grid grid-rows-1 grid-flow-col gap-1 lg:mt-4 mt-2 lg:mx-48 mx-20 lg:pb-32 pb-16 '>
          <div>
            <img
              title='Sustainable Development Goal 1'
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_1.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
              alt='Sustainable Impact - No Poverty'
            />
          </div>
          <div>
            <img
              title='Sustainable Development Goal 2'
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_2.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
              alt='Sustainable Impact - Zero Hunger'
            />
          </div>
          <div>
            <img
              title='Sustainable Development Goal 3'
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_3.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
              alt='Sustainable Impact - Good Health and Well-being'
            />
          </div>
          <div>
            <img
              title='Sustainable Development Goal 6'
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_6.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
              alt='Sustainable Impact - Clean Water and Sanitation'
            />
          </div>
          <div>
            <img
              title='Sustainable Development Goal 10'
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_10.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
              alt='Sustainable Impact - Reduced Inequality'
            />
          </div>
          <div>
            <img
              title='Sustainable Development Goal 14'
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_14.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
              alt='Sustainable Impact - Life Below Water'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
