import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProperties from '../components/home/FeaturedProperties';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import CtaSection from '../components/home/CtaSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProperties />
      <Stats />
      <Testimonials />
      <CtaSection />
    </div>
  );
};

export default Home;