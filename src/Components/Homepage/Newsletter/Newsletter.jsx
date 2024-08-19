"use client";
import React from 'react';
import assets from '../../../../public/assets/assets';

const Newsletter = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-fixed bg-center bg-cover " style={{ backgroundImage: `url(${assets.carousel_test2})` }}>
    <div className="absolute inset-0 bg-white opacity-70"></div>
    <div className="relative z-10 text-center p-8 bg-white bg-opacity-70 rounded-lg shadow-lg">
      <h1 className="text-5xl font-bold mb-1 font-outfit ">Subscribe to our <span className='text-websitepink'>Newsletter</span></h1>
      <p className="mb-8 font-poppins font-normal">Stay informed with the latest news, exclusive offers, and special events.</p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <input type="email" placeholder="Enter your email address" className="p-3 border-b-2 border-gray-300  w-full sm:w-auto" />
        <button className="w-28 h-10 font-montserrat font-medium  bg-websitepink text-black rounded-lg">Submit</button>
      </div>
    </div>
  </div>
  )
}

export default Newsletter