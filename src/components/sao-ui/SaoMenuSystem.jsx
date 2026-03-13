import React, { useState, useCallback } from 'react';
import '../../styles/sao-animations.css';
import GlassPanel from '../common/GlassPanel';
import { FaUserCircle, FaCrosshairs, FaScroll, FaChevronRight } from 'react-icons/fa';

const SaoMenuSystem = ({ onSectionChange }) => {
  const [activeDepth, setActiveDepth] = useState(0);
  const [selectedNode, setSelectedNode] = useState(null);

  // Define our menu structure locally for this component
  const menuNodes = [
    { id: 'profile', label: 'Player Data', icon: <FaUserCircle className="inline mr-3" /> },
    { id: 'combat', label: 'Combat Records', icon: <FaCrosshairs className="inline mr-3" /> },
    { id: 'oss', label: 'Original Sword Skill', icon: <FaScroll className="inline mr-3" /> },
  ];

  const handleNodeInteraction = useCallback((node) => {
    setSelectedNode(node.id);
    setActiveDepth(1);
    
    // Pass the selection up to the parent App component to switch views
    if(onSectionChange) {
      onSectionChange(node.id);
    }
  }, [onSectionChange]);

  return (
    <div className="sao-menu-viewport flex relative z-40 p-4 md:p-8">
      <nav className="bg-sao-glass backdrop-blur-md rounded-lg text-zekken-skin font-header border border-sao-border shadow-lg sao-glass-panel">
        <ul className="flex flex-col w-56 md:w-64">
          <li className="px-6 py-4 border-b border-sao-border bg-zekken-hair/50 rounded-t-lg">
             <span className="text-sm text-gray-300 font-mono tracking-widest uppercase">System Menu</span>
          </li>
          {menuNodes.map(node => (
            <li 
              key={node.id} 
              onClick={() => handleNodeInteraction(node)}
              className={`
                cursor-pointer hover:bg-zekken-tunic transition-colors duration-200 px-6 py-4 
                border-b border-sao-border last:border-b-0 text-xl tracking-wide flex justify-between items-center group
                ${selectedNode === node.id ? 'bg-zekken-hair border-l-4 border-l-rosario-base' : ''}
              `}
            >
              <span>{node.icon}{node.label}</span>
              <FaChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity text-rosario-light text-sm" />
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Decorative floating UI elements mimicking ALO */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-zekken-tunic/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-rosario-base/20 rounded-full blur-2xl -z-10"></div>
    </div>
  );
};

export default SaoMenuSystem;
