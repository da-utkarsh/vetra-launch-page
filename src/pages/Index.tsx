
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
  
  // Custom cursor logic
  useEffect(() => {
    // Add cursor elements to the DOM
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);
    
    const cursorOutline = document.createElement('div');
    cursorOutline.className = 'cursor-outline';
    document.body.appendChild(cursorOutline);
    
    // Set cursor visibility after small delay
    setTimeout(() => {
      document.body.classList.add('cursor-visible');
    }, 500);
    
    // Function to animate the cursor
    const positionCursor = (e: MouseEvent) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;
      
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      cursorOutline.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }
    
    window.addEventListener('mousemove', positionCursor);
    
    // Add hover effect for links and buttons
    const hoverElements = document.querySelectorAll('.hover-link, a, button');
    
    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursorOutline.classList.add('hover');
      });
      element.addEventListener('mouseleave', () => {
        cursorOutline.classList.remove('hover');
      });
    });
    
    return () => {
      window.removeEventListener('mousemove', positionCursor);
      document.body.removeChild(cursorDot);
      document.body.removeChild(cursorOutline);
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
