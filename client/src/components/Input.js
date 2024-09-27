import React from 'react';

const Input = ({ type, name, placeholder, value, onChange, required }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
        required={required}
      />
    </div>
  );
};

export default Input;
