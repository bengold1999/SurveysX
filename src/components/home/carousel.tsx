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
        autoplaySpeed={2}
        speed={2}
        onReady={() => console.log('I am ready')}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <div key={item} className="border-1 shadow-xl rounded h-36 w-48 md:w-48">
            {item}
          </div>
        ))}
      </ScrollCarousel>
    </>
  );
};

export default Carousel;
