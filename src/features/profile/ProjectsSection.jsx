import React from 'react';
import GlassPanel from '../../components/common/GlassPanel';
import SaoButton from '../../components/common/SaoButton';

const ProjectsSection = () => {
  const projects = [
    {
      name: 'YuukiPS',
      description: 'Private Server Project providing custom game experiences.',
      url: 'https://ps-new.yuuki.me/',
      variant: 'primary',
    },
    {
      name: 'YuukiTV',
      description: 'Media tracking and streaming community platform.',
      url: 'https://tv.yuuki.me/',
      variant: 'secondary',
    }
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h3 className="text-3xl font-header text-zekken-skin mb-8 border-b border-sao-border pb-2 inline-flex items-center">
        <span className="w-3 h-3 bg-rosario-base rotate-45 mr-4"></span>
        System Diagnostics // Active Projects
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <GlassPanel 
            key={index}
            className="flex flex-col p-6 border-l-4 border-l-rosario-base relative overflow-hidden group hover:border-l-rosario-light transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Background scanning effect on hover */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-zekken-tunic/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300 pointer-events-none"></div>

            <h4 className="text-2xl font-header text-zekken-skin mb-2 relative z-10">
              {project.name}
            </h4>
            
            <p className="text-gray-300 font-body mb-6 relative z-10 flex-grow">
              {project.description}
            </p>
            
            <div className="mt-auto relative z-10">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
                <SaoButton variant={project.variant} className="w-full flex justify-center items-center shadow-lg">
                  Access {project.name}
                </SaoButton>
              </a>
            </div>
          </GlassPanel>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
