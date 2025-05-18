
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 lg:px-10 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <Logo />
          <div className="flex items-center gap-8 mt-6 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-white hover-link" data-cursor="hover">GitHub</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white hover-link" data-cursor="hover">Twitter</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white hover-link" data-cursor="hover">Discord</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white hover-link" data-cursor="hover">Blog</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Vetra. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 hover-link" data-cursor="hover">Terms</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 hover-link" data-cursor="hover">Privacy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 hover-link" data-cursor="hover">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
