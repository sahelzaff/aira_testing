import React from 'react';
import assets from '../../../../public/assets/assets';

/**
 * This component displays a grid of clothing categories.
 * It uses the provided images and text to create the grid items.
 * The grid layout adjusts based on the screen size and the number of columns.
 * The last row of the grid is centered if the number of items is not a multiple of the number of columns.
 *
 * @returns {React.FC} The Categories component.
 */
const Categories = () => {
  const images = [
    { src: assets.lehenga, text: 'Lehenga' },
    { src: assets.kurti, text: 'Kurti' },
    { src: assets.shrugs, text: 'Shrugs' },
    { src: assets.tops, text: 'Tops' },
    { src: assets.blouses, text: 'Blouses' },
    { src: assets.tunics, text: 'Tunics' },
    { src: assets.lehenga, text: 'Lehenga' },
    { src: assets.kurti, text: 'Kurti' },
  ];

  /**
   * Calculates the indices of the items in the last row of the grid.
   *
   * @param {Array} items - The array of items to be displayed in the grid.
   * @param {number} cols - The number of columns in the grid.
   * @returns {Array} The indices of the items in the last row.
   */
  const getLastRowItems = (items, cols) => {
    const lastRowIndex = Math.floor((items.length - 1) / cols);
    const lastRowItems = items.slice(lastRowIndex * cols);
    return lastRowItems.map((_, index) => lastRowIndex * cols + index);
  };

  const lastRowItems = getLastRowItems(images, 4);

  return (
    <div className="max-w-screen-2xl px-20 py-20 mx-auto bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${assets.flowers_back})` }}>
      <div className="flex flex-col items-center justify-center gap-8">
        <div>
          <h1 className="font-outfit font-bold text-6xl">Shop By <span className='text-[#ffc0cb]'>Categories</span></h1>
        </div>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-x-20 gap-y-4 p-4 justify-center">
            {images.map((image, index) => (
              <div
                key={index}
                className={`text-center group ${lastRowItems.includes(index) ? 'justify-self-center col-span-3 md:col-span-1' : ''}`}
              >
                <div className="w-28 h-28 mx-auto mb-1 overflow-hidden cursor-pointer rounded-full border-4 border-[#FFC0CB]">
                  <img
                    src={image.src}
                    alt={image.text}
                    loading='lazy'
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="font-poppins text-lg font-medium transition-colors duration-300 group-hover:text-[#FFC0CB]">
                  {image.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;