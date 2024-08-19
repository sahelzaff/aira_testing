import React from 'react'
import assets from '../../../public/assets/assets'

const Footer = () => {
  return (
    <div className='bg-websitepink h-auto w-full'>
        <div className='pt-20 pb-10'>
            <div className='w-full flex flex-row justify-center items-center'>
                <div className='flex flex-col w-full justify-center items-center'>
                    <h1 className='font-outfit font-bold text-2xl mb-4 -mt-5'>Mumbai Store</h1>
                    <div className='flex flex-row items-center justify-center'>
                        <img src={assets.location_pin_pink} alt="" srcset="" className='w-16' />
                    <p className='font-poppins font-normal text-[14px] '>Shop 3, C wing, Indirayani Park, <br />Yadav Nagar, Badlapur East</p>
                    </div>   
                    <button className='w-36 h-8 mt-10 rounded-xl font-montserrat font-medium border-2 border-white hover:scale-105 transition duration-200 ease-in-out'>Get Directions</button>
                </div>
                <div className='flex flex-col w-full justify-center items-center'>
                    <h1 className='font-outfit font-bold text-2xl -mt-11'>Contact Us</h1>
                    
                    <div className='flex flex-col justify-start items-start'>
                    <div className='flex flex-row items-center justify-center'>
                        <img src={assets.call_pink} alt="" srcset="" className='w-16' />
                    <p className='font-poppins font-normal text-[14px] cursor-pointer'>+91 8779684348</p>
                    </div>   

                    <div className='flex flex-row items-center justify-center'>
                        <img src={assets.email_pink} alt="" srcset="" className='w-16' />
                    <p className='font-poppins font-normal text-[14px] cursor-pointer' >aarayalabel@gmail.com</p>
                    </div> 
                    </div>  


                </div>
                <div className='flex flex-col w-full justify-center items-center'>
                    <h1 className='font-outfit font-bold text-2xl -mt-4'>Others</h1>
                    <div className='pt-1 text-center'>
                    <p className='font-poppins font-normal text-[14px] cursor-pointer hover:text-gray-600'>My Account</p>
                    <p className='font-poppins font-normal text-[14px] cursor-pointer hover:text-gray-600'>Orders</p>
                    <p className='font-poppins font-normal text-[14px] cursor-pointer hover:text-gray-600'>Shipping & Delivery Policy</p>
                    <p className='font-poppins font-normal text-[14px] cursor-pointer hover:text-gray-600'>Return Policy</p>
                    <p className='font-poppins font-normal text-[14px] cursor-pointer hover:text-gray-600'>Terms & Conditions</p>
                    <p className='font-poppins font-normal text-[14px] cursor-pointer hover:text-gray-600'>Privacy Policy</p>
                    <p className='font-poppins font-normal text-[14px] cursor-pointer hover:text-gray-600'>Blogs</p>
                    </div>

                </div>
            </div>
                <div className='pt-10'>
                    <h1 className='font-outfit text-xl font-bold text-center'>Payment Methods</h1>
                    <div className='flex flex-row gap-10 items center justify-center'>
                        <img src={assets.cod} alt="" srcset="" loading='lazy' className='w-24 h-20' />
                        <img src={assets.upi} alt="" srcset="" loading='lazy' className='w-24 h-20' />
                        <img src={assets.visa} alt="" srcset="" loading='lazy' className='w-24 h-20' />
                        <img src={assets.master} alt="" srcset="" loading='lazy' className='w-24 h-20' />
                        <img src={assets.netbanking} alt="" srcset="" loading='lazy' className='w-24 h-20' />
                        <img src={assets.stripe} alt="" srcset="" loading='lazy' className='w-24 h-20' />
                    </div>
                </div>
            <h2 className='text-center font-poppins text-[14px] font-medium text-medium tracking-wider mt-8'>Copyright © 2024 Aira</h2>
        </div>
        
    </div>
  )
}

export default Footer