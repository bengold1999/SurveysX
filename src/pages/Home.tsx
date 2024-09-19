import React from 'react'
import { Link } from 'react-router-dom'

import HeaderHome from '@/components/HeaderHome'
import CallToAction from '@/components/home/CallToAction'
// import HeaderHome from '@/components/HeaderHome'
type Props = {}

const Home = (props: Props) => {
  return (
    <>
    <main className='flex flex-col w-full h-full '>
    <HeaderHome/>
    {/* <a href="/FormBuilder">FormBuilder</a> */}
    <section className='w-full h-full '>
    <CallToAction></CallToAction>
    {/* <h1>sdsad</h1> */}
    </section>
    </main>
    </>
  )
}

export default Home