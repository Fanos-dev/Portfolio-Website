import React from 'react';
import { GraduationCap, Users, Trophy } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'BSc Computer Science & IT at University of KwaZulu-Natal (Class of 2025)'
    },
    {
      icon: Users,
      title: 'Leadership',
      description: 'COMP315 Class Representative (2025) & Former Head Prefect'
    },
    {
      icon: Trophy,
      title: 'Expertise',
      description: 'Game development, systems design, and full-stack applications'
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="display-md mb-6 text-white">About Me</h2>
            <p className="body-lg max-w-2xl mx-auto text-gray-400">
              A passionate Computer Science student with a drive for creating innovative 
              software solutions and interactive experiences.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div>
              <h3 className="h1 mb-6 text-white">
                Building the Future Through Code
              </h3>
              <div className="space-y-4 text-gray-400">
                <p className="body-md">
                  Currently pursuing my BSc in Computer Science & Information Technology 
                  at the University of KwaZulu-Natal, I'm passionate about leveraging 
                  technology to solve real-world problems and create engaging digital experiences.
                </p>
                <p className="body-md">
                  My journey in software development has been shaped by collaborative 
                  projects, leadership roles, and a constant drive to learn new technologies. 
                  From developing story-driven games to creating complex systems, I thrive 
                  in environments that challenge me to think creatively and work effectively 
                  with teams.
                </p>
                <p className="body-md">
                  When I'm not coding, you'll find me exploring the latest in game development, 
                  participating in hackathons, or mentoring fellow students as a class representative.
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap size={32} className="text-yellow-400" />
                  </div>
                  <p className="text-gray-400 body-sm">Professional Photo</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400/20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400/10 rounded-full"></div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div key={index} className="feature-card text-center">
                  <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent size={32} className="text-yellow-400" />
                  </div>
                  <h4 className="h3 mb-4 text-white">{highlight.title}</h4>
                  <p className="body-md text-gray-400">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;