import React from 'react';
import Button from '../components/Button';

const MainSection = () => {
  return (
    <div className="w-full h-screen flex items-center justify-between pl-10">
      {/* Left side: Welcome message and "Get Started" button */}
      <div className="w-full max-w-xl flex flex-col justify-center space-y-4">
        <h1 className="text-4xl font-light text-gray-800 mb-6">
          Welcome to Our Platform
        </h1>
        <p className="text-md text-gray-500 mb-6">
          A place to collaborate, code, and innovate. Scroll down to log in or create an account.
        </p>
        <div className="flex justify-start">
          {/* Button leading to login/signup section */}
          <Button href="#login" label="Get Started" />
        </div>
      </div>

      {/* Right side: Image */}
      <div className="hidden lg:flex w-full h-full">
        <img
          src={require('../images/index.png')} // Image for the hero section
          alt="Collaborate"
          className="object-cover w-full h-full" 
        />
      </div>
    </div>
  );
};

export default MainSection;
