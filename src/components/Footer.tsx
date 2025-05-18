
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 lg:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <Logo />
          <div className="flex items-center gap-8 mt-6 md:mt-0">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">GitHub</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Twitter</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Discord</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Blog</a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Vetra. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="text-xs text-gray-500 hover:text-gray-700">Terms</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-700">Privacy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-700">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
