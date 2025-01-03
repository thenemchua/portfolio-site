import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = ({ language }) => {
  const content = {
    fr: {
      welcome: "Bienvenue sur mon site web !",
      help: "Cliquez sur une commande pour commencer",
      about: (
        <>
          À propos : Je suis Alain Lim, ingénieur en génie industriel spécialisé en Machine Learning et Data Science. Découvrez plus{" "}
          <Link to="/about" className="text-[#56828C] hover:underline">
            ici
          </Link>
          .
        </>
      ),
      projects: (
        <>
          Projets : Consultez mes réalisations en Recherche Opérationnelle et Data Science. Explorez plus{" "}
          <Link to="/projects" className="text-[#56828C] hover:underline">
            ici
          </Link>
          .
        </>
      ),
      contact: (
        <>
          Contactez-moi:
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:hello.alainlim@gmail.com" className="text-[#56828C] hover:underline">
                hello.alainlim@gmail.com
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/alain-lim-854950114/" target="_blank" rel="noopener noreferrer" className="text-[#56828C] hover:underline">
                Alain Lim
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a href="https://github.com/thenemchua" target="_blank" rel="noopener noreferrer" className="text-[#56828C] hover:underline">
                thenemchua
              </a>
            </li>
          </ul>
        </>
      ),      
      commands: ["help", "about", "projects", "contact", "clear"],
    },
    en: {
      welcome: "Welcome to my website!",
      help: "Click a command to get started",
      about: (
        <>
          About: I am Alain Lim, an Industrial Engineer specializing in Machine Learning and Data Science. Learn more{" "}
          <Link to="/about" className="text-[#56828C] hover:underline">
            here
          </Link>
          .
        </>
      ),
      projects: (
        <>
          Projects: Check out my work in Operations Research and Data Science. Explore more{" "}
          <Link to="/projects" className="text-[#56828C] hover:underline">
            here
          </Link>
          .
        </>
      ),
      contact: (
        <>
          Get in touch:
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:hello.alainlim@gmail.com" className="text-[#56828C] hover:underline">
                hello.alainlim@gmail.com
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/alain-lim-854950114/" target="_blank" rel="noopener noreferrer" className="text-[#56828C] hover:underline">
                Alain Lim
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a href="https://github.com/thenemchua" target="_blank" rel="noopener noreferrer" className="text-[#56828C] hover:underline">
                thenemchua
              </a>
            </li>
          </ul>
        </>
      ),
      commands: ["help", "about", "projects", "contact", "clear"],
    },
  };

  const [log, setLog] = useState([]); // Contenu du terminal
  const currentContent = content[language];

  // Réinitialisation du terminal au changement de langue
  useEffect(() => {
    resetTerminal();
  }, [language]);

  const resetTerminal = () => {
    setLog([{ command: "", output: currentContent.welcome }]);
  };

  const handleCommand = (command) => {
    if (command === "clear") {
      resetTerminal();
      return;
    }

    const output = currentContent[command];
    if (!output) {
      setLog((prev) => [...prev, { command: `> run ${command}`, output: "Commande non reconnue." }]);
      return;
    }

    setLog((prev) => [...prev, { command: `> run ${command}`, output }]);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F2F2F2] flex flex-col items-center justify-center p-6">
      {/* Terminal Container */}
      <div className="bg-[#1E1E1E] w-full max-w-4xl rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-[#333] text-[#A6A6A6] p-3 flex items-center justify-between">
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <p className="text-sm">~/portfolio/terminal</p>
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm bg-[#1E1E1E] text-[#F2F2F2] space-y-4">
          {/* Log */}
          {log.map((entry, index) => (
            <div key={index}>
              {entry.command && <p>{entry.command}</p>}
              <p>{entry.output}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Command Buttons */}
      <div className="mt-6 flex flex-wrap space-x-4">
        {currentContent.commands.map((command, index) => (
          <button
            key={index}
            onClick={() => handleCommand(command)}
            className="bg-[#333] text-[#A6A6A6] py-1 px-3 rounded border border-[#4A4A4A] hover:bg-[#4A4A4A] transition-colors mb-2"
          >
            {command}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
