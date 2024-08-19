
import Footer from '@/Components/Footer/Footer'
import Bestsellers from '@/Components/Homepage/Bestsellers/Bestsellers'
import Categories from '@/Components/Homepage/Categories/Categories'
import Hero_Section from '@/Components/Homepage/Hero_section/Hero_Section'
import Instagram from '@/Components/Homepage/Instagram/Instagram'
import New_Arrivals from '@/Components/Homepage/New_Arrivals/New_Arrivals'
import Newsletter from '@/Components/Homepage/Newsletter/Newsletter'
import Outfit from '@/Components/Homepage/Outfit/Outfit'
import Reviews from '@/Components/Homepage/Reviews/Reviews'
import MainNavbar from '@/Components/Navbar/MainNavbar'
import Navbar_ad from '@/Components/Navbar_ad/Navbar_ad'
import Topbar from '@/Components/Topbar/Topbar'

import React from 'react'

const page = () => {
  return (
    <div>
      <Topbar/>
      <MainNavbar/>
      <Navbar_ad/>
      <Hero_Section/>
      <Categories/>
      <New_Arrivals/>
      <Instagram/>
      <Bestsellers/>
      <Outfit/>
      <Reviews/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default page