import { useState, useEffect } from 'react';

import { languageContainer, languageEventEmitter } from './Global.js';

function CreditCard() {

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
                  <h1 className="section1-title">Our Credit Cards</h1>
                </div>
    
              </section>
    
              <section className="section2">
    
                <div class="service-box">
                    <h3>Chroma Platinum Rewards</h3>
                    <p>
                        The Chroma Platinum Rewards card offers exclusive benefits and high reward points for every purchase.
                        Ideal for frequent travelers and luxury shoppers, this card provides access to VIP lounges, concierge services, and more.
                    </p>
                </div>
                <div class="service-box">
                    <h3>Chroma CashBack Plus</h3>
                    <p>
                        Maximize your savings with the Chroma CashBack Plus card. Earn 5% cashback on groceries, 3% on gas,
                        and 1% on all other purchases. This card is perfect for everyday spenders who want to get the most out of their money.
                    </p>
                </div>
                <div class="service-box">
                    <h3>Chroma Travel Elite</h3>
                    <p>
                        Explore the world with the Chroma Travel Elite card. Enjoy no foreign transaction fees, complimentary travel insurance,
                        and double points on travel-related expenses. This card is tailored for the avid traveler.
                    </p>
                </div>
                <div class="service-box">
                    <h3>Chroma Student Saver</h3>
                    <p>
                        Designed for students, the Chroma Student Saver card offers 0% APR on purchases for the first year, no annual fees,
                        and rewards on textbook and school supply purchases. A great way to build credit while enjoying student-specific perks.
                    </p>
                </div>
                <div class="service-box">
                    <h3>Chroma Business Advantage</h3>
                    <p>
                        Empower your business with the Chroma Business Advantage card. Earn rewards on office supplies, travel, and client dinners.
                        This card provides detailed expense tracking and higher credit limits to support your business growth.
                    </p>
                </div>
                <div class="service-box">
                    <h3>Chroma Secure Card</h3>
                    <p>
                        Build or rebuild your credit with the Chroma Secure Card. This secured credit card offers a low deposit requirement and reports
                        to all three major credit bureaus. Perfect for those looking to establish a positive credit history.
                    </p>
                </div>
                <div class="service-box">
                    <h3>Chroma Green Rewards</h3>
                    <p>
                        Support sustainability with the Chroma Green Rewards card. Earn rewards for purchases at eco-friendly retailers and receive special
                        discounts on green products. This card is ideal for environmentally conscious consumers.
                    </p>
                </div>
                <div class="service-box">
                    <h3>Chroma Luxury Gold</h3>
                    <p>
                        Indulge in luxury with the Chroma Luxury Gold card. Enjoy premium benefits like access to exclusive events, luxury hotel upgrades,
                        and personalized shopping experiences. This card caters to those who appreciate the finer things in life.
                    </p>
                </div>
    
              </section>
    
              <section className="section3">
              </section>
            </div>
        );
    
      }
    
      else {
    
        return (
            
            <div>
                <section className="section1">
                    <div className="section1-title-box-pushedup">
                        <h1 className="section1-title">Nos Cartes de Crédit</h1>
                    </div>
                </section>

                <section className="section2">
                    <div class="service-box">
                        <h3>Chroma Récompenses Platine</h3>
                        <p>
                            La carte Chroma Platinum Rewards offre des avantages exclusifs et des points de récompense élevés pour chaque achat.
                            Idéale pour les voyageurs fréquents et les amateurs de shopping de luxe, cette carte donne accès à des salons VIP, des services de conciergerie, et plus encore.
                        </p>
                    </div>
                    <div class="service-box">
                        <h3>Chroma CashBack Plus</h3>
                        <p>
                            Maximisez vos économies avec la carte Chroma CashBack Plus. Gagnez 5% de cashback sur les courses, 3% sur l'essence,
                            et 1% sur tous les autres achats. Cette carte est parfaite pour les dépenses quotidiennes et pour tirer le meilleur parti de votre argent.
                        </p>
                    </div>
                    <div class="service-box">
                        <h3>Chroma Voyage Elite</h3>
                        <p>
                            Explorez le monde avec la carte Chroma Travel Elite. Profitez de l'absence de frais de transaction à l'étranger, de l'assurance voyage gratuite,
                            et du doublement des points sur les dépenses liées aux voyages. Cette carte est adaptée aux voyageurs assidus.
                        </p>
                    </div>
                    <div class="service-box">
                        <h3>Chroma Économies Étudiant</h3>
                        <p>
                            Conçue pour les étudiants, la carte Chroma Student Saver offre un TAEG de 0% sur les achats pour la première année, sans frais annuels,
                            et des récompenses sur l'achat de manuels et de fournitures scolaires. Un excellent moyen de bâtir son crédit tout en profitant des avantages spécifiques aux étudiants.
                        </p>
                    </div>
                    <div class="service-box">
                        <h3>Chroma Avantage Entreprise</h3>
                        <p>
                            Donnez du pouvoir à votre entreprise avec la carte Chroma Business Advantage. Gagnez des récompenses sur les fournitures de bureau, les voyages et les repas avec les clients.
                            Cette carte offre un suivi détaillé des dépenses et des limites de crédit plus élevées pour soutenir la croissance de votre entreprise.
                        </p>
                    </div>
                    <div class="service-box">
                        <h3>Chroma Carte Sécurisée</h3>
                        <p>
                            Construisez ou reconstruisez votre crédit avec la carte Chroma Secure. Cette carte de crédit sécurisée offre un faible dépôt requis et est signalée
                            aux trois principaux bureaux de crédit. Parfait pour ceux qui cherchent à établir une bonne histoire de crédit.
                        </p>
                    </div>
                    <div class="service-box">
                        <h3>Chroma Récompenses Vertes</h3>
                        <p>
                            Soutenez la durabilité avec la carte Chroma Green Rewards. Gagnez des récompenses pour les achats chez les détaillants éco-responsables et recevez des réductions spéciales
                            sur les produits écologiques. Cette carte est idéale pour les consommateurs soucieux de l'environnement.
                        </p>
                    </div>
                    <div class="service-box">
                        <h3>Chroma Luxe Or</h3>
                        <p>
                            Indulgez dans le luxe avec la carte Chroma Luxury Gold. Profitez d'avantages premium comme l'accès à des événements exclusifs, des surclassements d'hôtel de luxe,
                            et des expériences de shopping personnalisées. Cette carte s'adresse à ceux qui apprécient les choses les plus raffinées de la vie.
                        </p>
                    </div>
                </section>

                <section className="section3">
                </section>
            </div>

        );
    
    }

}

export default CreditCard;
