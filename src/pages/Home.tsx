import React from 'react';
import HeaderHome from '@/components/HeaderHome';
import CallToAction from '@/components/home/CallToAction';
import WhatWeDo from '@/components/home/WhatWeCan';
import Carousel from '@/components/home/Carousel';

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <main className="flex flex-col w-full h-full">
        <HeaderHome />
        <section className="w-full h-full">
          <CallToAction />
          <Carousel />
          <WhatWeDo />
        </section>
      </main>
    </>
  );
};

export default Home;
