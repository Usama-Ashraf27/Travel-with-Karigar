import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BoraBora2 from '../Assets/borabora2.jpg';
import Maldives from '../Assets/maldives.jpg';
import Maldives2 from '../Assets/maldives2.jpg';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

    autoplaySpeed: 3000,
    
  };

  return (
    <div class="object-contain h-96 w-full ..." >
      <Slider {...settings} >
        <div>
          <img class="object-contain h-96 w-full  " src={BoraBora2} alt="Image 2" />
        </div>
        <div >
          <img  class="object-contain h-96 w-full ..." src={Maldives} alt="Image 1" />
        </div>
        <div>
          <img class="object-contain h-96 w-full ..." src={Maldives2} alt="Image 2" />
        </div>
       
      </Slider>
    </div>
  );
};

export default Carousel;
