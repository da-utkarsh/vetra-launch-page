
import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="py-4 px-6 lg:px-10 flex items-center justify-between w-full bg-black/20 backdrop-blur-sm">
      <Logo />
      <div className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a>
        <a href="#stack" className="text-sm text-gray-400 hover:text-white transition-colors">Tech Stack</a>
        <a href="#video" className="text-sm text-gray-400 hover:text-white transition-colors">Demo</a>
      </div>
      <Button variant="outline" className="rounded-lg border-red-500 text-red-500 hover:bg-red-500/10">
        Get Started
      </Button>
    </nav>
  );
};

export default Navbar;
