import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Email functionality
import AuthForm from './AuthForm';  // Import the AuthForm component

const LandingPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          alert('Email successfully sent!');
        },
        (error) => {
          alert('Failed to send email, please try again later.');
        }
      );
    e.target.reset();
  };

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
        <form onSubmit={sendEmail} className="w-full max-w-lg">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formState.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formState.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formState.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
