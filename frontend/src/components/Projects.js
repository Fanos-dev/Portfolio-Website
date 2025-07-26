import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, GamepadIcon, Mountain, Gamepad2, ArrowRight } from 'lucide-react';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 'echoes-of-fate',
      title: 'EchoesOfFate',
      subtitle: 'Story-Driven Quiz Game',
      description: 'A narrative-driven quiz game developed with a team of 11 for a university module. Combines video, audio, and interactive UI using object-oriented principles.',
      shortDescription: 'Interactive story-driven quiz game with multimedia elements',
      tech: ['C++', 'SFML', 'sfeMovie'],
      github: 'https://github.com/Fanos-dev/EchoesOfFate',
      icon: GamepadIcon,
      featured: true,
      color: 'from-blue-600/20 to-purple-600/20'
    },
    {
      id: 'terrain-generation',
      title: 'Terrain Generation Project',
      subtitle: 'Procedural Landscape System',
      description: 'Procedural terrain generation system built in Unity, focused on realistic landscapes using Perlin noise and other algorithms.',
      shortDescription: 'Unity-based procedural terrain generation using advanced algorithms',
      tech: ['Unity', 'C#', 'Perlin Noise'],
      github: 'https://github.com/Fanos-dev/TerrainGeneration',
      icon: Mountain,
      featured: true,
      color: 'from-green-600/20 to-teal-600/20'
    },
    {
      id: 'game-jam-portfolio',
      title: 'Game Jam Portfolio',
      subtitle: 'Collection of Experimental Games',
      description: 'A collection of games built solo or with teams for various game jams. Includes platformers, puzzle games, and experimental titles.',
      shortDescription: 'Diverse collection of games created during competitive game jams',
      tech: ['Unity', 'C#', 'Game Design'],
      link: 'https://fanosgames.itch.io',
      icon: Gamepad2,
      featured: false,
      color: 'from-purple-600/20 to-pink-600/20'
    },
    {
      id: 'web-applications',
      title: 'Web Applications',
      subtitle: 'Full-Stack Development',
      description: 'Various web applications built using modern technologies including React, Node.js, and databases.',
      shortDescription: 'Modern web applications with responsive design and user-friendly interfaces',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/Fanos-dev',
      icon: ExternalLink,
      featured: false,
      color: 'from-cyan-600/20 to-blue-600/20'
    }
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
              A showcase of my work in game development, systems programming, 
              and creative problem-solving through code.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {projects.map((project) => {
              const IconComponent = project.icon;
              
              return (
                <div 
                  key={project.id} 
                  className="project-card group"
                  onClick={() => handleProjectClick(project.id)}
                >
                  {/* Project Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center glow-icon`}>
                      <IconComponent size={32} className="text-cyan-400" />
                    </div>
                    <div className="flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium mr-2">View Details</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="h2 mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="body-md text-cyan-400 mb-3 font-medium">
                        {project.subtitle}
                      </p>
                      <p className="body-sm text-gray-400 line-clamp-3">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6 flex-1">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-gray-800/60 border border-gray-700 rounded-lg text-xs text-gray-300 hover:border-cyan-400/50 transition-colors backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded-lg text-xs text-cyan-400">
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
                      <div className="text-xs text-gray-500 uppercase tracking-wide">
                        {project.featured ? 'Featured' : 'Project'}
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-20 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              );
            })}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-16">
            <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-gray-800/40 to-gray-900/40 border border-gray-700/50 backdrop-blur-sm">
              <p className="body-lg text-gray-300 mb-6">
                Interested in seeing more of my work and contributions?
              </p>
              <a 
                href="https://github.com/Fanos-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Github size={20} />
                Explore My GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;