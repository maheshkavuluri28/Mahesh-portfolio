import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg')`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex-1 max-w-2xl">
          <div className="text-sm text-red-500 font-medium mb-4 tracking-wider uppercase">
            UI/UX Designer
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-red-500">Mahesh</span>
          </h1>
          <h2 className="text-3xl md:text-4xl text-gray-300 mb-8">
            From India
          </h2>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
            I'm a passionate UI/UX designer creating beautiful and functional digital experiences. 
            Let's work together to bring your ideas to life.
          </p>
          <button 
            onClick={scrollToNext}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
        
        {/* Profile Image */}
        <div className="hidden lg:block flex-1 flex justify-end">
          <div className="relative">
            <div className="w-96 h-96 rounded-full bg-gradient-to-br from-red-500/20 to-transparent p-1">
              <img
                src="/DSC_1784_11zon-photoaidcom-cropped_11zon.jpg"
                alt="Mahesh"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-red-500 transition-colors duration-300"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;