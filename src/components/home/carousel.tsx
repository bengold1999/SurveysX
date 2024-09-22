import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';


const Carousel = () => {
  return (
    <>
    <div className='flex flex-col items-center pb-20 pt-20'>
        <h1 className='text-3xl'>What We Can</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, nobis.</p>
        </div>
      <ScrollCarousel
        autoplay
        autoplaySpeed={2}
        speed={1}
        onReady={() => console.log('I am ready')}
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className='bg-blue-300/20 border-2 border-blue-300/70 rounded h-36 w-48'>
            
          </div>
        ))}
      </ScrollCarousel>
    </>
  );
};

export default Carousel;