import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© 2024 Mahesh. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Mahesh</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;