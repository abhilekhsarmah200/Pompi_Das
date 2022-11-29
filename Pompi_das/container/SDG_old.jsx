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
          <div className=' flex font-themefont lg:text-5xl text-xl text-primary text-center mt-3'>
            {/* {props.section5title} */}
            <div
              dangerouslySetInnerHTML={{ __html: props.section5title }}
            ></div>
          </div>
        </div>
        <div className=' flex font-themefont lg:text-2xl text-xs text-black text-center  lg:mx-20 mx-2'>
          {/* {props.section5content} */}
          <div
            dangerouslySetInnerHTML={{ __html: props.section5content }}
          ></div>
        </div>
        <div className=' flex-center font-themefont lg:text-2xl text-lg text-black text-center  lg:mt-8 mt-4'>
          HIGH POTENTIAL TO IMPACT
        </div>
        <div class='grid grid-rows-1 grid-flow-col gap-1 lg:mt-4 mt-2 lg:mx-32 mx-12 '>
          <div>
            <img
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_4.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
            />
          </div>
          <div>
            <img
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_7.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
            />
          </div>
          <div>
            <img
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_9.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
            />
          </div>
          <div>
            <img
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_11.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
            />
          </div>
          <div>
            <img
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_12.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
            />
          </div>
          <div>
            <img
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_13.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
            />
          </div>
          <div>
            <img
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_15.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
            />
          </div>
          <div>
            <img
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_17.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
            />
          </div>
        </div>

        <div className=' flex-center font-themefont lg:text-2xl text-lg text-black text-center  lg:mt-8 mt-4 '>
          INDIRECT POSITIVE IMPACT
        </div>

        <div class='grid grid-rows-1 grid-flow-col gap-1 lg:mt-4 mt-2 lg:mx-48 mx-20 lg:pb-32 pb-16 '>
          <div>
            <img
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_1.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
            />
          </div>
          <div>
            <img
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_2.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
            />
          </div>
          <div>
            <img
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_3.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
            />
          </div>
          <div>
            <img
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_6.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
            />
          </div>
          <div>
            <img
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_10.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
            />
          </div>
          <div>
            <img
              src='https://atquest2.b-cdn.net/atquest-b2b/LandingPage/SDG_14.png'
              className='lg:w-24 lg:h-24 w-8 h-8 '
            />
          </div>
        </div>
      </div>
    </div>
  );
}
