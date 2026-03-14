import React, { useState } from 'react';
import './index.css';
import SaoMenuSystem from './components/sao-ui/SaoMenuSystem';
import HeroSection from './features/profile/HeroSection';
import CombatGrid from './features/profile/CombatGrid';
import OssVisualizer from './features/profile/OssVisualizer';
import ProjectsSection from './features/profile/ProjectsSection';

function App() {
  const [activeSection, setActiveSection] = useState('profile');

  return (
    <div className="min-h-screen text-zekken-skin bg-transparent font-body selection:bg-rosario-base selection:text-white">
      
      {/* Fixed ALO Navigation Menu overlay */}
      <div className="fixed top-0 left-0 w-full md:w-80 h-auto md:h-full pointer-events-none z-50">
         {/* Reverting pointer-events so the menu is clickable */}
        <div className="pointer-events-auto h-auto md:h-full flex flex-col justify-start md:justify-center px-2 pt-2 md:p-0 md:pl-4 lg:pl-12 w-full md:w-80">
           <SaoMenuSystem onSectionChange={(section) => setActiveSection(section)} />
        </div>
      </div>

      {/* Main Content Area - Push content right to accommodate fixed menu on larger screens */}
      <main className="pt-24 md:pt-0 pl-4 md:pl-80 lg:pl-96 pr-4 md:pr-12 w-full transition-all duration-500 ease-in-out">
        
        {/* Dynamic Section Rendering */}
        <div className={`transition-opacity duration-500 ${activeSection === 'profile' ? 'opacity-100' : 'opacity-0 hidden'}`}>
           <HeroSection />
        </div>

        <div className={`transition-opacity duration-500 pt-24 ${activeSection === 'combat' ? 'opacity-100' : 'opacity-0 hidden'}`}>
           <CombatGrid />
        </div>

         <div className={`transition-opacity duration-500 pt-24 ${activeSection === 'oss' ? 'opacity-100' : 'opacity-0 hidden'}`}>
           <OssVisualizer />
        </div>

        <div className={`transition-opacity duration-500 pt-24 ${activeSection === 'projects' ? 'opacity-100' : 'opacity-0 hidden'}`}>
           <ProjectsSection />
        </div>

      </main>

      {/* Persistent Footer Graphic */}
      <footer className="fixed bottom-0 w-full text-center py-4 z-40 bg-gradient-to-t from-zekken-obsidian to-transparent pointer-events-none">
         <p className="text-xs font-mono text-gray-500 tracking-widest uppercase">
           «The Sleeping Knights» · ALfheim Online Memorial Server
         </p>
      </footer>
    </div>
  );
}

export default App;
