
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-10 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Development Experience?</h2>
        <p className="mb-8 text-blue-100">
          Join thousands of developers who have already made the switch to the Vetra Tech Stack.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-6 rounded-lg text-base">
            Get Started
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-lg text-base">
            Read Documentation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
