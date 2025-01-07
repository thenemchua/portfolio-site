import React from "react";
import { FaCode, FaCogs, FaRobot } from "react-icons/fa";

const Projects = ({ language }) => {
  const content = {
    fr: {
      title: "Mes Projets",
      projects: [
        {
          icon: <FaRobot />,
          name: "Chess Elo Prediction",
          description: "Prédiction du classement elo des joueurs d'une partie d'échecs à l'aide de méthodes de Deep Learning.",
          technologies: "CNN, CNN-LSTM",
          link: "https://github.com/thenemchua/chess-elo-prediction",
        },
        {
          icon: <FaCogs />,
          name: "Portfolio Website",
          description: "Site Web portfolio développé à l'aide de ChatGPT",
          technologies: "React JS, Tailwind CSS, Django",
          link: "https://github.com/thenemchua/portfolio-site",
        },
        {
          icon: <FaCode />,
          name: "Graphe du RFN à partir de OpenData SNCF",
          description: "Création du graphe du RFN et visualisation à partir de données open source",
          technologies: "geopandas, matplotlib, scipy, networkx",
          link: "https://github.com/thenemchua/sncf_railway_graph",
        },
      ],
    },
    en: {
      title: "My Projects",
      projects: [
        {
          icon: <FaRobot />,
          name: "Chess Elo Prediction",
          description: "Predicting the Elo ranking of chess players using Deep Learning methods.",
          technologies: "CNN, CNN-LSTM",
          link: "https://github.com/thenemchua/chess-elo-prediction",
        },
        {
          icon: <FaCogs />,
          name: "Portfolio Website",
          description: "This website has been developped using ChatGPT",
          technologies: "React JS, Tailwind CSS, Django",
          link: "https://github.com/thenemchua/portfolio-site",
        },
        {
          icon: <FaCode />,
          name: "Railway graph from OpenData SNCF",
          description: "Created a graph and displayed it using open source data",
          technologies: "geopandas, matplotlib, scipy, networkx",
          link: "https://github.com/thenemchua/sncf_railway_graph",
        },
      ],
    },
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F2F2F2] p-6">
      <h1 className="text-4xl font-bold mb-6">{currentContent.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentContent.projects.map((project, index) => (
          <div key={index} className="bg-[#1E1E1E] shadow-lg rounded-lg p-4">
            <div className="flex items-center mb-4">
              <h2 className="text-xl font-semibold">{project.name}</h2>
            </div>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <p className="text-sm text-gray-500 mb-4">
              <span className="font-semibold">Technologies:</span> {project.technologies}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#56828C] hover:underline"
              >
                Voir le projet
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
