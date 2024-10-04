import React from 'react';
import MainSection from '../sections/MainSection';
import AuthForm from '../components/AuthForm';
import ContactSection from '../sections/ContactSection';
import FeaturesSection from '../sections/FeaturesSection'; // Add this import
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Main hero section */}
      <MainSection />
      {/* Features Section */}
      <FeaturesSection />
      {/* Authentication form section */}
      <div id="login" className="w-full h-screen flex items-center justify-center bg-gray-50">
        <AuthForm />
      </div>
      {/* Contact form section, dont like it just use it as a place holder and lets turn it into a footer with something else liek who we arae maybe 
        to try and get a job lol */}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
