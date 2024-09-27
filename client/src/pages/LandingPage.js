import React from 'react';
import MainSection from '../sections/MainSection';
import ExploreFeatures from '../sections/ExploreFeatures';
import AuthForm from '../components/AuthForm';
import ContactSection from '../sections/ContactSection';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Main hero section */}
      <MainSection />
      {/* Section showcasing features */}
      <ExploreFeatures />
      {/* Authentication form section */}
      <div id="login" className="w-full h-screen flex items-center justify-center bg-gray-50">
        <AuthForm />
      </div>
      {/* Contact form section */}
      <ContactSection />
    </div>
  );
};

export default LandingPage;
