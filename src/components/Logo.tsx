
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center font-semibold text-2xl">
      <div className="w-8 h-8 mr-2 bg-gradient-to-r from-red-600 to-red-500 rounded-lg flex items-center justify-center text-white">
        V
      </div>
      <span>Vetra</span>
    </div>
  );
};

export default Logo;
