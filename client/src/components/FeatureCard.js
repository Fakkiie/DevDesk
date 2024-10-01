import React from 'react';

const FeatureCard = ({ title, description, icon }) => (
  <div className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md p-6 m-4">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default FeatureCard;