import Head from 'next/head';
import React from 'react';

export default function SchoolsBanner() {
  return (
    <div>
      <div className='z-5 absolute  w-full'>
        <div className=' flex-1 text-white lg:text-6xl text-xl mx-auto font-themefont font-extrabold text-center pt-10 lg:pt-32'>
          Schools
        </div>
      </div>
      <img
        src='https://atquest2.b-cdn.net/atquest-b2b/Schools/Schoolsbanner.jpg'
        class='lg:w-full '
      />
    </div>
  );
}
