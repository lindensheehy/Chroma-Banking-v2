import { useState, useEffect } from 'react';
import './LogIn.css';

import { languageContainer, languageEventEmitter } from './Global.js';

function LogIn() {

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
                        <h1 className="section1-title">Create an Account</h1>
                    </div>

                </section>

                <section className="section2">

                    <p class="section2-text2"><strong>Welcome to Chroma Banking!</strong> Before you start managing your finances with us, please create an account to get access to our innovative banking tools and personalized financial guidance.</p>

                    <div class="seperator"/>

                    <p class="section2-text2"><strong>Why Create an Account?</strong></p>
                    <ul class="section2-text2">
                        <li><strong>Personalized Experience:</strong> Tailor your banking experience with recommendations and insights based on your financial habits.</li>
                        <li><strong>Secure Access:</strong> Enjoy secure access to your account with our advanced encryption and security measures.</li>
                        <li><strong>Manage Your Finances:</strong> Track your spending, set savings goals, and explore investment opportunities all in one place.</li>
                        <li><strong>24/7 Support:</strong> Get help whenever you need it with our dedicated customer support team available around the clock.</li>
                    </ul>
                    
                    <div class="seperator"/>
                    
                    <p class="section2-text2"><strong>How to Get Started:</strong></p>
                    <ol class="section2-text2">
                        <li><strong>Fill Out the Form:</strong> Enter your details in the form below to create your account.</li>
                        <li><strong>Verify Your Email:</strong> Check your email for a verification link to confirm your account.</li>
                        <li><strong>Set Up Your Profile:</strong> Complete your profile with additional information to get started.</li>
                    </ol>

                    <div class="seperator"/>
                    
                    <p class="section2-text2">We’re excited to have you join us and look forward to helping you achieve your financial goals!</p>

                </section>

                <section className="section3">

                <form action="/submit-signup" method="POST">
                    <div class="form-group">
                        <div class="form-label">
                            <label for="firstName">First Name:</label>
                        </div>
                        <div class="form-input">
                            <input type="text" id="firstName" name="firstName" required/>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <div class="form-label">
                            <label for="lastName">Last Name:</label>
                        </div>
                        <div class="form-input">
                            <input type="text" id="lastName" name="lastName" required/>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <div class="form-label">
                            <label for="email">Email Address:</label>
                        </div>
                        <div class="form-input">
                            <input type="email" id="email" name="email" required/>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <div class="form-label">
                            <label for="password">Password:</label>
                        </div>
                        <div class="form-input">
                            <input type="password" id="password" name="password" required/>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <div class="form-label">
                            <label for="confirmPassword">Confirm Password:</label>
                        </div>
                        <div class="form-input">
                            <input type="password" id="confirmPassword" name="confirmPassword" required/>
                        </div>
                    </div>
                    
                    <div class="section1-button-box">
                        <button type="submit" class="section1-button">Create Account</button>
                    </div>
                </form>

                </section>
            </div>
        );

    }

    else {
        
        return (

            <div>
                <section className="section1">
                
                    <div className="section1-title-box-pushedup">
                        <h1 className="section1-title">Créer un Compte</h1>
                    </div>

                </section>

                <section className="section2">

                    <p class="section2-text2"><strong>Bienvenue chez Chroma Banking !</strong> Avant de commencer à gérer vos finances avec nous, veuillez créer un compte pour accéder à nos outils bancaires innovants et à des conseils financiers personnalisés.</p>

                    <div class="seperator"/>

                    <p class="section2-text2"><strong>Pourquoi Créer un Compte ?</strong></p>
                    <ul class="section2-text2">
                        <li><strong>Expérience Personnalisée :</strong> Personnalisez votre expérience bancaire avec des recommandations et des insights basés sur vos habitudes financières.</li>
                        <li><strong>Accès Sécurisé :</strong> Profitez d’un accès sécurisé à votre compte grâce à nos mesures avancées de cryptage et de sécurité.</li>
                        <li><strong>Gérez Vos Finances :</strong> Suivez vos dépenses, définissez des objectifs d’épargne et explorez les opportunités d’investissement, tout en un seul endroit.</li>
                        <li><strong>Assistance 24/7 :</strong> Obtenez de l'aide à tout moment grâce à notre équipe de support client disponible 24 heures sur 24.</li>
                    </ul>
                    
                    <div class="seperator"/>
                    
                    <p class="section2-text2"><strong>Comment Commencer :</strong></p>
                    <ol class="section2-text2">
                        <li><strong>Remplissez le Formulaire :</strong> Entrez vos informations dans le formulaire ci-dessous pour créer votre compte.</li>
                        <li><strong>Vérifiez Votre Email :</strong> Vérifiez votre email pour un lien de vérification afin de confirmer votre compte.</li>
                        <li><strong>Complétez Votre Profil :</strong> Complétez votre profil avec des informations supplémentaires pour commencer.</li>
                    </ol>

                    <div class="seperator"/>
                    
                    <p class="section2-text2">Nous sommes ravis de vous accueillir parmi nous et nous nous réjouissons de vous aider à atteindre vos objectifs financiers !</p>

                </section>

                <section className="section3">

                <form action="/submit-signup" method="POST">
                    <div class="form-group">
                        <div class="form-label">
                            <label for="firstName">Prénom :</label>
                        </div>
                        <div class="form-input">
                            <input type="text" id="firstName" name="firstName" required/>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <div class="form-label">
                            <label for="lastName">Nom :</label>
                        </div>
                        <div class="form-input">
                            <input type="text" id="lastName" name="lastName" required/>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <div class="form-label">
                            <label for="email">Adresse Email :</label>
                        </div>
                        <div class="form-input">
                            <input type="email" id="email" name="email" required/>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <div class="form-label">
                            <label for="password">Mot de Passe :</label>
                        </div>
                        <div class="form-input">
                            <input type="password" id="password" name="password" required/>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <div class="form-label">
                            <label for="confirmPassword">Confirmer le Mot de Passe :</label>
                        </div>
                        <div class="form-input">
                            <input type="password" id="confirmPassword" name="confirmPassword" required/>
                        </div>
                    </div>
                    
                    <div class="section1-button-box">
                        <button type="submit" class="section1-button">Créer un Compte</button>
                    </div>
                </form>

                </section>
            </div>

        );

    }

}

export default LogIn;
