import React from 'react';
import { useEffect, useState } from 'react';
import './Homepage.css';

import { languageContainer, languageEventEmitter } from './Global.js';

function HomePage() {
  
  const [language, setLanguageState] = useState(0);

  useEffect(() => {
    const handleLanguageChange = (newLanguage) => {
      setLanguageState(newLanguage);
    };

    languageEventEmitter.on('languageChange', handleLanguageChange);

    return () => {
      languageEventEmitter.off('languageChange', handleLanguageChange);
    };
  }, []);

  if (!languageContainer.item) {

    return (
      <div className="home-container">
        
        <section className="section1">

          <div className="section1-title-box">
            <h1 className="section1-title">Chroma Banking</h1>
          </div>

          <div className="section1-button-box">
            <button className="section1-button">Get Started</button>
          </div>
      
        </section>

        {/* Second Section */}
        <section className="section2">

          <div class="section2-title">
            <h2>Welcome to Chroma Banking</h2>
          </div>

          <div class="section2-text">

            <p>Chroma Banking redefines the banking experience through innovation and customer empowerment. Our AI-driven mobile app and web platform deliver personalized financial guidance in real-time. We prioritize transparency with clear explanations and robust security measures, ensuring every transaction is protected.</p>

            <p>Innovation is core to Chroma Banking. From digital payments to predictive analytics, we adapt swiftly to industry changes. Whether you're an investor or saver, our tools empower you to thrive.</p>

            <p>Experience banking reimagined with Chroma Banking. Join us where convenience meets reliability, and your financial well-being is our priority.</p>
          
          </div>

        </section>

        {/* Third Section */}
        <section className="section3">

          <div class="section2-title">
            <h2>Some of Our Services</h2>
          </div>

          <div class="service-box">
            <h3>Tax Free Savings Accounts</h3>
            <p>Description of service 1.</p>
          </div>

          <div class="service-box">
            <h3>Business Accounts</h3>
            <p>Description of service 2.</p>
          </div>

          <div class="service-box">
            <h3>Cash-Back Credit Cards</h3>
            <p>Description of service 3.</p>
          </div>

        </section>
      </div>
    );
  }

  else {
    
    return (
      <div className="home-container">
        
        <section className="section1">

          <div className="section1-title-box">
            <h1 className="section1-title">Chroma Banking</h1>
          </div>

          <div className="section1-button-box">
            <button className="section1-button">Commencer</button>
          </div>
      
        </section>

        {/* Second Section */}
        <section className="section2">

          <div class="section2-title">
            <h2>Bienvenue aux Chroma Banking</h2>
          </div>

          <div class="section2-text">

            <p>Chroma Banking redéfinit l'expérience bancaire grâce à l'innovation et à l'autonomisation des clients. Notre application mobile et notre plateforme Web basées sur l'IA fournissent des conseils financiers personnalisés en temps réel. Nous accordons la priorité à la transparence avec des explications claires et des mesures de sécurité robustes, garantissant que chaque transaction est protégée.</p>

            <p>L'innovation est au cœur de Chroma Banking. Des paiements numériques à l’analyse prédictive, nous nous adaptons rapidement aux changements du secteur. Que vous soyez investisseur ou épargnant, nos outils vous permettent de prospérer.</p>

            <p>Faites l'expérience de la banque réinventée avec Chroma Banking. Rejoignez-nous là où la commodité rencontre la fiabilité, et votre bien-être financier est notre priorité.</p>
          
          </div>

        </section>

        {/* Third Section */}
        <section className="section3">

          <div class="section2-title">
            <h2>Quelques-uns de nos services</h2>
          </div>

          <div class="service-box">
            <h3>Tax Free Savings Accounts</h3>
            <p>Description of service 1.</p>
          </div>

          <div class="service-box">
            <h3>Business Accounts</h3>
            <p>Description of service 2.</p>
          </div>

          <div class="service-box">
            <h3>Cash-Back Credit Cards</h3>
            <p>Description of service 3.</p>
          </div>

        </section>
      </div>
    );

  }
}

export default HomePage;