import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="hidden md:flex w-full md:w-1/2 bg-gray-100 p-8">
          <img
            src="your-left-image.png" 
            alt="Left section illustration"
            className="object-cover w-full"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-gray-700 text-center">Sign in</h2>
          <p className="text-center text-gray-500 mt-2">
            If you don’t have an account, register <a href="/SignUp" className="text-primary">Register here!</a>
          </p>

          <form className="mt-6">
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

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center mt-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-primary" />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-primary">Forgot Password?</a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full mt-6 bg-primary text-white py-2 rounded-md hover:bg-primary-dark focus:outline-none transition duration-200"
            >
              Login
            </button>
          </form>

          {/* Social Login */}
          <div className="flex justify-center items-center mt-6">
            <span className="text-gray-600">or continue with</span>
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

export default Login;
