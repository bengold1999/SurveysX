import React from 'react'
import { Link } from 'react-router-dom'
import ScrollCarousel from 'scroll-carousel';


import HeaderHome from '@/components/HeaderHome'
import CallToAction from '@/components/home/CallToAction'
import WhatWeDo from '@/components/home/whatWeCan'
import Carousel from '@/components/home/carousel';
// import HeaderHome from '@/components/HeaderHome'
type Props = {}

const Home = (props: Props) => {
 

  return (
    <>
      <main className='flex flex-col w-full h-full '>
        <HeaderHome />
        {/* <a href="/FormBuilder">FormBuilder</a> */}
        <section className='w-full h-full '>
          <CallToAction></CallToAction>
          <Carousel></Carousel>
          <WhatWeDo></WhatWeDo>
          {/* <h1>sdsad</h1> */}
        </section>
      </main>
    </>
  )
}

export default Home