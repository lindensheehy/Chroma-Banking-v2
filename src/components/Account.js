import { useState, useEffect } from 'react';

import { languageContainer, languageEventEmitter } from './Global.js';

function Account() {

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
                  <h1 className="section1-title">Our Bank Accounts</h1>
                </div>
    
              </section>
    
              <section className="section2">
    
                <div class="service-box">
                    <h3>Chroma Basic Savings</h3>
                    <p>
                        The Chroma Basic Savings account is designed for those who want a simple, no-frills way to save money.
                        With no monthly fees and a competitive interest rate, it’s perfect for everyday savers.
                    </p>
                </div>
                <div class="service-box">
                    <h3>Chroma Premium Savings</h3>
                    <p>
                        For those looking to maximize their savings, the Chroma Premium Savings account offers higher interest rates and
                        additional benefits such as financial advisory services and priority customer support.
                    </p>
                </div>
                <div class="service-box">
                    <h3>Chroma Checking</h3>
                    <p>
                        The Chroma Checking account provides unlimited transactions with no monthly fees if a minimum balance is maintained.
                        Enjoy the convenience of online banking, mobile check deposit, and bill pay services.
                    </p>
                </div>
                <div class="service-box">
                    <h3>Chroma Student Checking</h3>
                    <p>
                        Designed specifically for students, the Chroma Student Checking account offers no monthly fees, low minimum balance requirements,
                        and access to a wide network of ATMs, making it easy for students to manage their finances.
                    </p>
                </div>
                <div class="service-box">
                    <h3>Chroma Money Market</h3>
                    <p>
                        The Chroma Money Market account combines the benefits of a savings account with the flexibility of a checking account.
                        Enjoy higher interest rates on larger balances and limited check-writing privileges.
                    </p>
                </div>
                <div class="service-box">
                    <h3>Chroma Certificate of Deposit (CD)</h3>
                    <p>
                        Lock in a fixed interest rate with a Chroma Certificate of Deposit. Choose from various terms and enjoy guaranteed returns
                        on your investment, with the security of FDIC insurance.
                    </p>
                </div>
                <div class="service-box">
                    <h3>Chroma Retirement Account (IRA)</h3>
                    <p>
                        Plan for your future with a Chroma Retirement Account. We offer both Traditional and Roth IRAs, providing tax advantages
                        and a range of investment options to help you save for retirement.
                    </p>
                </div>
                <div class="service-box">
                    <h3>Chroma Business Checking</h3>
                    <p>
                        Manage your business finances with ease using the Chroma Business Checking account. Enjoy features like unlimited transactions,
                        detailed expense tracking, and integrations with accounting software to streamline your business operations.
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
                        <h1 className="section1-title">Nos Comptes Bancaires</h1>
                    </div>
                </section>

                <section className="section2">
                    <div class="service-box">
                        <h3>Épargne de Base Chroma</h3>
                        <p>
                            Le compte Épargne de Base Chroma est conçu pour ceux qui veulent une manière simple et sans fioritures d'économiser de l'argent.
                            Sans frais mensuels et avec un taux d'intérêt compétitif, il est parfait pour les épargnants quotidiens.
                        </p>
                    </div>
                    <div class="service-box">
                        <h3>Épargne Premium Chroma</h3>
                        <p>
                            Pour ceux qui cherchent à maximiser leurs économies, le compte Épargne Premium Chroma offre des taux d'intérêt plus élevés et
                            des avantages supplémentaires tels que des services de conseil financier et un support client prioritaire.
                        </p>
                    </div>
                    <div class="service-box">
                        <h3>Compte Courant Chroma</h3>
                        <p>
                            Le compte Courant Chroma permet des transactions illimitées sans frais mensuels si un solde minimum est maintenu.
                            Profitez de la commodité de la banque en ligne, du dépôt de chèque mobile et des services de paiement de factures.
                        </p>
                    </div>
                    <div class="service-box">
                        <h3>Compte Étudiant Chroma</h3>
                        <p>
                            Conçu spécifiquement pour les étudiants, le compte Étudiant Chroma n'a pas de frais mensuels, des exigences de solde minimum faibles,
                            et un accès à un large réseau de distributeurs automatiques, facilitant ainsi la gestion des finances pour les étudiants.
                        </p>
                    </div>
                    <div class="service-box">
                        <h3>Compte Chroma Money Market</h3>
                        <p>
                            Le compte Chroma Money Market combine les avantages d'un compte d'épargne avec la flexibilité d'un compte courant.
                            Profitez de taux d'intérêt plus élevés sur des soldes plus importants et de privilèges d'écriture de chèques limités.
                        </p>
                    </div>
                    <div class="service-box">
                        <h3>Certificat de Dépôt (CD) Chroma</h3>
                        <p>
                            Fixez un taux d'intérêt avec un Certificat de Dépôt Chroma. Choisissez parmi diverses durées et profitez de rendements garantis
                            sur votre investissement, avec la sécurité de l'assurance FDIC.
                        </p>
                    </div>
                    <div class="service-box">
                        <h3>Compte Retraite Chroma (IRA)</h3>
                        <p>
                            Préparez votre avenir avec un compte de retraite Chroma. Nous offrons à la fois des IRA Traditionnels et Roth, offrant des avantages fiscaux
                            et une gamme d'options d'investissement pour vous aider à épargner pour la retraite.
                        </p>
                    </div>
                    <div class="service-box">
                        <h3>Compte Courant Professionnel Chroma</h3>
                        <p>
                            Gérez les finances de votre entreprise avec facilité grâce au compte Courant Professionnel Chroma. Profitez de fonctionnalités telles que des transactions illimitées,
                            un suivi détaillé des dépenses et des intégrations avec les logiciels de comptabilité pour simplifier les opérations de votre entreprise.
                        </p>
                    </div>
                </section>

                <section className="section3">
                </section>
            </div>

        );
    
    }

}

export default Account;
