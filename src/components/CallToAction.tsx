
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction: React.FC = () => {
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
      
      {/* Futuristic background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-32" style={{
            backgroundImage: "linear-gradient(90deg, rgba(255,0,0,0.2) 1px, transparent 1px), linear-gradient(0deg, rgba(255,0,0,0.2) 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }}></div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
