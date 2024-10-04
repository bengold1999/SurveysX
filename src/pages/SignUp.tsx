import React from 'react';

const SignUp: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="hidden md:flex w-full md:w-1/2 bg-gray-100 p-8 items-start ">
        <div className='flex items-center'>
          <img
            src="/../src/assets/img/Logox.png" 
            alt="Left section illustration"
            className="w-10 h-10"
          />
          <h2 className='ml-2 text-xl font-lightbold'>SurveyX</h2>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-gray-700 text-center">Sign Up</h2>
          <p className="text-center text-gray-500 mt-2">
            Already have an account? <a href="/Login" className="text-primary">Sign in here!</a>
          </p>

          <form className="mt-6">
            {/* Name Field */}
            <div className="flex flex-col mt-4">
              <label htmlFor="name" className="text-gray-600">Full Name</label>
              <div className="flex items-center border rounded-md overflow-hidden mt-2">
                <span className="px-3 text-gray-400">
                  <i className="fas fa-user"></i>
                </span>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 text-gray-700 focus:outline-none"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="flex flex-col mt-4">
              <label htmlFor="email" className="text-gray-600">Email</label>
              <div className="flex items-center border rounded-md overflow-hidden mt-2">
                <span className="px-3 text-gray-400">
                  <i className="fas fa-envelope"></i>
                </span>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 text-gray-700 focus:outline-none"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col mt-4">
              <label htmlFor="password" className="text-gray-600">Password</label>
              <div className="flex items-center border rounded-md overflow-hidden mt-2">
                <span className="px-3 text-gray-400">
                  <i className="fas fa-lock"></i>
                </span>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 text-gray-700 focus:outline-none"
                />
                <span className="px-3 text-gray-400">
                  <i className="fas fa-eye"></i>
                </span>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="flex flex-col mt-4">
              <label htmlFor="confirmPassword" className="text-gray-600">Confirm Password</label>
              <div className="flex items-center border rounded-md overflow-hidden mt-2">
                <span className="px-3 text-gray-400">
                  <i className="fas fa-lock"></i>
                </span>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  className="w-full px-4 py-2 text-gray-700 focus:outline-none"
                />
                <span className="px-3 text-gray-400">
                  <i className="fas fa-eye"></i>
                </span>
              </div>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full mt-6 bg-primary text-white py-2 rounded-md hover:bg-primary-dark focus:outline-none transition duration-200"
            >
              Sign Up
            </button>
          </form>

          {/* Social Sign Up */}
          <div className="flex justify-center items-center mt-6">
            <span className="text-gray-600">or sign up with</span>
          </div>
          <div className="flex justify-center items-center mt-4 space-x-4">
            <button className="text-gray-600 hover:text-gray-900 transition duration-200">
              <i className="fab fa-facebook text-2xl"></i>
            </button>
            <button className="text-gray-600 hover:text-gray-900 transition duration-200">
              <i className="fab fa-apple text-2xl"></i>
            </button>
            <button className="text-gray-600 hover:text-gray-900 transition duration-200">
              <i className="fab fa-google text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
