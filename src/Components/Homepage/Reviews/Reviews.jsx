import React from 'react';
import assets from '../../../../public/assets/assets';

// StarRating component to display the rating
const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.64 5.036h5.316c.958 0 1.356 1.23.588 1.81l-4.304 3.127 1.64 5.036c.3.921-.755 1.688-1.54 1.118L10 14.347l-4.304 3.127c-.784.57-1.839-.197-1.54-1.118l1.64-5.036-4.304-3.127c-.768-.58-.37-1.81.588-1.81h5.316l1.64-5.036z" />
        </svg>
      ))}
    </div>
  );
};

const Reviews = () => {
  // Define the reviews array
  const reviews = [
    {
      name: 'John Doe',
      profileImage: assets.profile,
      reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae turpis non arcu placerat elementum.',
      rating: 5,
    },
    {
      name: 'Jane Smith',
      profileImage: assets.profile,
      reviewText: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      rating: 4,
    },
    {
      name: 'Jane Smith',
      profileImage: assets.profile,
      reviewText: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      rating: 4,
    },
    // Add more review objects as needed
  ];

  return (
    <div className='mb-20 my-10'>
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex gap-4 items-center justify-start mb-6">
          <h1 className="font-outfit font-bold text-4xl ">
            What Our Customer Think <span className="text-[#ffc0cb]">About Us</span>
          </h1>
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white border-t-8 border-l-8 border-websitepink w-[400px] h-[250px] rounded-lg shadow-2xl cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
              <div className="p-8">
                <div className="flex flex-row gap-6 mb-4">
                  <img src={review.profileImage} className="w-16 border-4 border-websitepink rounded-full" alt={review.name} />
                  <div>
                    <h2 className="font-bold text-3xl font-outfit">{review.name}</h2>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
                <p className="text-gray-600 font-poppins text-[14px]">{review.reviewText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
