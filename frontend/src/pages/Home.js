import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import TrustedBy from '../components/TrustedBy';
import UseCases from '../components/UseCases';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <TrustedBy />
      <UseCases />
      <Footer />
    </div>
  );
};

export default Home;
