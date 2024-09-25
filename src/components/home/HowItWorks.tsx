import React from 'react';
type Props = {};

const HowItWorks = (props: Props) => {
  return (
    <article className="flex flex-col items-center">
      <div className="flex flex-col items-center pb-20 pt-20">
        <h1 className="text-3xl">How It Works?</h1>
        <p className='text-lg pt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, nobis.</p>
      </div>
      <section className="flex flex-col md:flex-row justify-center gap-6 text-wrap">
        <div className="shadow p-10 flex flex-col items-center">
          <h1 className="text-2xl">Membership</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, nobis.</p>
        </div>
        <div className="shadow p-10 flex flex-col items-center">
          <h1 className="text-2xl">Membership</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, nobis.</p>
        </div>
        <div className="shadow p-10 flex flex-col items-center">
          <h1 className="text-2xl">Membership</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, nobis.</p>
        </div>
      </section>
    </article>
  );
};

export default HowItWorks;
