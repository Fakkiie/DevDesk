import React, { useState } from 'react';
import emailjs from 'emailjs-com'; 
import Input from './Input';
import TextArea from './TextArea';

const ContactForm = () => {
  // State to store form input values
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Function to update state when input values change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  // Function to send email using emailjs on form submit
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // EmailJS service ID from environment variables
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // EmailJS template ID from environment variables
        e.target, // Form element to submit
        process.env.REACT_APP_EMAILJS_USER_ID // EmailJS user ID from environment variables
      )
      .then(
        () => {
          alert('Email successfully sent!'); // Success message
        },
        () => {
          alert('Failed to send email, please try again later.'); // Error message
        }
      );
    e.target.reset(); // Clear form after submission
  };

  return (
    <form onSubmit={sendEmail} className="w-full max-w-lg space-y-4">
      {/* Input for name */}
      <Input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formState.name}
        onChange={handleInputChange}
        required
      />
      {/* Input for email */}
      <Input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formState.email}
        onChange={handleInputChange}
        required
      />
      {/* Text area for message */}
      <TextArea
        name="message"
        placeholder="Your Message"
        value={formState.message}
        onChange={handleInputChange}
        required
      />
      <div className="flex items-center justify-center">
        {/* Submit button */}
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
