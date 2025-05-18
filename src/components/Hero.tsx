
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="hero-gradient min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-20">
      <div className="space-y-4 max-w-3xl mx-auto">
        <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium mb-4">
          Introducing Vetra Tech Stack
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          The Complete Developer Ecosystem
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
          A high-performance, developer-centric suite designed to streamline your workflow and accelerate development.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Button className="cta-button flex items-center gap-2 px-8 py-6 text-base">
            Explore Vetra <ArrowRight size={16} />
          </Button>
          <Button variant="outline" className="px-8 py-6 text-base rounded-lg">
            View Documentation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
