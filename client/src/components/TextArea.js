import React from 'react';

const TextArea = ({ name, placeholder, value, onChange, required }) => {
  return (
    <div>
      <textarea
        name={name}
        rows="4"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
        required={required}
      ></textarea>
    </div>
  );
};

export default TextArea;
