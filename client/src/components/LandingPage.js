import React, { useState } from 'react';
import './LandingPage.css'; 
import emailjs from 'emailjs-com';

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
        process.env.REACT_APP_EMAILJS_SERVICE_ID,  // Fetch from .env
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Fetch from .env
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID      // Fetch from .env
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
            className="mt-8 inline-block text-center text-white bg-blue-500 px-6 py-3 rounded-md hover:bg-blue-600" 
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

      {/* Explore Features Section */}
      <div className="w-full h-screen flex items-center justify-center bg-gray-300">
        <h2 className="text-4xl font-bold">Explore Features</h2>
      </div>

      {/* Login or Create Account Section */}
      <div id="login" className="w-full h-screen flex items-center justify-center bg-gray-200">
        <h2 className="text-4xl font-bold">Login or Create an Account</h2>
      </div>

      {/* Contact Us Section */}
      <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-400">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <form onSubmit={sendEmail} className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={formState.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              value={formState.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formState.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
