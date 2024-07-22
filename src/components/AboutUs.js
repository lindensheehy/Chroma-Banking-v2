import { useState, useEffect } from 'react';
import './AboutUs.css'

import { languageContainer, languageEventEmitter } from './Global.js';

function AboutUs() {

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
        <div>
          <section className="section1">

            <div className="section1-title-box-pushedup">
              <h1 className="section1-title">How We Do Things</h1>
            </div>

          </section>

          <section className="section2">

            <div class="section2-title">
              <h2></h2>
            </div>

            <div class="section2-text">

              <p>
                <strong>1. Cutting-Edge Technology:</strong> 
                <br/>
                At the heart of Chroma Banking is our state-of-the-art AI-driven mobile app 
                and web platform. These technologies are designed to provide you with real-time, personalized financial 
                guidance. Our advanced algorithms analyze your spending patterns, investment opportunities, and financial 
                goals to deliver tailored insights that help you make informed decisions.
              </p>

              <p>
                <strong>2. Commitment to Transparency:</strong> 
                <br/>
                We believe that trust is built on transparency. Our platform offers clear, 
                easy-to-understand explanations of every transaction and financial decision. We ensure that all aspects 
                of your banking experience are transparent, so you are never left in the dark about your financial activities.
              </p>

              <p>
                <strong>3. Robust Security:</strong> 
                <br/>
                Security is paramount at Chroma Banking. We employ the highest standards of 
                encryption and security measures to protect your financial information. Every transaction is safeguarded 
                by cutting-edge security protocols to ensure your data remains confidential and secure.
              </p>

              <p>
                <strong>4. Embracing Innovation:</strong> 
                <br/>
                Innovation drives us. We continuously adapt to industry advancements, 
                integrating the latest technologies into our services. From digital payments to predictive analytics, 
                our platform evolves to meet the ever-changing needs of the banking landscape. We embrace 
                technological advancements to provide you with the best possible tools for managing your finances.
              </p>

              <p>
                <strong>5. Empowering Your Financial Journey:</strong> 
                <br/>
                Whether you are an investor looking for strategic opportunities 
                or a saver seeking to maximize returns, our suite of tools is designed to empower you. Our platform offers 
                comprehensive features to help you thrive, including investment analytics, savings optimization, 
                and financial planning resources.
              </p>

              <p>
                <strong>6. Reimagining Convenience and Reliability:</strong> 
                <br/>
                Chroma Banking is where convenience meets reliability. 
                We are dedicated to delivering a banking experience that is both user-friendly and dependable. 
                Our goal is to make managing your finances as effortless and efficient as possible, 
                so you can focus on what truly matters.
              </p>

              <p>
                <strong>Join Us:</strong>
                <br/>
                Experience banking reimagined with Chroma Banking. Discover a platform that combines innovation, 
                transparency, and security with the ultimate goal of enhancing your financial well-being. 
                At Chroma Banking, your success is our priority.
              </p>

            </div>

          </section>

          <section className="section3">
            
            <div class="section3-title">
              <h2>
                We offer a simple and laid-back alternative to traditional banking. If you’re ready to experience a more 
                intuitive and secure way to manage your finances, join us at Chroma Banking and discover how effortless 
                banking can be.
              </h2>
            </div>
            
            <div className="section1-button-box">
              <button className="section1-button">Get Started</button>
            </div>

          </section>
        </div>
    );

  }

  else {

    return (
      <div>
        <section className="section1">

          <div className="section1-title-box-pushedup">
            <h1 className="section1-title">Comment Nous Faisons Les Choses</h1>
          </div>

        </section>

        <section className="section2">

          <div class="section2-title">
            <h2></h2>
          </div>

          <div class="section2-text">

            <p>
              <strong>1. Technologie de Pointe :</strong> 
              <br/>
              Au cœur de Chroma Banking se trouve notre application mobile et notre plateforme web à la pointe de la technologie, 
              alimentées par l'IA. Ces technologies sont conçues pour vous offrir des conseils financiers personnalisés en temps réel. 
              Nos algorithmes avancés analysent vos habitudes de dépenses, opportunités d'investissement et objectifs financiers pour 
              fournir des aperçus adaptés qui vous aident à prendre des décisions éclairées.
            </p>

            <p>
              <strong>2. Engagement envers la Transparence :</strong> 
              <br/>
              Nous croyons que la confiance se construit sur la transparence. Notre plateforme offre des explications claires et 
              faciles à comprendre pour chaque transaction et décision financière. Nous veillons à ce que tous les aspects de votre 
              expérience bancaire soient transparents, afin que vous ne soyez jamais laissé dans le flou concernant vos activités financières.
            </p>

            <p>
              <strong>3. Sécurité Robuste :</strong> 
              <br/>
              La sécurité est primordiale chez Chroma Banking. Nous appliquons les plus hauts standards de cryptage et de mesures de 
              sécurité pour protéger vos informations financières. Chaque transaction est protégée par des protocoles de sécurité de 
              pointe pour garantir que vos données restent confidentielles et sécurisées.
            </p>

            <p>
              <strong>4. Adoption de l'Innovation :</strong> 
              <br/>
              L'innovation nous anime. Nous nous adaptons continuellement aux avancées de l'industrie, en intégrant les dernières 
              technologies dans nos services. Des paiements numériques à l'analyse prédictive, notre plateforme évolue pour répondre 
              aux besoins changeants du secteur bancaire. Nous adoptons les avancées technologiques pour vous fournir les meilleurs 
              outils possibles pour gérer vos finances.
            </p>

            <p>
              <strong>5. Valorisation de Votre Parcours Financier :</strong> 
              <br/>
              Que vous soyez un investisseur à la recherche d'opportunités stratégiques ou un épargnant cherchant à maximiser vos rendements, 
              notre suite d'outils est conçue pour vous autonomiser. Notre plateforme offre des fonctionnalités complètes pour vous aider 
              à prospérer, y compris l'analyse des investissements, l'optimisation des économies et des ressources pour la planification financière.
            </p>

            <p>
              <strong>6. Réinvention de la Commodité et de la Fiabilité :</strong> 
              <br/>
              Chroma Banking est l'endroit où la commodité rencontre la fiabilité. Nous sommes dédiés à offrir une expérience bancaire qui est 
              à la fois conviviale et fiable. Notre objectif est de rendre la gestion de vos finances aussi simple et efficace que possible, 
              afin que vous puissiez vous concentrer sur ce qui compte vraiment.
            </p>

            <p>
              <strong>Rejoignez-Nous :</strong>
              <br/>
              Découvrez une banque réinventée avec Chroma Banking. Découvrez une plateforme qui allie innovation, transparence et sécurité 
              avec l'objectif ultime d'améliorer votre bien-être financier. Chez Chroma Banking, votre succès est notre priorité.
            </p>

          </div>

        </section>

        <section className="section3">
          
          <div class="section3-title">
            <h2>
              Nous offrons une alternative simple et détendue aux banques traditionnelles. Si vous êtes prêt à découvrir une façon 
              plus intuitive et sécurisée de gérer vos finances, rejoignez-nous chez Chroma Banking et découvrez à quel point la 
              banque peut être facile.
            </h2>
          </div>
          
          <div className="section1-button-box">
            <button className="section1-button">Commencer</button>
          </div>

        </section>
      </div>
    );

  }

}

export default AboutUs;
