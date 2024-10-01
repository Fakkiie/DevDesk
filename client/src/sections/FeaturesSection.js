import React from 'react';
import FeatureCard from '../components/FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      title: "Real-time Collaboration",
      description: "Code together in real-time, just like you're in the same room.",
      icon: "👥",
    },
    {
      title: "Integrated Version Control",
      description: "Built-in Git support for seamless version management.",
      icon: "🔀",
    },
    {
      title: "Instant Environment Setup",
      description: "Get coding immediately with pre-configured development environments.",
      icon: "⚡",
    },
    {
      title: "Customizable Workspaces",
      description: "Tailor your coding environment to fit your team's unique needs.",
      icon: "🛠️",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Collaborative Codespace Features</h2>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex justify-center space-x-4 pb-4">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;