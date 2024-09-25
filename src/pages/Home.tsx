import React from 'react';
import HeaderHome from '@/components/HeaderHome';
import CallToAction from '@/components/home/CallToAction';
import Carousel from '@/components/home/Carousel';
import Pricing from '@/components/home/Prices';
import HowItWorks from '@/components/home/HowItWorks';
import Contact from '@/components/Contact';
// import { Contact } from 'lucide-react';

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <main className="flex flex-col w-full h-full">
        <HeaderHome />
        <section className="w-full h-full">
          <CallToAction />
          <Carousel />
          {/* Add an id for How It Works section */}
          <div id="howitworks">
            <HowItWorks />
          </div>
          {/* Add an id for Pricing section */}
          <div id="pricing">
            <Pricing />
          </div>
          <div id='contact'>
            <Contact />

          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
