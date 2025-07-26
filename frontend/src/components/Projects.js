import React from 'react';
import { ExternalLink, Github, GamepadIcon, Mountain, Gamepad2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'EchoesOfFate',
      subtitle: 'Story-Driven Quiz Game',
      description: 'A narrative-driven quiz game developed with a team of 11 for a university module. Combines video, audio, and interactive UI using object-oriented principles.',
      tech: ['C++', 'SFML', 'sfeMovie'],
      github: 'https://github.com/Fanos-dev/EchoesOfFate',
      icon: GamepadIcon,
      featured: true
    },
    {
      id: 2,
      title: 'Terrain Generation Project',
      subtitle: 'Procedural Landscape System',
      description: 'Procedural terrain generation system built in Unity, focused on realistic landscapes using Perlin noise and other algorithms.',
      tech: ['Unity', 'C#', 'Perlin Noise'],
      github: 'https://github.com/Fanos-dev/TerrainGeneration',
      icon: Mountain,
      featured: true
    },
    {
      id: 3,
      title: 'Game Jam Portfolio',
      subtitle: 'Collection of Experimental Games',
      description: 'A collection of games built solo or with teams for various game jams. Includes platformers, puzzle games, and experimental titles.',
      tech: ['Unity', 'C#', 'Game Design'],
      link: 'https://fanosgames.itch.io',
      icon: Gamepad2,
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20">
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
          <div className="space-y-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={project.id} 
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Project Image/Icon */}
                  <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="relative group">
                      <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700 group-hover:border-yellow-400/50 transition-all duration-300">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/30 transition-colors">
                            <IconComponent size={40} className="text-yellow-400" />
                          </div>
                          <p className="text-gray-400 body-sm">Project Preview</p>
                        </div>
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400/20 rounded-full group-hover:bg-yellow-400/40 transition-colors"></div>
                      <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-blue-400/10 rounded-full group-hover:bg-blue-400/20 transition-colors"></div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="space-y-6">
                      {/* Project Header */}
                      <div>
                        <h3 className="h1 mb-2 text-white">{project.title}</h3>
                        <p className="h3 text-yellow-400 mb-4">{project.subtitle}</p>
                        <p className="body-md text-gray-400">{project.description}</p>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="body-md font-semibold text-white mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300 hover:border-yellow-400/50 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Project Links */}
                      <div className="flex space-x-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                          >
                            <Github size={20} />
                            View Code
                          </a>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                          >
                            <ExternalLink size={20} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-16">
            <p className="body-lg text-gray-400 mb-6">
              Interested in seeing more of my work?
            </p>
            <a 
              href="https://github.com/Fanos-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Github size={20} />
              Visit My GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;