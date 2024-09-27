import React from 'react';

const Button = ({ href, label }) => {
  return (
    <a
      href={href}
      className="px-6 py-3 text-sm text-white bg-gray-800 rounded-full hover:bg-gray-600 transition"
      style={{ display: 'inline-block', width: 'auto' }} // Ensure it's inline with auto width
    >
      {label}
    </a>
  );
};

export default Button;
