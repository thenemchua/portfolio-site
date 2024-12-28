// src/pages/About.js
import React from 'react';

const About = ({ language }) => {
  const content = {
    fr: {
      title: "À propos de moi",
      intro: "Je suis Alain Lim, ingénieur en génie industriel passionné par la data science, le machine learning et la recherche opérationnelle.",
      education: "Formation",
      educationDetails: [
        {
          school: "Le Wagon, Paris, France",
          degree: "Data Science & IA (Octobre - Décembre 2024)",
        },
        {
          school: "ESIEE Paris, Noisy-le-Grand, France",
          degree: "Diplôme d’ingénieur en Génie Industriel (2019)",
        },
      ],
      skills: "Compétences clés",
      skillsDetails: [
        "Langages : Python, Java, VBA, SQL",
        "Machine Learning : Pandas, Scikit-Learn, TensorFlow",
        "Visualisation : Matplotlib, Seaborn, Plotly",
        "Outils : Git, Jupyter Notebook, LocalSolver",
      ],
      experience: "Expériences professionnelles",
      experienceDetails: "Je vous invite à consulter mon CV pour en savoir plus sur mes expériences.",
      contact: "Contactez-moi",
    },
    en: {
      title: "About Me",
      intro: "I am Alain Lim, an Industrial Engineering graduate passionate about data science, machine learning, and operations research.",
      education: "Education",
      educationDetails: [
        {
          school: "Le Wagon, Paris, France",
          degree: "Data Science & AI (October - December 2024)",
        },
        {
          school: "ESIEE Paris, Noisy-le-Grand, France",
          degree: "Engineering Degree in Industrial Engineering (2019)",
        },
      ],
      skills: "Key Skills",
      skillsDetails: [
        "Languages: Python, Java, VBA, SQL",
        "Machine Learning: Pandas, Scikit-Learn, TensorFlow",
        "Visualization: Matplotlib, Seaborn, Plotly",
        "Tools: Git, Jupyter Notebook, LocalSolver",
      ],
      experience: "Professional Experiences",
      experienceDetails: "Please refer to my CV to learn more about my work experiences.",
      contact: "Get in Touch",
    },
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-[#F2F2F2] text-[#0D0D0D] p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">{currentContent.title}</h1>

      {/* Intro */}
      <p className="text-lg mb-6">{currentContent.intro}</p>

      {/* Education */}
      <h2 className="text-2xl font-semibold mb-4">{currentContent.education}</h2>
      <ul className="list-disc pl-6 mb-6">
        {currentContent.educationDetails.map((edu, index) => (
          <li key={index}>
            <span className="font-semibold">{edu.school}</span>: {edu.degree}
          </li>
        ))}
      </ul>

      {/* Skills */}
      <h2 className="text-2xl font-semibold mb-4">{currentContent.skills}</h2>
      <ul className="list-disc pl-6 mb-6">
        {currentContent.skillsDetails.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      {/* Experience */}
      <h2 className="text-2xl font-semibold mb-4">{currentContent.experience}</h2>
      <p className="mb-6">{currentContent.experienceDetails}</p>

      {/* Contact */}
      <h2 className="text-2xl font-semibold mb-4">{currentContent.contact}</h2>
      <p>Email: <a href="mailto:hello.alainlim@gmail.com" className="text-[#56828C]">hello.alainlim@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/alain-lim-854950114/" className="text-[#56828C]">Alain Lim</a></p>
      <p>GitHub: <a href="https://github.com/thenemchua" className="text-[#56828C]">thenemchua</a></p>
    </div>
  );
};

export default About;
