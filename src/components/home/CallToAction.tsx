import React from 'react'

type Props = {}

const CallToAction = (props: Props) => {
  return (
    <article className='bg-primary w-full h-full flex justify-between pb-10 pt-10'>
      <div className='w-full h-full flex flex-col justify-space-around p-20 gap-3  '>
        <h1>Call To Action</h1>
        <h1>hello</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, culpa.</p>
        <button className='w-1/4'>Start Now</button>
      </div>
      <img className='w-1/2 pr-10' src="https://picsum.photos/200" alt="sds" />
    </article>
  )
}

export default CallToAction