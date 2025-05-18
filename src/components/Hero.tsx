
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Get relative position in the grid
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setHoverPosition({ x, y });
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section className="hero-gradient grid-bg min-h-[100vh] flex flex-col items-center justify-center text-center px-6 py-32 pt-40 relative overflow-hidden">
      <div className="space-y-4 max-w-3xl mx-auto relative z-10">
        <div className="inline-block px-3 py-1 rounded-full bg-red-900/40 text-red-200 text-xs font-medium mb-4 glow">
          Introducing Vetra Tech Stack
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gradient-animated">
          The Complete Developer Ecosystem
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-6">
          A high-performance, developer-centric suite designed to streamline your workflow and accelerate development.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Button className="cta-button flex items-center gap-2 px-8 py-6 text-base hover-link glow" data-cursor="hover">
            Explore Vetra <ArrowRight size={16} />
          </Button>
          <Button className="bg-red-600 text-white hover:bg-red-700 border border-white px-8 py-6 text-base rounded-lg glow hover-link" data-cursor="hover">
            View Documentation
          </Button>
        </div>
      </div>
      
      {/* Interactive background grid with floating elements */}
      <div 
        className="interactive-grid absolute inset-0 overflow-hidden pointer-events-auto"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Static floating elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-red-700/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Interactive glowing cube */}
        {isHovering && (
          <div 
            className="glowing-cube absolute transition-all duration-300"
            style={{
              left: `${Math.floor(hoverPosition.x / 40) * 40}px`,
              top: `${Math.floor(hoverPosition.y / 40) * 40}px`,
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, rgba(255,0,0,0.3) 0%, rgba(255,50,50,0.1) 100%)',
              boxShadow: '0 0 20px 5px rgba(255,0,0,0.3)',
              borderRadius: '4px',
              zIndex: 5,
              opacity: 0.8
            }}
          />
        )}
        
        {/* Animated cubes that appear randomly on hover */}
        {isHovering && Array.from({ length: 5 }).map((_, index) => {
          const offsetX = Math.random() * 200 - 100;
          const offsetY = Math.random() * 200 - 100;
          const size = 20 + Math.random() * 30;
          const opacity = 0.1 + Math.random() * 0.3;
          
          return (
            <div 
              key={index}
              className="animated-cube absolute transition-all duration-700 animate-pulse"
              style={{
                left: `${hoverPosition.x + offsetX}px`,
                top: `${hoverPosition.y + offsetY}px`,
                width: `${size}px`,
                height: `${size}px`,
                background: 'linear-gradient(135deg, rgba(255,0,0,0.2) 0%, rgba(255,50,50,0.05) 100%)',
                boxShadow: '0 0 10px 2px rgba(255,0,0,0.2)',
                borderRadius: '2px',
                opacity: opacity,
                animationDelay: `${index * 0.2}s`
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
