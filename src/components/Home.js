import React from 'react';
import HeroSection from './HeroSection';
import './HeroSection.css';
import Cards from './Cards';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
