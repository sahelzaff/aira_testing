"use client";
import React from "react";
import { useEffect, useState } from 'react';
import assets from "../../../public/assets/assets";
import './navbar.css';

const MainNavbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsProfileOpen(true);
  };

  const handleMouseLeave = () => {
    setIsProfileOpen(false);
  };

  useEffect(() => {
    const buttons = document.querySelectorAll('#collectionsMenu button');
    const handleMouseOver = function () {
      const imageUrl = this.getAttribute('data-image');
      document.querySelector('#collectionsImage img').src = imageUrl;
    };

    buttons.forEach(button => {
      button.addEventListener('mouseover', handleMouseOver);
    });

    return () => {
      buttons.forEach(button => {
        button.removeEventListener('mouseover', handleMouseOver);
      });
    };
  }, []);

  return (
    <nav className="bg-white border-gray-200 sticky top-0 z-50 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={assets.Logo_New2} className="h-28 w-28" alt="Flowbite Logo" />
        </a>
        <div className="flex items-center gap-5 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
          <button>
            <img src={assets.shopping_bag2} className="w-8 h-8" alt="Shopping Bag" />
          </button>
          <button>
            <img src={assets.heart} className="w-7 h-7" alt="Heart Icon" />
          </button>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className="flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
              id="user-menu-button"
            >
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src={assets.profile} alt="Profile" />
            </button>
            {isProfileOpen && (
              <div
                className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-lg shadow-lg bg-[#f4f4f4] transition-opacity duration-300"
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-[16px] text-[#ffc0cb] font-semibold font-outfit">Bonnie Green</span>
                  <span className="block text-xs text-gray-500 truncate font-normal font-poppins">name@flowbite.com</span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-200 font-medium font-montserrat">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-200 font-medium font-montserrat">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-200 font-medium font-montserrat">Earnings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-200 font-medium font-montserrat">Sign out</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium text-[16px] p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-[#ffc0cb] bg-[#FFC0CB] rounded md:bg-transparent font-montserrat md:p-0 font-medium text-[16px]"
                aria-current="page"
                id="underline2"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black font-montserrat font-medium text-[16px] rounded md:hover:bg-transparent md:hover:text-[#FFC0CB] md:p-0"
                id="underline2"
              >
                Shop
              </a>
            </li>
            <li className="relative group">
              <button
                id="collectionsMenuButton"
                className="flex items-center justify-between w-full py-2 px-3 md:hover:bg-transparent md:border-0 md:hover:text-[#ffc0cb] md:p-0 md:w-auto text-black font-montserrat font-medium text-[16px]"
              >
                Collections
              </button>
              <div
                id="collectionsMenu"
                className="absolute left-0 z-10 hidden group-hover:flex bg-[#f4f4f4] rounded-lg shadow w-[560px] transition-all duration-300"
              >
                <div className="w-3/12 p-4">
                  <ul className="text-sm text-black">
                    <li>
                      <button data-image={assets.lehenga} className="block py-2 rounded-xl font-montserrat font-medium text-sm" id="underline">Lehengas</button>
                    </li>
                    <li>
                      <button data-image={assets.kurti} className="block py-2 rounded-xl font-montserrat font-medium text-sm" id="underline">Kurti</button>
                    </li>
                    <li>
                      <button data-image={assets.peplum} className="block py-2 rounded-xl font-montserrat font-medium text-sm" id="underline">Peplum Sets</button>
                    </li>
                    <li>
                      <button data-image={assets.tops} className="block py-2 rounded-xl font-montserrat font-medium text-sm" id="underline">Tops</button>
                    </li>
                    <li>
                      <button data-image={assets.tunics} className="block py-2 rounded-xl font-montserrat font-medium text-sm" id="underline">Tunics</button>
                    </li>
                    <li>
                      <button data-image={assets.shrugs} className="block py-2 rounded-xl font-montserrat font-medium text-sm" id="underline">Shruges</button>
                    </li>
                    <li>
                      <button data-image={assets.jackets} className="block py-2 rounded-xl font-montserrat font-medium text-sm" id="underline">Jackets</button>
                    </li>
                    <li>
                      <button data-image={assets.blouses} className="block py-2 rounded-xl font-montserrat font-medium text-sm" id="underline">Blouses</button>
                    </li>
                    <li>
                      <button data-image={assets.frocks} className="block py-2 rounded-xl font-montserrat font-medium text-sm" id="underline">Frocks</button>
                    </li>
                    <li>
                      <button data-image={assets.one_piece} className="block py-2 rounded-xl font-montserrat font-medium text-sm" id="underline">One Piece</button>
                    </li>
                  </ul>
                </div>
                <div id="collectionsImage" className="w-2/6 rounded-2xl bg-[#f4f4f4]">
                  <img src={assets.kurti} alt="Collections" className="absolute w-[450px] pt-4 pb-8 h-[390px] object-contain" />
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded md:hover:text-[#FFC0CB] md:p-0 text-black font-montserrat font-medium text-[16px] hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                id="underline2"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded md:hover:text-[#FFC0CB] md:p-0 text-black font-montserrat font-medium text-[16px] hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                id="underline2"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
