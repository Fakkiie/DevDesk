import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactSection = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
      //Title for page
      <h2 className="text-4xl font-light text-gray-800 mb-8">About Us</h2>
      //Calls contact form from components
      <ContactForm />
    </div>
  );
};

export default ContactSection;
