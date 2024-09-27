import React from 'react';
import AuthForm from '../components/AuthForm';  
import ContactForm from '../components/ContactForm';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Main Section */}
      <div className="w-full h-screen flex items-center justify-center px-10">
        {/* Left side div */}
        <div className="w-full max-w-xl flex flex-col justify-center space-y-4">
          <h1 className="text-4xl font-light text-gray-800 mb-6">
            Welcome to Our Platform
          </h1>
          <p className="text-md text-gray-500 mb-6">
            A place to collaborate, code, and innovate. Scroll down to log in or create an account.
          </p>
          <a
            href="#login"
            className="mt-8 inline-block px-6 py-3 text-sm text-white bg-gray-800 rounded-full hover:bg-gray-600 transition"
          >
            Get Started
          </a>
        </div>

        {/* Right side div */}
        <div className="hidden lg:block w-1/2 h-full">
          <img
            src={require('../images/index.png')}
            alt="Collaborate"
            className="object-cover h-full w-full"
          />
        </div>
      </div>

      {/* Explore Features Section */}
      <div className="w-full h-screen flex items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-light text-gray-800">Explore Features</h2>
      </div>

      {/* Login or Create Account Section */}
      <div id="login" className="w-full h-screen flex items-center justify-center bg-gray-50">
        <AuthForm />
      </div>

      {/* Contact Us Section */}
      <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-4xl font-light text-gray-800 mb-8">Contact Us</h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default LandingPage;
