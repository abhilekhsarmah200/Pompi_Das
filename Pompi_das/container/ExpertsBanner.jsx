import Head from 'next/head';
import React from 'react';

export default function ExpertsBanner(props) {
  return (
    <div>
      <div
        className='lg:bg-cover bg-cover  w-full lg:py-32 py-8'
        style={{ backgroundImage: `url(${props.homepagebanner})` }}
      >
        <div className=' lg:py-40 py-8  lg:text-6xl text-lg text-white lg:ml-10 ml-2 text-bold'>
          Sustainability Experts
        </div>
      </div>
      {/* <img 
        src="https://atquest2.b-cdn.net/atquest-b2b/SustainabilityExperts/SustainabilityExpertsbanner.jpg"
        class="lg:w-full "
      /> */}
    </div>
  );
}
