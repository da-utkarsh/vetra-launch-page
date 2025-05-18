
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="hero-gradient grid-bg min-h-[100vh] flex flex-col items-center justify-center text-center px-6 py-32 pt-40">
      <div className="space-y-4 max-w-3xl mx-auto">
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
      
      {/* Futuristic floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-red-700/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
    </section>
  );
};

export default Hero;
