// src/pages/Projects.js
import React from 'react';

const Projects = ({ language }) => {
  const content = {
    fr: {
      title: "Mes Projets",
      projects: [
        {
          name: "Chess Elo Prediction",
          description: "Prédiction du classement elo des joueurs d'une partie d'échecs.",
          technologies: "CNN, CNN-LSTM",
          link: "https://github.com/thenemchua/chess-elo-prediction",
        },
        {
            name: "Lorem Ipsum",
            description: "Lorem Ipsum",
            technologies: "Lorem ipsum",
            link: "",
          },
        {
        name: "Lorem Ipsum",
        description: "Lorem Ipsum",
        technologies: "Lorem ipsum",
        link: "",
        }
      ],
    },
    en: {
      title: "My Projects",
      projects: [
        {
          name: "Chess Elo Prediction",
          description: "Prédiction du classement elo des joueurs d'une partie d'échecs.",
          technologies: "CNN, CNN-LSTM",
          link: "https://github.com/thenemchua/chess-elo-prediction",
        },
        {
          name: "Lorem Ipsum",
          description: "Lorem Ipsum",
          technologies: "Lorem ipsum",
          link: "",
        },
        {
            name: "Lorem Ipsum",
            description: "Lorem Ipsum",
            technologies: "Lorem ipsum",
            link: "",
        }
      ],
    },
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-[#F2F2F2] text-[#0D0D0D] p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">{currentContent.title}</h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentContent.projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <p className="text-sm text-gray-500 mb-4">
              <span className="font-semibold">Technologies:</span> {project.technologies}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#56828C] hover:underline"
            >
              Voir le projet
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
