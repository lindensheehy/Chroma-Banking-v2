import React from 'react';
import { useState, useEffect } from 'react';
import './Footer.css';

import { languageContainer, setLanguage, languageEventEmitter } from './Global.js';

function Footer() {

    const [languageState, setLanguageState] = useState(languageContainer.item);

    useEffect(() => {
        // Update local state when language changes
        const handleLanguageChange = (newLanguage) => {
            setLanguageState(newLanguage);
        };
    
        languageEventEmitter.on('languageChange', handleLanguageChange);
    
        return () => {
            languageEventEmitter.off('languageChange', handleLanguageChange); // Clean up the listener
        };

    }, []);

    function changeLanguage() {
        setLanguage(!languageContainer.item);
    }

    if (!languageContainer.item) {

        return (
            <footer class="footer">
                <div class="language-button-box">
                    <button onClick={changeLanguage} class="language-button">
                        Voir en Francais
                    </button>
                </div>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                </div>
                <div class="footer-lists">
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Data Usage</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">(123) 456-7890</a></li>
                        <li><a href="#">info@chromabanking.com</a></li>
                        <li><a href="#">1234 Crome St, Chroma City, A1B2C3</a></li>
                    </ul>
                </div>
            </footer>
        );

    }

    else {

        return (
            <footer class="footer">
                <div class="language-button-box">
                    <button onClick={changeLanguage} class="language-button">
                        View in English
                    </button>
                </div>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                </div>
                <div class="footer-lists">
                    <ul>
                        <li><a href="#">Politique de Confidentialité</a></li>
                        <li><a href="#">Conditions d'Utilisation</a></li>
                        <li><a href="#">L'Utilisation de Données</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">(123) 456-7890</a></li>
                        <li><a href="#">info@chromabanking.com</a></li>
                        <li><a href="#">1234 Rue Crome, Ville Chroma, A1B2C3</a></li>
                    </ul>
                </div>
            </footer>
        );

    }

}

export default Footer;