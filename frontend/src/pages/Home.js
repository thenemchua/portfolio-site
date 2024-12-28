// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ language }) => {
  const content = {
    fr: {
      title: "Bienvenue sur mon portfolio",
      subtitle: "Découvrez mes projets en Machine Learning, Data Science et Recherche Opérationnelle.",
      ctaAbout: "À propos",
      ctaProjects: "Projets",
      ctaContact: "Contact",
    },
    en: {
      title: "Welcome to my portfolio",
      subtitle: "Explore my projects in Machine Learning, Data Science, and Operations Research.",
      ctaAbout: "About",
      ctaProjects: "Projects",
      ctaContact: "Contact",
    },
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-[#F2F2F2] text-[#0D0D0D] flex flex-col justify-center items-center p-6">
      {/* Main Title */}
      <h1 className="text-5xl font-bold mb-4 text-center">{currentContent.title}</h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl">
        {currentContent.subtitle}
      </p>

      {/* Call-to-Actions */}
      <div className="flex space-x-4">
        <Link
          to="/about"
          className="bg-[#56828C] text-white py-2 px-6 rounded-lg hover:bg-[#395359] transition-colors"
        >
          {currentContent.ctaAbout}
        </Link>
        <Link
          to="/projects"
          className="bg-[#56828C] text-white py-2 px-6 rounded-lg hover:bg-[#395359] transition-colors"
        >
          {currentContent.ctaProjects}
        </Link>
        <Link
          to="/contact"
          className="bg-[#56828C] text-white py-2 px-6 rounded-lg hover:bg-[#395359] transition-colors"
        >
          {currentContent.ctaContact}
        </Link>
      </div>
    </div>
  );
};

export default Home;
