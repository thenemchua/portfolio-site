import React from "react";
import { FaUserGraduate, FaTools, FaBriefcase, FaEnvelope } from "react-icons/fa";

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
      downloadCv: "Télécharger mon CV",
      cvPath: "/assets/cv_fr.pdf",
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
      downloadCv: "Download my CV",
      cvPath: "/assets/cv_en.pdf",
    },
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F2F2F2] p-6 flex justify-center items-center">
      {/* Main Section */}
      <div className="flex w-full max-w-6xl gap-6">
        {/* Photo and Intro Section */}
        <div className="bg-[#1E1E1E] rounded-lg shadow-lg w-1/3">
          <div className="bg-[#333] p-3 rounded-t-lg flex items-center">
            <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <h1 className="text-lg font-semibold ml-4">Introduction</h1>
          </div>
          <div className="p-6 flex flex-col items-center">
            <img
              src="/assets/photo.jpeg"
              alt="Alain Lim"
              className="w-60 h-auto rounded-full mb-4 object-cover"
            />
            <p className="text-center text-l">{currentContent.intro}</p>
            <a
              href={currentContent.cvPath} // Lien vers le CV en fonction de la langue
              download
              className="inline-block mt-4 bg-[#56828C] text-white py-2 px-4 rounded-lg hover:bg-[#395359]"
            >
              {currentContent.downloadCv}
            </a>
          </div>
        </div>

        {/* Main Window */}
        <div className="bg-[#1E1E1E] rounded-lg shadow-lg flex-1">
          <div className="bg-[#333] p-3 rounded-t-lg flex items-center">
            <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <h1 className="text-lg font-semibold ml-4">{currentContent.title}</h1>
          </div>
          <div className="p-6 space-y-6">
            {/* Education */}
            <section>
              <h2 className="text-xl font-semibold flex items-center mb-2">
                <FaUserGraduate className="text-[#56828C] mr-2" />
                {currentContent.education}
              </h2>
              <ul className="list-disc pl-6">
                {currentContent.educationDetails.map((edu, index) => (
                  <li key={index}>
                    <span className="font-semibold">{edu.school}</span>: {edu.degree}
                  </li>
                ))}
              </ul>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-xl font-semibold flex items-center mb-2">
                <FaTools className="text-[#56828C] mr-2" />
                {currentContent.skills}
              </h2>
              <ul className="list-disc pl-6">
                {currentContent.skillsDetails.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-xl font-semibold flex items-center mb-2">
                <FaBriefcase className="text-[#56828C] mr-2" />
                {currentContent.experience}
              </h2>
              <p>{currentContent.experienceDetails}</p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-xl font-semibold flex items-center mb-2">
                <FaEnvelope className="text-[#56828C] mr-2" />
                {currentContent.contact}
              </h2>
              <p>
                Email:{" "}
                <a
                  href="mailto:hello.alainlim@gmail.com"
                  className="text-[#56828C] hover:underline"
                >
                  hello.alainlim@gmail.com
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/alain-lim-854950114/"
                  className="text-[#56828C] hover:underline"
                >
                  Alain Lim
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a
                  href="https://github.com/thenemchua"
                  className="text-[#56828C] hover:underline"
                >
                  thenemchua
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
