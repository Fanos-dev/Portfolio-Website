import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code, Target } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const projects = {
    'echoes-of-fate': {
      title: 'EchoesOfFate',
      subtitle: 'Story-Driven Quiz Game',
      description: 'A narrative-driven quiz game developed with a team of 11 for a university module. This project showcases advanced object-oriented programming principles, multimedia integration, and collaborative development practices.',
      fullDescription: [
        'EchoesOfFate represents a culmination of collaborative software development and creative storytelling. Built as part of a university module, this project brought together 11 developers to create an immersive narrative experience.',
        'The game combines traditional quiz mechanics with rich storytelling elements, featuring integrated video sequences, atmospheric audio design, and an intuitive user interface. The entire system was architected using object-oriented principles, ensuring maintainable and scalable code.',
        'Key technical achievements include seamless multimedia integration using SFML and sfeMovie libraries, dynamic content loading, and a robust event-driven architecture that handles complex narrative branching.',
        'This project taught valuable lessons in team coordination, version control with large teams, and the challenges of integrating multimedia content in C++ applications.'
      ],
      tech: ['C++', 'SFML', 'sfeMovie', 'Object-Oriented Design', 'Team Collaboration'],
      github: 'https://github.com/Fanos-dev/EchoesOfFate',
      features: [
        'Interactive narrative with branching storylines',
        'Integrated video and audio playback',
        'Dynamic quiz system with multimedia questions',
        'Modern UI/UX design with SFML graphics',
        'Save/load game state functionality',
        'Team-based development with 11 contributors'
      ],
      challenges: [
        'Coordinating development across 11 team members',
        'Integrating multimedia content seamlessly',
        'Managing large binary assets in version control',
        'Ensuring consistent code quality across contributors'
      ],
      duration: '4 months',
      teamSize: '11 developers',
      role: 'Core Developer & Integration Specialist'
    },
    'terrain-generation': {
      title: 'Terrain Generation Project',
      subtitle: 'Procedural Landscape System',
      description: 'A sophisticated procedural terrain generation system built in Unity, focusing on creating realistic and diverse landscapes using advanced algorithms and noise functions.',
      fullDescription: [
        'This project explores the fascinating world of procedural content generation, specifically focusing on creating realistic terrain systems that can generate infinite, diverse landscapes.',
        'The system employs multiple layers of Perlin noise, Simplex noise, and custom algorithms to create natural-looking terrain features including mountains, valleys, rivers, and biome transitions.',
        'Advanced features include real-time LOD (Level of Detail) systems for performance optimization, texture splatting based on terrain characteristics, and dynamic vegetation placement.',
        'The project serves as both a technical showcase and a learning platform for understanding advanced graphics programming, procedural generation techniques, and optimization strategies in Unity.'
      ],
      tech: ['Unity', 'C#', 'Perlin Noise', 'Simplex Noise', 'Compute Shaders', 'Level of Detail (LOD)'],
      github: 'https://github.com/Fanos-dev/TerrainGeneration',
      features: [
        'Multi-octave noise generation for realistic terrain',
        'Real-time terrain modification and sculpting',
        'Biome-based texture and vegetation systems',
        'Level of Detail (LOD) optimization',
        'Dynamic weather and atmospheric effects',
        'Exportable heightmaps and terrain data'
      ],
      challenges: [
        'Optimizing performance for large-scale terrains',
        'Creating seamless biome transitions',
        'Implementing efficient LOD systems',
        'Balancing realism with artistic control'
      ],
      duration: '3 months',
      teamSize: 'Solo project',
      role: 'Lead Developer & Technical Artist'
    },
    'game-jam-portfolio': {
      title: 'Game Jam Portfolio',
      subtitle: 'Collection of Experimental Games',
      description: 'A diverse collection of games created during various game jams, showcasing creativity, rapid prototyping skills, and the ability to create complete gaming experiences under tight time constraints.',
      fullDescription: [
        'Game jams represent the ultimate test of creativity, technical skill, and time management. This portfolio showcases a variety of games created during competitive game development events, each built within 48-72 hour time limits.',
        'The collection includes platformers that experiment with unique movement mechanics, puzzle games that challenge conventional thinking, and experimental titles that push the boundaries of traditional game design.',
        'Each project demonstrates different aspects of game development, from rapid prototyping and asset creation to gameplay balancing and user experience design.',
        'These experiences have been invaluable in developing skills in rapid iteration, creative problem-solving, and working under pressure while maintaining quality standards.'
      ],
      tech: ['Unity', 'C#', 'Game Design', 'Rapid Prototyping', 'Asset Creation', 'Audio Implementation'],
      link: 'https://fanosgames.itch.io',
      features: [
        'Diverse genre exploration (platformers, puzzles, experimental)',
        'Complete games developed in 48-72 hours',
        'Original artwork and audio implementation',
        'Innovative gameplay mechanics',
        'Community engagement and feedback integration',
        'Cross-platform compatibility'
      ],
      challenges: [
        'Extreme time constraints requiring rapid decision-making',
        'Balancing scope with available development time',
        'Creating engaging experiences with minimal assets',
        'Team coordination in high-pressure environments'
      ],
      duration: 'Multiple events (2-3 days each)',
      teamSize: 'Solo and team projects (2-4 members)',
      role: 'Game Designer & Developer'
    },
    'web-applications': {
      title: 'Web Applications',
      subtitle: 'Full-Stack Development Projects',
      description: 'A collection of modern web applications built using cutting-edge technologies, demonstrating proficiency in full-stack development, responsive design, and user experience optimization.',
      fullDescription: [
        'This portfolio encompasses various web application projects that showcase modern full-stack development practices and technologies.',
        'Projects range from dynamic single-page applications built with React to complex backend systems utilizing Node.js and database technologies.',
        'Each application demonstrates different aspects of web development including responsive design, API integration, database management, and deployment strategies.',
        'The focus has been on creating user-friendly interfaces while maintaining robust, scalable backend architectures that can handle real-world usage scenarios.'
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'CSS3', 'JavaScript ES6+'],
      github: 'https://github.com/Fanos-dev',
      features: [
        'Responsive, mobile-first design approach',
        'RESTful API development and integration',
        'Database design and optimization',
        'User authentication and authorization',
        'Real-time features using WebSockets',
        'Modern development workflow and deployment'
      ],
      challenges: [
        'Ensuring cross-browser compatibility',
        'Optimizing performance for various devices',
        'Implementing secure authentication systems',
        'Managing complex state in frontend applications'
      ],
      duration: 'Ongoing projects',
      teamSize: 'Various (solo and collaborative)',
      role: 'Full-Stack Developer'
    }
  };

  const project = projects[projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="h1 text-white mb-4">Project Not Found</h1>
          <button onClick={() => navigate('/')} className="btn-primary">
            <ArrowLeft size={20} />
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 section-glow">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <button 
                onClick={() => navigate('/')} 
                className="btn-secondary mb-8 group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Back to Portfolio
              </button>
              
              <div className="text-center mb-12">
                <h1 className="display-lg mb-4 text-white">{project.title}</h1>
                <p className="h2 text-cyan-400 mb-6">{project.subtitle}</p>
                <p className="body-lg max-w-3xl mx-auto text-gray-400">
                  {project.description}
                </p>
              </div>

              {/* Project Info Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="feature-card text-center">
                  <Calendar size={32} className="text-blue-300 mx-auto mb-4 glow-icon" />
                  <h3 className="h3 text-white mb-2">Duration</h3>
                  <p className="body-md text-gray-400">{project.duration}</p>
                </div>
                <div className="feature-card text-center">
                  <Users size={32} className="text-blue-300 mx-auto mb-4 glow-icon" />
                  <h3 className="h3 text-white mb-2">Team Size</h3>
                  <p className="body-md text-gray-400">{project.teamSize}</p>
                </div>
                <div className="feature-card text-center">
                  <Target size={32} className="text-blue-300 mx-auto mb-4 glow-icon" />
                  <h3 className="h3 text-white mb-2">Role</h3>
                  <p className="body-md text-gray-400">{project.role}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Description */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h2 className="h1 mb-6 text-white">Project Overview</h2>
                    <div className="space-y-4">
                      {project.fullDescription.map((paragraph, index) => (
                        <p key={index} className="body-md text-gray-400 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="h2 mb-6 text-white">Key Features</h3>
                    <div className="grid gap-3">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0 glow-icon"></div>
                          <p className="body-md text-gray-400">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Challenges */}
                  <div>
                    <h3 className="h2 mb-6 text-white">Technical Challenges</h3>
                    <div className="grid gap-3">
                      {project.challenges.map((challenge, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="body-md text-gray-400">{challenge}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Technologies */}
                  <div className="feature-card">
                    <div className="flex items-center mb-6">
                      <Code size={24} className="text-blue-300 mr-3 glow-icon" />
                      <h3 className="h3 text-white">Technologies</h3>
                    </div>
                    <div className="space-y-3">
                      {project.tech.map((tech, index) => (
                        <div key={index} className="p-3 bg-gray-800/60 border border-gray-700 rounded-lg text-center backdrop-blur-sm hover:border-cyan-400/50 transition-colors">
                          <span className="body-sm text-gray-300 font-medium">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="feature-card">
                    <h3 className="h3 text-white mb-6">Project Links</h3>
                    <div className="space-y-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary w-full"
                        >
                          <Github size={20} />
                          View Source Code
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary w-full"
                        >
                          <ExternalLink size={20} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;