"use client";
import React, { useState } from 'react';
import Dot from './Dot';
import assets from '../../../../public/assets/assets';

const Outfit = () => {
  const products = [
    { 
      id: 1, 
      name: 'Kurti', 
      image: assets.kurti, 
      hoverImage: assets.tops, 
      sizes: ['S', 'M', 'L'],
      discount: '10% OFF',
      price: 4499,
      strikedPrice: 5599,
      rating: 4,
      reviews: 120,
      dotPosition: { top: '50%', left: '22%' } 
    },
    { 
      id: 2, 
      name: 'Tops', 
      image: assets.tops, 
      hoverImage: assets.lehenga, 
      sizes: ['S', 'M', 'L'],
      discount: '15% OFF',
      price: 3999,
      strikedPrice: 4899,
      rating: 5,
      reviews: 80,
      dotPosition: { top: '66%', left: '55%' } 
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const handleDotClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className='pt-10'>   
        <div>
        <h1 className='font-outfit font-bold text-6xl text-center'>Curated <span className='text-[#ffc0cb]'>Looks</span></h1>
        </div>
    
    <div style={{ display: 'flex', alignItems: 'center' }} className='py-20 w-full flex justify-center items-center'>
      <div style={{ position: 'relative' }}>
        <img src={assets.kurti} alt="Outfit" style={{ width: '400px', height: '500px' }} />
        {products.map((product) => (
          <Dot key={product.id} position={product.dotPosition} onClick={() => handleDotClick(product)}  />
        ))}
      </div>
      <div style={{ marginLeft: '40px' }}>
        {selectedProduct && (
          <div className="relative flex flex-col items-start gap-4  rounded-lg shadow-xl p-4 ">
            <div className="relative w-full h-72">
              <img
                src={selectedProduct.image}
                className="w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-0"
                alt={selectedProduct.name}
              />
              <img
                src={selectedProduct.hoverImage}
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100"
                alt={`${selectedProduct.name} Hover`}
              />
              <div className="absolute top-0 left-0 flex flex-col bg-white p-2 text-center font-montserrat">
                {selectedProduct.sizes.map((size) => (
                  <span key={size} className="text-[10px] py-[1px] font-medium border-b-2">
                    {size}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute rounded-full top-5 right-5 bg-brown-700 text-black px-2 py-1 font-montserrat font-medium text-[12px] bg-websitepink">
              {selectedProduct.discount}
            </div>
            <div className="mt-2 px-2">
              <h2 className="text-sm font-poppins font-regular">{selectedProduct.name}</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xl font-bold text-black">₹{selectedProduct.price}</span>
                <span className="line-through text-gray-500">₹{selectedProduct.strikedPrice}</span>
              </div>
              <div className="w-full">
                <button className="bg-websitepink font-montserrat font-semibold text-[16px] px-16 ml-4 py-2 mt-2 hover:bg-pink-300 rounded-full">
                  Buy Now
                </button>
              </div>
              <div className="flex flex-row justify-end w-full items-end ml-5 mt-2">
                <span className="text-red-500">{'★'.repeat(selectedProduct.rating)}</span>
                <span className="ml-2 text-gray-500">({selectedProduct.reviews})</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Outfit;
