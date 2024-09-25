import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';

const Carousel = () => {
  return (
    <>
      <div className="flex flex-col items-center pb-20 pt-20">
        <h1 className="text-3xl">Our Carousel</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, nobis.</p>
      </div>
      <ScrollCarousel
        autoplay
        autoplaySpeed={1.5}  
        speed={1.5}         
        onReady={() => console.log('I am ready')}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <div
            key={item}
            className="border-1 shadow-xl rounded h-72 w-80 md:h-96 md:w-96 m-2 bg-white flex items-center justify-center text-2xl"
          >
            Card {item}
          </div>
        ))}
      </ScrollCarousel>
    </>
  );
};

export default Carousel;
