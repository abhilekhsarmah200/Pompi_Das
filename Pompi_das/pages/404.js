import React from 'react';

export default function Errorpage() {
  return (
    <>
      <div>
        <div className='notfound grid  my-32 text-center justify-center'>
          <div>
            <img
              src='giphy.webp'
              className='w-auto cursor-pointer h-26 mx-auto'
            />
          </div>
          <div className='notfound-404'>
            <h1 className=''>404</h1>
          </div>
          <h2>We are sorry, Page not found!</h2>
          <a className='explorebtn2 p-2 rounded-lg' href='/'>
            Back to Home page
          </a>
        </div>
      </div>
    </>
  );
}
