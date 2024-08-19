"use client";
import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
// import '@splidejs/splide/css/themes/splide-skyblue.min.css';
import assets from '../../../../public/assets/assets';


const Hero_Section = () => {
  useEffect(() => {
    const splide = new Splide('.splide', {
      type: 'fade',
      rewind: true,
      autoplay: true,
    });

    splide.mount();
  }, []);

  return (
    <div className="splide">
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide">
            <img src={assets.carousel_test} alt="Image 1" />
          </li>
          <li className="splide__slide">
            <img src={assets.carousel_test2} alt="Image 2" />
          </li>
          <li className="splide__slide">
            <img src={assets.carousel_test} alt="Image 3" />
          </li>
          <li className="splide__slide">
            <img src={assets.carousel_test2} alt="Image 4" />
          </li>
          <li className="splide__slide">
            <img src={assets.carousel_test} alt="Image 5" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero_Section;