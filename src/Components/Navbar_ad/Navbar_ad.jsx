import React from 'react'
import assets from '../../../public/assets/assets'

const Navbar_ad = () => {
  return (
    <div className='w-full mt-[-1rem] mb-2'>
        <div className='flex flex-row items-center justify-center gap-5 border-t-2 border-gray-100 '>
            <div className='px-5 border-r-2 border-gray-100 rounded-lg'>
                <img src={assets.indian_wear} className=' w-[18rem] ' alt="" srcset="" />
            </div>
            <div className='px-5'>
                <img src={assets.Navbar_ad2} className=' w-[18rem]' alt="" srcset="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar_ad