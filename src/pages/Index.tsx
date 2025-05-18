
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Video from '../components/Video';
import TechStack from '../components/TechStack';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  // Simple reveal animation for sections when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('section-reveal');
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <TechStack />
      <Video />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
