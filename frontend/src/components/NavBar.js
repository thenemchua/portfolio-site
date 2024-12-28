// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ language, setLanguage }) => {
  return (
    <nav className="bg-[#0D0D0D] text-[#F2F2F2] py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Titre à gauche */}
        <h1 className="text-3xl font-bold">
          <Link to="/" className="hover:text-[#56828C]">
            ALAIN LIM
          </Link>
        </h1>

        {/* Menu à droite */}
        <div className="flex items-center space-x-12">
          <ul className="flex space-x-8 text-lg font-medium">
            <li>
              <Link to="/" className="hover:text-[#56828C]">
                {language === 'fr' ? 'Accueil' : 'Home'}
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#56828C]">
                {language === 'fr' ? 'À propos' : 'About'}
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-[#56828C]">
                {language === 'fr' ? 'Projets' : 'Projects'}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#56828C]">
                {language === 'fr' ? 'Contact' : 'Contact'}
              </Link>
            </li>
          </ul>

          {/* Switch FR | EN */}
          <div className="text-lg font-medium flex space-x-2">
            <button
              onClick={() => setLanguage('fr')}
              className={`${
                language === 'fr' ? 'font-bold text-[#56828C]' : 'text-gray-400'
              }`}
            >
              FR
            </button>
            <span>|</span>
            <button
              onClick={() => setLanguage('en')}
              className={`${
                language === 'en' ? 'font-bold text-[#56828C]' : 'text-gray-400'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
