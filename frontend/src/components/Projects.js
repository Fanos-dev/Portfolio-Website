import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, GamepadIcon, Mountain, Gamepad2, ArrowRight, Zap, Database } from 'lucide-react';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 'echoes-of-fate',
      title: 'EchoesOfFate',
      summary: 'A narrative-based quiz game built in C++ using SFML and sfeMovie. Integrates video, sound, and object-oriented design.',
      tech: ['C++', 'SFML', 'sfeMovie'],
      github: 'https://github.com/Fanos-dev/EchoesOfFate',
      icon: GamepadIcon,
      category: ['University Project', 'Game Development'],
      color: 'from-purple-500/20 to-blue-500/20'
    },
    {
      id: 'pos-inventory-system',
      title: 'POS & Inventory Management System',
      summary: 'Desktop app for a restaurant, developed in C# and SQL Server. Automates order processing, inventory tracking, and report generation.',
      tech: ['C#', 'SQL Server', 'WinForms', 'Crystal Reports'],
      github: 'https://github.com/Fanos-dev',
      icon: Database,
      category: ['Desktop Application'],
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 'terrain-generation',
      title: 'Terrain Generation',
      summary: 'Procedural terrain generation tool built in Unity using Perlin noise to simulate realistic landscapes.',
      tech: ['Unity', 'C#', 'Perlin Noise'],
      github: 'https://github.com/Fanos-dev/TerrainGeneration',
      icon: Mountain,
      category: ['Game Development'],
      color: 'from-green-500/20 to-teal-500/20'
    },
    {
      id: 'lava',
      title: 'Lava',
      summary: 'A fast-paced 2D survival platformer made for a game jam. Players must escape rising lava while navigating obstacles.',
      tech: ['Unity', 'C#', 'Game Jam'],
      link: 'https://fanosgames.itch.io/lava',
      icon: Zap,
      category: ['Game Jam'],
      color: 'from-red-500/20 to-orange-500/20'
    },
    {
      id: 'the-beyond',
      title: 'The Beyond',
      summary: 'Atmospheric exploration game created for a game jam. Explore an alien world with minimalist visuals and immersive sound.',
      tech: ['Unity', 'C#', 'Audio Design'],
      link: 'https://fanosgames.itch.io/the-beyond',
      icon: Gamepad2,
      category: ['Game Jam'],
      color: 'from-indigo-500/20 to-purple-500/20'
    },
  ];

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="projects" className="py-20 section-glow">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="display-md mb-6 text-white">Featured Projects</h2>
            <p className="body-lg max-w-2xl mx-auto text-gray-400">
              A showcase of my work spanning game development, desktop applications, 
              and creative problem-solving through code.
            </p>
          </div>

          {/* Projects Grid - Left to Right, Top to Bottom */}
          <div className="projects-grid">
            {projects.map((project) => {
              const IconComponent = project.icon;
              
              return (
                <div 
                  key={project.id} 
                  className="project-card group"
                  onClick={() => handleProjectClick(project.id)}
                >
                  {/* Image Placeholder */}
                  <div className="relative mb-6 aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center mx-auto mb-3 glow-icon`}>
                          <IconComponent size={32} className="text-blue-300" />
                        </div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Project Screenshot</p>
                      </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight size={20} className="text-blue-300" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 flex flex-col">

                    {/* Category Badge */}
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-2">
                        {project.category.slice(0, 3).map((category, categoryIndex) => (
                          <span 
                            key={categoryIndex}
                            className="inline-block px-3 py-1 bg-blue-300/10 border border-blue-300/20 rounded-full text-xs text-blue-300 font-medium"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Title and Summary */}
                    <div className="mb-4 flex-1">
                      <h3 className="h2 mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="body-sm text-gray-400 leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-gray-800/60 border border-gray-700 rounded-lg text-xs text-gray-300 hover:border-blue-300/50 transition-colors backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-3 py-1 bg-blue-300/10 border border-blue-300/30 rounded-lg text-xs text-blue-300">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Project Links Preview */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                      <div className="flex space-x-3">
                        {project.github && (
                          <div className="w-8 h-8 bg-gray-800/60 rounded-lg flex items-center justify-center">
                            <Github size={16} className="text-gray-400" />
                          </div>
                        )}
                        {project.link && (
                          <div className="w-8 h-8 bg-gray-800/60 rounded-lg flex items-center justify-center">
                            <ExternalLink size={16} className="text-gray-400" />
                          </div>
                        )}
                      </div>
                      <div className="text-xs text-blue-300 group-hover:text-blue-200 transition-colors">
                        View Details →
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-20 bg-gradient-to-r from-blue-300/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              );
            })}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-16">
            <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-gray-900/40 to-gray-800/40 border border-gray-700/50 backdrop-blur-sm">
              <p className="body-lg text-gray-300 mb-6">
                Interested in seeing more of my work and contributions?
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://github.com/Fanos-dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Github size={20} />
                  GitHub Profile
                </a>
                <a 
                  href="https://fanosgames.itch.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <ExternalLink size={20} />
                  itch.io Games
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;