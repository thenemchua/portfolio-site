// src/pages/Contact.js
import React from 'react';

const Contact = ({ language }) => {
  const content = {
    fr: {
      title: "Contactez-moi",
      contactInfo: "Coordonnées",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      phone: "Téléphone",
      formTitle: "Envoyez-moi un message",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "Votre email",
      messagePlaceholder: "Votre message",
      submitButton: "Envoyer",
    },
    en: {
      title: "Get in Touch",
      contactInfo: "Contact Information",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      phone: "Phone",
      formTitle: "Send me a message",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message",
      submitButton: "Send",
    },
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-[#F2F2F2] text-[#0D0D0D] p-6 flex flex-col items-center">
      {/* Titre */}
      <h1 className="text-4xl font-bold mb-6">{currentContent.title}</h1>

      {/* Coordonnées */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">{currentContent.contactInfo}</h2>
        <ul className="text-lg space-y-2">
          <li>
            {currentContent.email}:{" "}
            <a href="mailto:hello.alainlim@gmail.com" className="text-[#56828C]">
              hello.alainlim@gmail.com
            </a>
          </li>
          <li>
            {currentContent.linkedin}:{" "}
            <a
              href="https://www.linkedin.com/in/alain-lim-854950114/"
              className="text-[#56828C]"
            >
              Alain Lim
            </a>
          </li>
          <li>
            {currentContent.github}:{" "}
            <a href="https://github.com/thenemchua" className="text-[#56828C]">
              thenemchua
            </a>
          </li>
          {/* Si vous voulez ajouter un numéro de téléphone */}
          {/* <li>{currentContent.phone}: <a href="tel:+1234567890" className="text-[#56828C]">+33 6 12 34 56 78</a></li> */}
        </ul>
      </div>

      {/* Formulaire de contact */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">{currentContent.formTitle}</h2>
        <form className="space-y-4">
          <div>
            <label
              className="block text-lg font-medium mb-2"
              htmlFor="name"
            >
              {currentContent.namePlaceholder}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={currentContent.namePlaceholder}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#56828C]"
            />
          </div>
          <div>
            <label
              className="block text-lg font-medium mb-2"
              htmlFor="email"
            >
              {currentContent.emailPlaceholder}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={currentContent.emailPlaceholder}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#56828C]"
            />
          </div>
          <div>
            <label
              className="block text-lg font-medium mb-2"
              htmlFor="message"
            >
              {currentContent.messagePlaceholder}
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder={currentContent.messagePlaceholder}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#56828C]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#56828C] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#395359] focus:outline-none focus:ring-2 focus:ring-[#56828C]"
          >
            {currentContent.submitButton}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
