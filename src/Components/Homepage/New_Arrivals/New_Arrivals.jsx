"use client";
import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import assets from '../../../../public/assets/assets';

const products = [
  {
    id: 1,
    name: 'Ruwaa Ajrakh Cotton Kurta',
    image: assets.kurti,
    hoverImage: assets.tops,
    price: 4250,
    strikedPrice: 4850,
    discount: '12% off',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL', '6XL'],
    rating: 5,
    reviews: 350,
  },
  {
    id: 2,
    name: 'Ruwaa Ajrakh Cotton Kurta',
    image: assets.shrugs,
    hoverImage: assets.tops,
    price: 4250,
    strikedPrice: 4850,
    discount: '12% off',
    sizes: ['XS', 'S', 'M', 'XL', 'XXL', , '5XL', '6XL'],
    rating: 5,
    reviews: 350,
  },
  {
    id: 3,
    name: 'Ruwaa Ajrakh Cotton Kurta',
    image: assets.tunics,
    hoverImage: assets.blouses,
    price: 4250,
    strikedPrice: 4850,
    discount: '12% off',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL',],
    rating: 5,
    reviews: 350,
  },
  {
    id: 4,
    name: 'Ruwaa Ajrakh Cotton Kurta',
    image: assets.kurti,
    hoverImage: assets.tops,
    price: 4250,
    strikedPrice: 4850,
    discount: '12% off',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL', '6XL'],
    rating: 5,
    reviews: 350,
  },
  {
    id: 5,
    name: 'Ruwaa Ajrakh Cotton Kurta',
    image: assets.lehenga,
    hoverImage: assets.tops,
    price: 4250,
    strikedPrice: 4850,
    discount: '12% off',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL', '6XL'],
    rating: 5,
    reviews: 350,
  },
  // Add more products as needed
];

const New_Arrivals = () => {
  useEffect(() => {
    const splide = new Splide('.new-arrivals-splide', {
      perPage: 4,
      rewind: true,
      gap: '1rem',
      padding: { left: '1rem', right: '1rem' },
    });

    splide.mount();
  }, []);

  return (
    <div className='max-w-screen-2xl w-full mx-auto h-auto py-14 overflow-x-hidden'>
      <div className='flex flex-col items-center justify-center gap-20'>
        <div>
          <h1 className='font-outfit font-bold text-6xl'>New <span className='text-[#ffc0cb]'>Arrivals</span></h1>
        </div>
        <div className='new-arrivals-splide splide '>
          <div className='splide__track'>
            <ul className='splide__list'>
              {products.map(product => (
                <li key={product.id} className='splide__slide'>
                  <div className='relative flex flex-col items-start gap-4 border rounded-lg shadow-lg p-4'>
                    <div className='relative w-full h-72'>
                      <img
                        src={product.image}
                        className='w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-0'
                        alt={product.name}
                      />
                      <img
                        src={product.hoverImage}
                        className='absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100'
                        alt={`${product.name} Hover`}
                      />
                      <div className='absolute top-0 left-0 flex flex-col bg-white p-2 text-center font-montserrat'>
                        {product.sizes.map(size => (
                          <span key={size} className='text-[10px] py-[1px] font-medium border-b-2'>{size}</span>
                        ))}
                      </div>
                    </div>
                    <div className='absolute rounded-full top-5 right-5 bg-brown-700 text-black px-2 py-1 font-montserrat font-medium text-[12px] bg-websitepink'>{product.discount}</div>
                    <div className='mt-2 px-2'>
                      <h2 className='text-sm font-poppins font-regular'>{product.name}</h2>
                      <div className='flex items-center gap-2 mt-1'>
                        <span className='text-xl font-bold text-black'>₹{product.price}</span>
                        <span className='line-through text-gray-500'>₹{product.strikedPrice}</span>
                      </div>
                      <div className='w-full'>
                        <button className='bg-websitepink font-montserrat font-semibold text-[16px] px-16 ml-4 py-2  mt-2 hover:bg-pink-300 rounded-full'>
                          Buy Now
                        </button>
                      </div>
                      <div className='flex flex-row justify-end w-full items-end ml-5 mt-2'>
                        <span className='text-red-500'>{'★'.repeat(product.rating)}</span>
                        <span className='ml-2 text-gray-500'>({product.reviews})</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <button className='flex justify-center items-center w-52 h-10 hover:bg-websitepink border-2 border-websitepink transition duration-300 ease-in-out text-black font-montserrat font-semibold text-[16px] rounded-sm '>
            View All Products
          </button>
        </div>
      </div>

    </div>
  );
}

export default New_Arrivals;
