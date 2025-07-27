import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code, Target, Image, ZoomIn } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const projects = {
    'echoes-of-fate': {
      title: 'EchoesOfFate',
      subtitle: 'Narrative-Based Quiz Game',
      description: 'A narrative-based quiz game built in C++ using SFML and sfeMovie. Integrates video, sound, and object-oriented design for an immersive storytelling experience.',
      fullDescription: [
        'EchoesOfFate represents a culmination of collaborative software development and creative storytelling. This project showcases advanced object-oriented programming principles, multimedia integration, and sophisticated game architecture.',
        'The game combines traditional quiz mechanics with rich narrative elements, featuring integrated video sequences, atmospheric audio design, and an intuitive user interface. The entire system was architected using object-oriented principles, ensuring maintainable and scalable code.',
        'Key technical achievements include seamless multimedia integration using SFML and sfeMovie libraries, dynamic content loading, and a robust event-driven architecture that handles complex narrative branching.',
        'This project demonstrates proficiency in C++ development, multimedia programming, and collaborative software engineering practices.'
      ],
      tech: ['C++', 'SFML', 'sfeMovie', 'Object-Oriented Design', 'Multimedia Integration'],
      github: 'https://github.com/Fanos-dev/EchoesOfFate',
      features: [
        'Interactive narrative with branching storylines',
        'Integrated video and audio playback',
        'Dynamic quiz system with multimedia questions',
        'Modern UI/UX design with SFML graphics',
        'Save/load game state functionality',
        'Cross-platform compatibility'
      ],
      challenges: [
        'Integrating multimedia content seamlessly with C++',
        'Managing complex narrative branching logic',
        'Optimizing performance for smooth video playback',
        'Creating intuitive user interface with SFML'
      ],
      duration: '4 months',
      teamSize: 'Team project',
      role: 'Core Developer & Integration Specialist',
      gallery: [
        {
          type: 'image',
          title: 'Game Interface',
          description: 'Main game screen with narrative elements'
        },
        {
          type: 'image',
          title: 'Character Selection',
          description: 'Interactive character selection screen'
        },
        {
          type: 'image',
          title: 'Narrative Scene',
          description: 'Integrated video and story elements'
        },
        {
          type: 'image',
          title: 'Quiz Interface',
          description: 'Dynamic quiz system with multimedia'
        }
      ]
    },
    'terrain-generation': {
      title: 'Terrain Generation',
      subtitle: 'Procedural Landscape System',
      description: 'Procedural terrain generation tool built in Unity using Perlin noise to simulate realistic landscapes with advanced algorithms.',
      fullDescription: [
        'This project explores the fascinating world of procedural content generation, specifically focusing on creating realistic terrain systems that can generate infinite, diverse landscapes.',
        'The system employs multiple layers of Perlin noise and custom algorithms to create natural-looking terrain features including mountains, valleys, rivers, and biome transitions.',
        'Advanced features include real-time terrain modification, texture splatting based on terrain characteristics, and dynamic vegetation placement systems.',
        'The project serves as both a technical showcase and a learning platform for understanding advanced graphics programming, procedural generation techniques, and optimization strategies in Unity.'
      ],
      tech: ['Unity', 'C#', 'Perlin Noise', 'Procedural Generation', 'Graphics Programming'],
      github: 'https://github.com/Fanos-dev/TerrainGeneration',
      features: [
        'Multi-octave noise generation for realistic terrain',
        'Real-time terrain modification and sculpting',
        'Biome-based texture and vegetation systems',
        'Dynamic height-based terrain coloring',
        'Exportable heightmaps and terrain data',
        'Performance-optimized mesh generation'
      ],
      challenges: [
        'Optimizing performance for large-scale terrains',
        'Creating seamless biome transitions',
        'Implementing efficient mesh generation algorithms',
        'Balancing realism with artistic control'
      ],
      duration: '3 months',
      teamSize: 'Solo project',
      role: 'Lead Developer & Technical Artist',
      gallery: [
        {
          type: 'image',
          title: 'Terrain Overview',
          description: 'Generated landscape with multiple biomes'
        },
        {
          type: 'image',
          title: 'Height Map',
          description: 'Procedural height map generation'
        },
        {
          type: 'image',
          title: 'Texture Splatting',
          description: 'Biome-based texture application'
        },
        {
          type: 'image',
          title: 'Vegetation System',
          description: 'Dynamic vegetation placement'
        }
      ]
    },
    'lava': {
      title: 'Lava',
      subtitle: 'Fast-Paced 2D Survival Platformer',
      description: 'A fast-paced 2D survival platformer made for a game jam. Players must escape rising lava while navigating challenging obstacles.',
      fullDescription: [
        'Lava is an intense 2D survival platformer created during a competitive game jam, showcasing rapid prototyping skills and creative game design under extreme time constraints.',
        'The game features tight platforming mechanics, escalating difficulty, and a unique rising lava mechanic that creates constant tension and urgency.',
        'Players must navigate through increasingly challenging obstacle courses while the deadly lava rises from below, forcing quick decision-making and precise movement.',
        'This project demonstrates ability to create complete, polished gaming experiences within tight deadlines while maintaining engaging gameplay and visual appeal.'
      ],
      tech: ['Unity', 'C#', 'Game Jam Development', '2D Physics', 'Level Design'],
      link: 'https://fanosgames.itch.io/lava',
      features: [
        'Smooth and responsive 2D platforming controls',
        'Dynamic rising lava threat system',
        'Progressive difficulty scaling',
        'Engaging obstacle and trap design',
        'Retro-inspired pixel art aesthetic',
        'Tight gameplay loop optimized for replayability'
      ],
      challenges: [
        'Creating engaging gameplay within jam time limits',
        'Balancing difficulty progression',
        'Implementing smooth 2D physics and controls',
        'Designing levels that encourage speedrunning'
      ],
      duration: '48 hours (Game Jam)',
      teamSize: 'Solo developer',
      role: 'Game Designer & Developer',
      gallery: [
        {
          type: 'image',
          title: 'Gameplay Screenshot',
          description: 'Fast-paced platforming action'
        },
        {
          type: 'image',
          title: 'Lava Rising',
          description: 'Dynamic lava threat system'
        },
        {
          type: 'image',
          title: 'Level Design',
          description: 'Challenging obstacle courses'
        }
      ]
    },
    'the-beyond': {
      title: 'The Beyond',
      subtitle: 'Atmospheric Exploration Game',
      description: 'Atmospheric exploration game created for a game jam. Explore an alien world with minimalist visuals and immersive sound design.',
      fullDescription: [
        'The Beyond is an atmospheric exploration game that focuses on environmental storytelling and immersive audio-visual experiences.',
        'Set in an alien world, the game emphasizes exploration, discovery, and atmosphere over traditional gameplay mechanics, creating a unique meditative gaming experience.',
        'The minimalist visual design combined with carefully crafted audio creates an otherworldly atmosphere that draws players into the mysterious alien landscape.',
        'This project showcases skills in environmental design, audio integration, and creating compelling experiences through atmosphere rather than traditional game mechanics.'
      ],
      tech: ['Unity', 'C#', 'Audio Design', 'Environmental Art', 'Atmospheric Design'],
      link: 'https://fanosgames.itch.io/the-beyond',
      features: [
        'Immersive atmospheric exploration',
        'Minimalist visual design philosophy',
        'Rich ambient audio landscape',
        'Environmental storytelling elements',
        'Mysterious alien world setting',
        'Contemplative pacing and gameplay'
      ],
      challenges: [
        'Creating engaging exploration without traditional mechanics',
        'Balancing minimalism with visual interest',
        'Designing compelling environmental narratives',
        'Optimizing atmosphere-heavy scenes for performance'
      ],
      duration: '72 hours (Game Jam)',
      teamSize: 'Solo developer',
      role: 'Game Designer, Developer & Audio Designer',
      gallery: [
        {
          type: 'image',
          title: 'Alien Landscape',
          description: 'Atmospheric alien world environment'
        },
        {
          type: 'image',
          title: 'Environmental Details',
          description: 'Minimalist visual design elements'
        },
        {
          type: 'image',
          title: 'Exploration View',
          description: 'First-person exploration perspective'
        }
      ]
    },
    'pos-inventory-system': {
      title: 'POS & Inventory Management System',
      subtitle: 'Desktop Business Application',
      description: 'Desktop application for restaurant management, developed in C# and SQL Server. Automates order processing, inventory tracking, and report generation.',
      fullDescription: [
        'A comprehensive Point of Sale and Inventory Management System designed specifically for restaurant operations, demonstrating enterprise-level desktop application development.',
        'The system integrates order processing, inventory management, sales tracking, and comprehensive reporting into a unified platform that streamlines restaurant operations.',
        'Built with C# and SQL Server, the application features a robust database architecture, intuitive WinForms interface, and automated report generation using SAP Crystal Reports.',
        'This project showcases skills in database design, business application development, and creating solutions that solve real-world operational challenges in the food service industry.'
      ],
      tech: ['C#', 'SQL Server', 'WinForms', 'SAP Crystal Reports', 'Database Design', 'Business Logic'],
      github: 'https://github.com/Fanos-dev',
      features: [
        'Complete order processing and POS functionality',
        'Real-time inventory tracking and management',
        'Automated low-stock alerts and reordering',
        'Comprehensive sales and performance reporting',
        'Multi-user support with role-based access',
        'Data backup and recovery systems'
      ],
      challenges: [
        'Designing efficient database schema for complex operations',
        'Creating intuitive interfaces for non-technical users',
        'Implementing real-time inventory updates',
        'Ensuring data integrity across concurrent users'
      ],
      duration: '6 months',
      teamSize: 'Solo developer',
      role: 'Full-Stack Developer & Database Architect'
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
                        <div key={index} className="p-3 bg-gray-800/60 border border-gray-700 rounded-lg text-center backdrop-blur-sm hover:border-blue-300/50 transition-colors">
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