<<<<<<< HEAD
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './App.css'; 

const LanguagePage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const navigate = useNavigate();
  const languages = {
    en: "English",
    fr: "Français",
    es: "Español",
    hi: "हिंदी",
  };

  const titles = {
    en: "Select Language",
    fr: "Choisir la langue",
    es: "Seleccionar idioma",
    hi: "भाषा चुनें",
  };

  const content = {
    en: "Welcome! You can now browse the website in English.",
    fr: "Bienvenue! Vous pouvez désormais naviguer sur le site en français.",
    es: "¡Bienvenido! Ahora puedes navegar por el sitio en español.",
    hi: "स्वागत है! आप अब हिंदी में वेबसाइट ब्राउज़ कर सकते हैं।",
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };
  

 
  const handleButtonClick = () => {
    alert(`You have selected ${languages[selectedLanguage]}!`);
    navigate('/TermsPage'); 
  };

  return (
    <>
      <div className="language-page">
        <h1 className="language-title">{titles[selectedLanguage]}</h1>

        <div className="language-selector">
          <label htmlFor="language">Choose a language: </label>
          <select id="language" onChange={handleLanguageChange} className="language-dropdown">
            {Object.keys(languages).map((lang) => (
              <option key={lang} value={lang}>
                {languages[lang]}
              </option>
            ))}
          </select>
        </div>

        <p className="language-content">{content[selectedLanguage]}</p>

        {/* Button with an onClick handler */}
        <div class="button-container">
        <button className="custom-button" type="button" onClick={handleButtonClick}>
          Confirm Selection
        </button>
        </div>
      </div>

      <div className="language-page">
        <h1 className="language-title">Important Information</h1>

        <div className="language-content">
          <p>
            The language selection feature on this website is provided to improve accessibility and user experience. 
            While every effort has been made to ensure the accuracy and cultural relevance of the translations, the original version of the website, available in [default language], remains the authoritative version. In the case of discrepancies between translations and the original content, the original language version will prevail.
          </p>
          <p>
            We do not guarantee the accuracy or completeness of the translations and are not responsible for any errors, omissions, or misinterpretations arising from the use of the translated content. For legal, financial, or other critical matters, we recommend referring to the original [default language] content or consulting a professional for accurate information.
          </p>
          <p>
            By using this feature, you acknowledge and agree to the above terms and understand the limitations of automated or human translations provided by the website.
          </p>
        </div>
      </div>
    </>
  );
};

export default LanguagePage;
=======
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './App.css'; 

const LanguagePage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const navigate = useNavigate();
  const languages = {
    en: "English",
    fr: "Français",
    es: "Español",
    hi: "हिंदी",
  };

  const titles = {
    en: "Select Language",
    fr: "Choisir la langue",
    es: "Seleccionar idioma",
    hi: "भाषा चुनें",
  };

  const content = {
    en: "Welcome! You can now browse the website in English.",
    fr: "Bienvenue! Vous pouvez désormais naviguer sur le site en français.",
    es: "¡Bienvenido! Ahora puedes navegar por el sitio en español.",
    hi: "स्वागत है! आप अब हिंदी में वेबसाइट ब्राउज़ कर सकते हैं।",
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };
  

 
  const handleButtonClick = () => {
    alert(`You have selected ${languages[selectedLanguage]}!`);
    navigate('/TermsPage'); 
  };

  return (
    <>
      <div className="language-page">
        <h1 className="language-title">{titles[selectedLanguage]}</h1>

        <div className="language-selector">
          <label htmlFor="language">Choose a language: </label>
          <select id="language" onChange={handleLanguageChange} className="language-dropdown">
            {Object.keys(languages).map((lang) => (
              <option key={lang} value={lang}>
                {languages[lang]}
              </option>
            ))}
          </select>
        </div>

        <p className="language-content">{content[selectedLanguage]}</p>

        {/* Button with an onClick handler */}
        <div class="button-container">
        <button className="custom-button" type="button" onClick={handleButtonClick}>
          Confirm Selection
        </button>
        </div>
      </div>

      <div className="language-page">
        <h1 className="language-title">Important Information</h1>

        <div className="language-content">
          <p>
            The language selection feature on this website is provided to improve accessibility and user experience. 
            While every effort has been made to ensure the accuracy and cultural relevance of the translations, the original version of the website, available in [default language], remains the authoritative version. In the case of discrepancies between translations and the original content, the original language version will prevail.
          </p>
          <p>
            We do not guarantee the accuracy or completeness of the translations and are not responsible for any errors, omissions, or misinterpretations arising from the use of the translated content. For legal, financial, or other critical matters, we recommend referring to the original [default language] content or consulting a professional for accurate information.
          </p>
          <p>
            By using this feature, you acknowledge and agree to the above terms and understand the limitations of automated or human translations provided by the website.
          </p>
        </div>
      </div>
    </>
  );
};

export default LanguagePage;
>>>>>>> origin/main
