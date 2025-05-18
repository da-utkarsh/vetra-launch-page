
import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="py-4 px-6 lg:px-10 flex items-center justify-between w-full bg-black/20 backdrop-blur-sm fixed top-0 z-50 border-b border-red-900/20">
      <Logo />
      <div className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors hover-link" data-cursor="hover">Features</a>
        <a href="#stack" className="text-sm text-gray-400 hover:text-white transition-colors hover-link" data-cursor="hover">Tech Stack</a>
        <a href="#video" className="text-sm text-gray-400 hover:text-white transition-colors hover-link" data-cursor="hover">Demo</a>
      </div>
      <Button variant="outline" className="rounded-lg border-red-500 text-red-500 hover:bg-red-500/10 glow hover-link" data-cursor="hover">
        Get Started
      </Button>
    </nav>
  );
};

export default Navbar;
