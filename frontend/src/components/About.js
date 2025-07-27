import React from 'react';
import { GraduationCap, Users, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EditableText from './EditableText';

const About = () => {
  const navigate = useNavigate();
  
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education and Leadership',
      description: 'BSc Computer Science & IT at UKZN, Class Representative, Former Head Prefect',
      isClickable: true,
      onClick: () => navigate('/education-leadership')
    },
    {
      icon: Trophy,
      title: 'Expertise',
      description: 'Game development, systems design, and full-stack applications',
      isClickable: false
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <EditableText
              sectionId="about-title"
              defaultContent="About Me"
              className="display-md mb-6 text-white"
              element="h2"
              maxLength={50}
            />
            <EditableText
              sectionId="about-subtitle"
              defaultContent="A passionate Computer Science student with a drive for creating innovative software solutions and interactive experiences."
              className="body-lg max-w-2xl mx-auto text-gray-400"
              element="p"
              multiline={true}
              maxLength={300}
            />
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div>
              <EditableText
                sectionId="about-main-title"
                defaultContent="Building the Future Through Code"
                className="h1 mb-6 text-white"
                element="h3"
                maxLength={100}
              />
              <div className="space-y-4 text-gray-400">
                <EditableText
                  sectionId="about-paragraph-1"
                  defaultContent="Currently pursuing my BSc in Computer Science & Information Technology at the University of KwaZulu-Natal, I'm passionate about leveraging technology to solve real-world problems and create engaging digital experiences."
                  className="body-md"
                  element="p"
                  multiline={true}
                  maxLength={500}
                />
                <EditableText
                  sectionId="about-paragraph-2"
                  defaultContent="My journey in software development has been shaped by collaborative projects, leadership roles, and a constant drive to learn new technologies. From developing story-driven games to creating complex systems, I thrive in environments that challenge me to think creatively and work effectively with teams."
                  className="body-md"
                  element="p"
                  multiline={true}
                  maxLength={500}
                />
                <EditableText
                  sectionId="about-paragraph-3"
                  defaultContent="When I'm not coding, you'll find me exploring the latest in game development, participating in hackathons, or mentoring fellow students as a class representative."
                  className="body-md"
                  element="p"
                  multiline={true}
                  maxLength={300}
                />
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-300/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap size={32} className="text-blue-300" />
                  </div>
                  <p className="text-gray-400 body-sm">Professional Photo</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-300/20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-300/10 rounded-full"></div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              const CardComponent = highlight.isClickable ? 'button' : 'div';
              
              return (
                <CardComponent
                  key={index}
                  className={`feature-card text-center ${
                    highlight.isClickable 
                      ? 'cursor-pointer hover:bg-gray-800/50 transition-colors duration-300 transform hover:scale-105' 
                      : ''
                  }`}
                  onClick={highlight.onClick}
                >
                  <div className="w-16 h-16 bg-blue-300/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent size={32} className="text-blue-300" />
                  </div>
                  <h4 className="h3 mb-4 text-white">{highlight.title}</h4>
                  <p className="body-md text-gray-400">{highlight.description}</p>
                  {highlight.isClickable && (
                    <p className="body-sm text-blue-300 mt-2">Click to learn more →</p>
                  )}
                </CardComponent>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;