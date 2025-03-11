import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app" dir="rtl" lang="fa">
      <Header />
      <Hero />
      <Intro />
      <Pricing />
      <Features />
      <Footer />
    </div>
  );
}

export default App;