import React from 'react'

type Props = {}

const WhatWeCan = (props: Props) => {
  return (
    <article className='flex flex-col items-center'>
        <div className='flex flex-col items-center pb-20 pt-20'>
        <h1 className='text-3xl'>What We Can</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, nobis.</p>
        </div>
        <section className='flex justify-space-around gap-3'>
            <div className='shadow p-20'>d</div>
            <div className='shadow p-20'>d</div>
            <div className='shadow p-20 flex flex-col items-center'>
                <h1 className='text-3xl'>membership</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, nobis.</p>
            </div>
          
        </section>
    </article>
  )
}

export default WhatWeCan