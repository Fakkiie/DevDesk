import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactSection = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Title for the Contact section */}
      <h2 className="text-4xl font-light text-gray-800 mb-8">Contact Us</h2>
      {/* Contact form */}
      <ContactForm />
    </div>
  );
};

export default ContactSection;
