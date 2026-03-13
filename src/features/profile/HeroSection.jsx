import React from 'react';
import '../../styles/sao-animations.css';

const HeroSection = () => {
  return (
    <div className="relative min-h-[70vh] flex flex-col items-center justify-center pt-20 overflow-hidden">
      
      {/* Background Graphic Accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zekken-hair/30 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-rosario-base/20 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="z-10 text-center max-w-4xl px-4 flex flex-col md:flex-row items-center gap-10">
        
        {/* Avatar Graphic with CSS Levitation */}
        <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
                {/* Simulated ALO "Wings" glow behind avatar */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-zekken-tunic/20 blur-3xl rounded-full"></div>
                <img 
                    src="/src/assets/zekken-avatar.png" 
                    alt="Konno Yuuki - Absolute Sword" 
                    className="max-h-[60vh] object-contain animate-levitate drop-shadow-2xl relative z-10"
                />
            </div>
        </div>

        {/* Narrative Text */}
        <div className="w-full md:w-1/2 text-left flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-header text-zekken-skin mb-4 uppercase tracking-wider">
            Konno Yuuki
          </h1>
          <h2 className="text-2xl text-rosario-light font-mono mb-8 border-b border-sao-border pb-2 inline-block">
            « Absolute Sword »
          </h2>
          
          <blockquote className="text-xl md:text-2xl font-body italic leading-relaxed text-gray-200 sao-glass-panel p-6 rounded-lg bg-sao-glass backdrop-blur-md">
            "I'd like my last pages of life to be the memories I made with you."
          </blockquote>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
