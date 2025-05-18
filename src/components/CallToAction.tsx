
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const CallToAction: React.FC = () => {
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
    <section className="py-20 px-6 lg:px-10 bg-gradient-to-br from-red-800 to-red-950 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Development Experience?</h2>
        <p className="mb-8 text-red-200">
          Join thousands of developers who have already made the switch to the Vetra Tech Stack.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-red-800 hover:bg-red-50 px-8 py-6 rounded-lg text-base hover-link glow" data-cursor="hover">
            Get Started
          </Button>
          <Button className="bg-red-600 text-white hover:bg-red-700 border border-white px-8 py-6 rounded-lg text-base hover-link glow" data-cursor="hover">
            Read Documentation
          </Button>
        </div>
      </div>
      
      {/* Interactive background grid */}
      <div 
        className="absolute inset-0 pointer-events-auto"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-32" style={{
            backgroundImage: "linear-gradient(90deg, rgba(255,0,0,0.2) 1px, transparent 1px), linear-gradient(0deg, rgba(255,0,0,0.2) 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }}></div>
        </div>
        
        {/* Interactive glowing cubes */}
        {isHovering && (
          <div 
            className="glowing-cube absolute transition-all duration-300"
            style={{
              left: `${Math.floor(hoverPosition.x / 30) * 30}px`,
              top: `${Math.floor(hoverPosition.y / 30) * 30}px`,
              width: '30px',
              height: '30px',
              background: 'linear-gradient(135deg, rgba(255,120,120,0.4) 0%, rgba(255,50,50,0.2) 100%)',
              boxShadow: '0 0 15px 5px rgba(255,50,50,0.3)',
              borderRadius: '2px',
              opacity: 0.8
            }}
          />
        )}
      </div>
    </section>
  );
};

export default CallToAction;
