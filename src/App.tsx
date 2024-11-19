import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const isContactPage = window.location.pathname === '/contact';

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      {isContactPage ? (
        <Contact />
      ) : (
        <>
          <Hero />
          <Features />
          <Stats />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;