"use client"; // Add this directive at the top of the file
import React, { useState } from 'react';
import assets from '../../../public/assets/assets';
import '../login/login.css';
import { toast } from 'react-hot-toast';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Basic client-side validation
    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }
  
    const requestBody = {
      name,
      phoneNumber: phone,
      email,
      password
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        toast.success('User successfully registered!');
      } else {
        if (data.message.includes('E11000 duplicate key error')) {
          toast.error('User already exists. Please sign in.');
        } else {
          toast.error(data.message || 'Registration failed. Please try again.');
        }
        console.error('Error:', data);
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <main className='max-w-screen-2xl h-screen bg-[#f4f4f4]'>
        <div className='w-full grid place-items-center h-full'>
          <div className='w-4/6 h-5/6 bg-white rounded-xl shadow-xl flex flex-row'>
            <div className='w-1/2'>
              <div className='absolute z-10 mt-12 ml-2'>
              <div><img src={assets.Logo_New2} className='w-40 mx-auto' alt="" srcset="" /></div>
                <h1 className='font-outfit text-[45px] font-bold text-left -mb-5'>
                  Already a <span className='text-[#FFFDD0ff]'>Customer?</span>
                </h1>
                <h1 className='font-outfit text-3xl text-left font-bold'>
                  Sign In to Your account and <span className='text-[#ff7f50] text-6xl'><br />Keep Shopping!</span>
                </h1>
                <div className='mt-8 ml-28'>
                  <button className='text-center mx-auto font-bold font-montserrat text-lg border-[2px] border-white hover:bg-transparent transition-all duration-300 ease-in-out bg-white px-10 py-1'>
                    Sign In
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
                <h1 className='font-outfit text-4xl text-center font-bold mb-6 tracking-wider'>SIGN UP</h1>
                <div className='flex gap-6 justify-center items-center'>
                <img src={assets.facebook} className=' z-10 w-10 rounded-full hover:scale-105 transition duration-200 ease-in-out cursor-pointer' alt="" />
                <img src={assets.google} className=' w-10 rounded-full hover:scale-105 transition duration-200 ease-in-out cursor-pointer' alt="" />
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                  <input
                    type="text"
                    placeholder='Name'
                    className='border-b-[1px] border-[#d3d3d3] font-montserrat pt-1 text-lg px-1 w-80 active:border-b-2'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    type="number"
                    placeholder='Phone Number'
                    className='border-b-[1px] border-[#d3d3d3] font-montserrat pt-1 text-lg px-1 w-80 active:border-b-2'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    placeholder='Email id'
                    className='border-b-[1px] border-[#d3d3d3] font-montserrat pt-1 text-lg px-1 w-80 active:border-b-2'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className='relative w-80'>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Password'
                      className='border-b-[1px] border-[#d3d3d3] font-montserrat pt-1 text-lg px-1 w-full active:border-b-2'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <span className='absolute right-2 top-2 cursor-pointer' onClick={togglePasswordVisibility}>
                      {showPassword ? (
                        <svg viewBox="0 0 24 24" fill="none" height='20' width='20'>
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <g id="style=linear">
                              <g id="eye-close">
                                <path id="vector" d="M15.6487 5.39489C14.4859 4.95254 13.2582 4.72021 12 4.72021C8.46997 4.72021 5.17997 6.54885 2.88997 9.71381C1.98997 10.9534 1.98997 13.037 2.88997 14.2766C3.34474 14.9051 3.83895 15.481 4.36664 16.0002M19.3248 7.69653C19.9692 8.28964 20.5676 8.96425 21.11 9.71381C22.01 10.9534 22.01 13.037 21.11 14.2766C18.82 17.4416 15.53 19.2702 12 19.2702C10.6143 19.2702 9.26561 18.9884 7.99988 18.4547" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path id="vector_2" d="M15 12C15 13.6592 13.6592 15 12 15M14.0996 9.85541C13.5589 9.32599 12.8181 9 12 9C10.3408 9 9 10.3408 9 12C9 12.7293 9.25906 13.3971 9.69035 13.9166" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path id="vector_3" d="M2 21.0002L22 2.7002" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" height='20' width='20'>
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <path d="M12 5C8.24261 5 5.43602 7.4404 3.76737 9.43934C2.51521 10.9394 2.51521 13.0606 3.76737 14.5607C5.43602 16.5596 8.24261 19 12 19C15.7574 19 18.564 16.5596 20.2326 14.5607C21.4848 13.0606 21.4848 10.9394 20.2326 9.43934C18.564 7.4404 15.7574 5 12 5ZM12 17C9.11334 17 6.74475 14.9133 5.23258 13C4.26263 11.8116 4.26263 10.1884 5.23258 9C6.74475 7.08671 9.11334 5 12 5C14.8867 5 17.2552 7.08671 18.7674 9C19.7374 10.1884 19.7374 11.8116 18.7674 13C17.2552 14.9133 14.8867 17 12 17ZM12 9C10.3465 9 9 10.3465 9 12C9 13.6535 10.3465 15 12 15C13.6535 15 15 13.6535 15 12C15 10.3465 13.6535 9 12 9ZM12 13C11.4482 13 11 12.5518 11 12C11 11.4482 11.4482 11 12 11C12.5518 11 13 11.4482 13 12C13 12.5518 12.5518 13 12 13Z" fill="#000000"></path>
                          </g>
                        </svg>
                      )}
                    </span>
                  </div>
                  <div className='relative w-80'>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder='Confirm Password'
                      className='border-b-[1px] border-[#d3d3d3] font-montserrat pt-1 text-lg px-1 w-full active:border-b-2'
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <span className='absolute right-2 top-2 cursor-pointer' onClick={toggleConfirmPasswordVisibility}>
                      {showConfirmPassword ? (
                        <svg viewBox="0 0 24 24" fill="none" height='20' width='20'>
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <g id="style=linear">
                              <g id="eye-close">
                                <path id="vector" d="M15.6487 5.39489C14.4859 4.95254 13.2582 4.72021 12 4.72021C8.46997 4.72021 5.17997 6.54885 2.88997 9.71381C1.98997 10.9534 1.98997 13.037 2.88997 14.2766C3.34474 14.9051 3.83895 15.481 4.36664 16.0002M19.3248 7.69653C19.9692 8.28964 20.5676 8.96425 21.11 9.71381C22.01 10.9534 22.01 13.037 21.11 14.2766C18.82 17.4416 15.53 19.2702 12 19.2702C10.6143 19.2702 9.26561 18.9884 7.99988 18.4547" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path id="vector_2" d="M15 12C15 13.6592 13.6592 15 12 15M14.0996 9.85541C13.5589 9.32599 12.8181 9 12 9C10.3408 9 9 10.3408 9 12C9 12.7293 9.25906 13.3971 9.69035 13.9166" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path id="vector_3" d="M2 21.0002L22 2.7002" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" height='20' width='20'>
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <path d="M12 5C8.24261 5 5.43602 7.4404 3.76737 9.43934C2.51521 10.9394 2.51521 13.0606 3.76737 14.5607C5.43602 16.5596 8.24261 19 12 19C15.7574 19 18.564 16.5596 20.2326 14.5607C21.4848 13.0606 21.4848 10.9394 20.2326 9.43934C18.564 7.4404 15.7574 5 12 5ZM12 17C9.11334 17 6.74475 14.9133 5.23258 13C4.26263 11.8116 4.26263 10.1884 5.23258 9C6.74475 7.08671 9.11334 5 12 5C14.8867 5 17.2552 7.08671 18.7674 9C19.7374 10.1884 19.7374 11.8116 18.7674 13C17.2552 14.9133 14.8867 17 12 17ZM12 9C10.3465 9 9 10.3465 9 12C9 13.6535 10.3465 15 12 15C13.6535 15 15 13.6535 15 12C15 10.3465 13.6535 9 12 9ZM12 13C11.4482 13 11 12.5518 11 12C11 11.4482 11.4482 11 12 11C12.5518 11 13 11.4482 13 12C13 12.5518 12.5518 13 12 13Z" fill="#000000"></path>
                          </g>
                        </svg>
                      )}
                    </span>
                  </div>
                  <button type="submit" className='text-center mx-auto font-bold font-montserrat text-lg border-[2px] border-white hover:bg-transparent transition-all duration-300 ease-in-out bg-white px-10 py-1'>
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
