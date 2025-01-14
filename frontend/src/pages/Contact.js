import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(null);

  const content = {
    fr: {
      title: "Contactez-moi",
      contactInfo: "Coordonnées",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      formTitle: "Envoyez-moi un message",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "Votre email",
      messagePlaceholder: "Votre message",
      submitButton: "Envoyer",
      successMessage: "Votre message a été envoyé avec succès!",
      errorMessage: "Une erreur s'est produite, veuillez réessayer.",
    },
    en: {
      title: "Get in Touch",
      contactInfo: "Contact Information",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      formTitle: "Send me a message",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message",
      submitButton: "Send",
      successMessage: "Your message was successfully sent!",
      errorMessage: "An error occurred, please try again.",
    },
  };

  const currentContent = content[language];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:8000/api/contact/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            setSuccess(true);
            setFormData({ name: '', email: '', message: '' });
        } else {
            setSuccess(false);
        }
    } catch (error) {
        setSuccess(false);
    }
  };


  return (
    <div className="min-h-screen bg-[#F2F2F2] text-[#0D0D0D] p-6 flex flex-col items-center">
      {/* Titre */}
      <h1 className="text-4xl font-bold mb-6">{currentContent.title}</h1>

      {/* Coordonnées */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">{currentContent.contactInfo}</h2>
        <ul className="text-lg space-y-4">
          <li className="flex items-center">
            <FaEnvelope className="text-[#0D0D0D] text-2xl mr-4" />
            <a href="mailto:hello.alainlim@gmail.com" className="text-[#56828C] hover:underline">
              hello.alainlim@gmail.com
            </a>
          </li>
          <li className="flex items-center">
            <FaLinkedin className="text-[#0D0D0D] text-2xl mr-4" />
            <a
              href="https://www.linkedin.com/in/alain-lim-854950114/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#56828C] hover:underline"
            >
              Alain Lim
            </a>
          </li>
          <li className="flex items-center">
            <FaGithub className="text-[#0D0D0D] text-2xl mr-4" />
            <a
              href="https://github.com/thenemchua"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#56828C] hover:underline"
            >
              thenemchua
            </a>
          </li>
        </ul>
      </div>

      {/* Formulaire de contact */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">{currentContent.formTitle}</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="name">
              {currentContent.namePlaceholder}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={currentContent.namePlaceholder}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#56828C]"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="email">
              {currentContent.emailPlaceholder}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={currentContent.emailPlaceholder}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#56828C]"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="message">
              {currentContent.messagePlaceholder}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder={currentContent.messagePlaceholder}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#56828C]"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#56828C] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#395359] focus:outline-none focus:ring-2 focus:ring-[#56828C]"
          >
            {currentContent.submitButton}
          </button>
        </form>
        {success !== null && (
          <div className={`mt-4 p-4 rounded-lg ${success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {success ? currentContent.successMessage : currentContent.errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
