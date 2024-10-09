import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; // Import HashLink

type Props = {};

const Header = (props: Props) => {
  const nav = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 left-0 right-0 flex justify-between items-center shadow-sm p-4 bg-white z-10">
      <div className="flex items-center hover:cursor-pointer " onClick={() => nav('/')}>
        <img className="w-10" src="src/assets/img/logoX.png" alt="Logo" />
        <h2 className="ml-2 text-xl font-lightbold">SurveyX</h2>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden">
        <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            ></path>
          </svg>
        </button>
      </div>

      {/* Navigation for larger screens */}
      <nav className="hidden md:flex space-x-4 items-center">
        {/* <HashLink smooth to="#surveys" className="text-secondery">Surveys</HashLink>
        <HashLink smooth to="#pricing" className="text-secondery">Pricing</HashLink>
        <HashLink smooth to="#howitworks" className="text-secondery">How It Works</HashLink>
        <HashLink smooth to="#contact" className="text-secondery">Contact</HashLink> */}
        {/* <button onClick={() => nav('/Login')}>Start Now</button> */}
      </nav>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {/* <HashLink smooth to="#surveys" className="text-secondery">Surveys</HashLink>
            <HashLink smooth to="#pricing" className="text-secondery">Pricing</HashLink>
            <HashLink smooth to="#howitworks" className="text-secondery">How It Works</HashLink>
            <HashLink smooth to="#contact" className="text-secondery">Contact</HashLink> */}
            </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
