import React from 'react';
import GlassPanel from '../../components/common/GlassPanel';

const CombatGrid = () => {
  const stats = [
    { label: 'Epithet', value: 'Absolute Sword (Zekken)' },
    { label: 'Guild Affiliation', value: 'Sleeping Knights (Leader)' },
    { label: 'Duel Record', value: '67 W - 0 L', isCritical: true },
    { label: 'Primary Armament', value: 'Obsidian Sword' },
    { label: 'Original Sword Skill', value: 'Mother\'s Rosario (11 Hit)' }
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h3 className="text-3xl font-header text-zekken-skin mb-8 border-b border-sao-border pb-2 inline-flex items-center">
        <span className="w-3 h-3 bg-rosario-base rotate-45 mr-4"></span>
        System Diagnostics // Combat Data
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <GlassPanel 
            key={index}
            className="flex flex-col justify-center border-l-4 border-l-zekken-tunic relative overflow-hidden group"
          >
            {/* Background scanning effect on hover */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-zekken-tunic/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>

            <span className="text-sm text-gray-400 font-mono uppercase tracking-wider mb-2 relative z-10">
              {stat.label}
            </span>
            <span className={`text-xl font-mono font-bold tracking-tight relative z-10 ${stat.isCritical ? 'text-rosario-critical drop-shadow-[0_0_8px_rgba(192,58,58,0.8)]' : 'text-zekken-skin'}`}>
              {stat.value}
            </span>
          </GlassPanel>
        ))}
      </div>
    </section>
  );
};

export default CombatGrid;
