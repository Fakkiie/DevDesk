import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import './index.css';  // Import Tailwind's CSS
import LandingPage from './pages/LandingPage';

// Get the root element from the DOM
const container = document.getElementById('root');
const root = createRoot(container); // Create a root

// Render your component into the root
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);
