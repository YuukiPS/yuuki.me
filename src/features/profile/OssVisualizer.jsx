import React, { useState, useEffect, useCallback } from 'react';
import SaoButton from '../../components/common/SaoButton';
import '../../styles/sao-animations.css';

const OssVisualizer = () => {
  const [isExecuting, setIsExecuting] = useState(false);
  const [activeStrikes, setActiveStrikes] = useState([]);
  const [showImpact, setShowImpact] = useState(false);

  // Defining the 11 stroke trajectories
  const strikes = [
    { id: 1, path: "M 20 80 Q 50 20 80 80", color: "#ffbefa", delay: 0 },
    { id: 2, path: "M 80 20 Q 50 80 20 20", color: "#fda1e1", delay: 100 },
    { id: 3, path: "M 10 50 L 90 50", color: "#ff3fa9", delay: 200 },
    { id: 4, path: "M 50 10 L 50 90", color: "#ffbefa", delay: 300 },
    { id: 5, path: "M 20 20 L 80 80", color: "#fda1e1", delay: 400 },
    { id: 6, path: "M 20 80 L 80 20", color: "#ff3fa9", delay: 500 },
    { id: 7, path: "M 30 10 C 10 50 90 50 70 90", color: "#ffbefa", delay: 600 },
    { id: 8, path: "M 70 10 C 90 50 10 50 30 90", color: "#fda1e1", delay: 700 },
    { id: 9, path: "M 10 30 L 90 70", color: "#ff3fa9", delay: 800 },
    { id: 10, path: "M 10 70 L 90 30", color: "#ffbefa", delay: 900 },
    // The final thrust (Crucifix)
    { id: 11, path: "M 50 0 L 50 100", color: "#c03a3a", delay: 1400, isFinal: true }
  ];

  const executeOss = useCallback(() => {
    if (isExecuting) return;
    
    setIsExecuting(true);
    setActiveStrikes([]);
    setShowImpact(false);

    strikes.forEach(strike => {
      setTimeout(() => {
        setActiveStrikes(prev => [...prev, strike.id]);
        
        if (strike.isFinal) {
          setShowImpact(true);
          setTimeout(() => {
            setIsExecuting(false);
            setShowImpact(false);
          }, 1500); // Reset after flash
        }
      }, strike.delay);
    });
  }, [isExecuting]);

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto text-center relative">
      
      {showImpact && <div className="oss-impact-flash"></div>}

      <h3 className="text-3xl font-header text-rosario-light mb-4">
        Original Sword Skill
      </h3>
      <h4 className="text-xl font-mono text-gray-400 mb-8 border-b border-sao-border pb-4 inline-block">
        Mother's Rosario (11-Hit)
      </h4>

      <div className="relative w-full max-w-md mx-auto aspect-square bg-zekken-obsidian/50 rounded flex items-center justify-center overflow-hidden border border-sao-border mb-8 shadow-inner shadow-rosario-light/10">
        
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-80 z-10 p-8" preserveAspectRatio="xMidYMid meet">
          {strikes.map((strike) => (
            activeStrikes.includes(strike.id) && (
              <path
                key={strike.id}
                d={strike.path}
                fill="none"
                stroke={strike.color}
                strokeWidth={strike.isFinal ? "6" : "3"}
                strokeLinecap="round"
                className="path-anim"
                style={{
                  filter: `drop-shadow(0 0 ${strike.isFinal ? '12px' : '4px'} ${strike.color})`
                }}
              />
            )
          ))}
        </svg>

        {/* Standby UI Element */}
        {!isExecuting && activeStrikes.length === 0 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-0">
             <div className="w-24 h-24 border border-dashed border-gray-600 rounded-full animate-spin-slow"></div>
             <span className="absolute text-sm font-mono text-gray-500 uppercase">System Ready</span>
          </div>
        )}
      </div>

      <SaoButton 
        onClick={executeOss} 
        disabled={isExecuting}
        variant="critical"
        className="w-48 h-12"
      >
        {isExecuting ? 'Executing...' : 'Execute OSS'}
      </SaoButton>

    </section>
  );
};

export default OssVisualizer;
