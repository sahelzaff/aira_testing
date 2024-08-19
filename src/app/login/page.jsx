// src/app/login/page.js
"use client";
import React, { useState } from 'react';
import assets from '../../../public/assets/assets';
import './login.css';
import { toast } from 'react-hot-toast';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please fill in both fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',  // Include credentials in the request
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Login Successful');
        // Handle successful login (e.g., redirect to another page)
      } else {
        toast.error(data.message || 'Please Check Your Email and Password');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <main className='max-w-screen-2xl h-screen bg-[#f4f4f4]'>
      <div className='w-full grid place-items-center h-full'>
        <div className='w-4/6 h-5/6 bg-white rounded-xl shadow-xl flex flex-row'>
          <div className='w-1/2'>
            <div className='absolute z-10 mt-12 ml-6'>
          <div><img src={assets.Logo_New2} className='w-40 mx-auto' alt="" srcset="" /></div>
              <h1 className='font-outfit text-6xl font-bold text-left -mb-5'>
                New <span className='text-[#FFFDD0ff]'>here?</span>
              </h1>
              <h1 className='font-outfit text-4xl text-center font-bold'>
                Create an account and <span className='text-[#ff7f50] text-6xl'><br />Join us today!</span>
              </h1>
              <div className='mt-8 ml-28'>
                <button
                  className='text-center mx-auto font-bold font-montserrat text-lg border-[2px] border-white hover:bg-transparent transition-all duration-300 ease-in-out  bg-white px-10 py-1'
                  onClick={() => window.location.href = '/register'}
                >
                  Register
                </button>
              </div>
            </div>
            <div className='background'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className='w-1/2'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
              <h1 className='font-outfit text-4xl text-center font-semibold mb-6 tracking-wider'>SIGN IN</h1>
              <div className='flex justify-center items-center gap-6 '>
              <img src={assets.facebook} className=' z-10 w-10 rounded-full hover:scale-105 transition duration-200 ease-in-out cursor-pointer' alt="" />
                <img src={assets.google} className=' w-10 rounded-full hover:scale-105 transition duration-200 ease-in-out cursor-pointer' alt="" />
              </div>
              <div className='flex flex-col gap-6'>
                <input
                  type="email"
                  placeholder='Email id'
                  className='border-b-[1px] border-[#d3d3d3] font-montserrat pt-3 text-lg px-1 w-80 active:border-b-2'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder='Password'
                  className='border-b-[1px] border-[#d3d3d3] font-montserrat pt-3 text-lg px-1 w-80 active:border-b-2'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className='mt-[-1rem] font-poppins text-sm text-right text-blue-700 hover:text-black'>
                  <a href="">Forgot Password?</a>
                </div>
                <div className='mx-auto'>
                  <button
                    onClick={handleSubmit}
                    className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-[#ffffff] h-14 w-64 border text-left p-3 text-black text-xl font-bold rounded-lg mt-5 font-montserrat overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
