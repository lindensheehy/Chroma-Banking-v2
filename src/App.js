import Header from "./components/Header";
import Footer from "./components/Footer";
import PageSelector from "./components/PageSelector";
import { useState, useEffect } from 'react';
import './App.css';

import { pageContainer, pageEventEmitter } from "./components/Global";

function App() {

  return (
    <div className="App">

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

      <Header />
      <PageSelector />
      <Footer />
      
    </div>
  );

}

export default App;
