import React from 'react';
import './LandingPage.css'; 

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Section */}
      <div className="w-full h-screen flex">
        {/* Left side div */}
        <div className="w-1/2 flex flex-col justify-center px-10 bg-gray-100">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Welcome to Our Platform
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Your space to collaborate, code, and innovate together. Scroll down to create an account or log in to get started.
          </p>
          <a
            href="#login"
            className="mt-8 inline-block w-auto text-white bg-blue-500 px-6 py-3 rounded-md hover:bg-blue-600"
          >
            Get Started
          </a>
        </div>

        {/* Right side div */}
        <div className="w-1/2 h-full">
          <img
            src={require('../images/index.png')} 
            alt="Collaborate"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Additional sections below */}
      <div id="login" className="w-full h-screen flex items-center justify-center bg-gray-200">
        <h2 className="text-4xl font-bold">Login or Create an Account</h2>
      </div>

      <div className="w-full h-screen flex items-center justify-center bg-gray-300">
        <h2 className="text-4xl font-bold">Explore Features</h2>
      </div>

      <div className="w-full h-screen flex items-center justify-center bg-gray-400">
        <h2 className="text-4xl font-bold">Contact Us</h2>
      </div>
    </div>
  );
};

export default LandingPage;
