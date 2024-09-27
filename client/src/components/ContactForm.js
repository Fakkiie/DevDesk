import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Email functionality

const ContactForm = () => {
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
        () => {
          alert('Email successfully sent!');
        },
        () => {
          alert('Failed to send email, please try again later.');
        }
      );
    e.target.reset();
  };

  return (
    <form onSubmit={sendEmail} className="w-full max-w-lg space-y-4">
      <div>
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
      <div>
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
      <div>
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
  );
};

export default ContactForm;
