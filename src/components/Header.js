import React from 'react';
import { useState, useEffect } from 'react';
import './Header.css';

import { languageContainer, languageEventEmitter } from './Global.js';
import { pageContainer, setPage, pageEventEmitter } from './Global.js';

function Header() {

  const [language, setLanguageState] = useState();
  const [page, setPageState] = useState(pageContainer.item);

  useEffect(() => {
    const handleLanguageChange = (newLanguage) => {
      setLanguageState(newLanguage);
    };

    languageEventEmitter.on('languageChange', handleLanguageChange);

    return () => {
      languageEventEmitter.off('languageChange', handleLanguageChange);
    };
  }, []);

  useEffect(() => {
    const handlePageChange = (newPage) => {
      setPageState(newPage);
    };

    pageEventEmitter.on('pageChange', handlePageChange);

    return () => {
      pageEventEmitter.off('pageChange', handlePageChange);
    };
  }, []);

  function changePage(to) {
    setPage(to);
  }

  if (!languageContainer.item) {

    return (
      <header className="Header">
        <div className="Header-left">
          <h1 onClick={() => changePage(0)} className="Header-title">Chroma Banking</h1>
        </div>
        <div className="Header-right">
          
          <div className="Header-subtitle-box">
            <span onClick={() => changePage(2)} className="Header-subtitle">Our Method</span>
          </div>

          <div className="Header-subtitle-box">
            <span onClick={() => changePage(3)} className="Header-subtitle">Credit Cards</span>
          </div>

          <div className="Header-subtitle-box">
            <span onClick={() => changePage(4)} className="Header-subtitle">Accounts</span>
          </div>

          <div className="Header-button-box">
            <button onClick={() => changePage(1)} className="Header-button">Log In</button>
          </div>

        </div>
      </header>
    );

  }

  else {

    return (
      <header className="Header">
        <div className="Header-left">
          <h1 onClick={() => changePage(0)} className="Header-title">Chroma Banking</h1>
        </div>
        <div className="Header-right">
          
          <div className="Header-subtitle-box">
            <span onClick={() => changePage(2)} className="Header-subtitle">Notre méthode</span>
          </div>

          <div className="Header-subtitle-box">
            <span onClick={() => changePage(3)} className="Header-subtitle">Cartes de Crédit</span>
          </div>

          <div className="Header-subtitle-box">
            <span onClick={() => changePage(4)} className="Header-subtitle">Comptes</span>
          </div>

          <div className="Header-button-box">
            <button onClick={() => changePage(1)} className="Header-button">Se Connecter</button>
          </div>

        </div>
      </header>
    );

  }

}

export default Header;