import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

const CallToAction = (props: Props) => {
  const nav = useNavigate();
  return (
    <article className="bg-bgTrue w-full h-full flex flex-col md:flex-row items-center justify-between pb-10 pt-10">
      <div className="w-full h-full flex flex-col justify-around p-4 md:p-10 gap-3 text-center md:text-left">
        <h1 className="text-secondary">Call To Action</h1>
        <h1 className="text-primary">Hello</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, culpa.</p>
        <button className="w-full md:w-1/4" onClick={() => nav('/Login')}>
          Start Now
        </button>
      </div>

      {/* Make image smaller on mobile and larger on desktop */}
      <img
        className="w-3/4 md:w-1/2 pr-10 mx-auto md:mx-0"
        src="src/assets/img/Information tab-pana 1.png"
        alt="Information"
      />
    </article>
  );
};

export default CallToAction;
