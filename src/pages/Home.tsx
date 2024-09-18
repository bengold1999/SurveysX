import React from 'react'
import { Link } from 'react-router-dom'

import HeaderHome from '@/components/headerHome'
// import HeaderHome from '@/components/HeaderHome'
type Props = {}

const Home = (props: Props) => {
  return (
    <>
    <main className='flex flex-col'>
    <HeaderHome/>
    <a href="/FormBuilder">FormBuilder</a>
    <section>
    
    </section>
    </main>
    </>
  )
}

export default Home