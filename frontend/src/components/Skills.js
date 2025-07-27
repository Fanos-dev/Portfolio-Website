import React from 'react';
import { Code, Database, Settings, Users, Lightbulb, Target } from 'lucide-react';
import EditableText from './EditableText';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['C++', 'Java', 'C#', 'Python', 'SQL'],
      color: 'yellow'
    },
    {
      title: 'Tools & Technologies',
      icon: Settings,
      skills: ['GitHub', 'Unity', 'Docker', 'HTML', 'WinForms', 'SAP Crystal Reports'],
      color: 'blue'
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Team Communication', 'Leadership', 'Adaptability', 'Problem-solving'],
      color: 'green'
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'yellow':
        return {
          icon: 'text-blue-300',
          bg: 'bg-blue-300/20',
          border: 'border-blue-300/30',
          hover: 'hover:border-blue-300/50'
        };
      case 'blue':
        return {
          icon: 'text-blue-400',
          bg: 'bg-blue-400/20',
          border: 'border-blue-400/30',
          hover: 'hover:border-blue-400/50'
        };
      case 'green':
        return {
          icon: 'text-green-400',
          bg: 'bg-green-400/20',
          border: 'border-green-400/30',
          hover: 'hover:border-green-400/50'
        };
      default:
        return {
          icon: 'text-gray-400',
          bg: 'bg-gray-400/20',
          border: 'border-gray-400/30',
          hover: 'hover:border-gray-400/50'
        };
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <EditableText
              sectionId="skills-title"
              defaultContent="Skills & Expertise"
              className="display-md mb-6 text-white"
              element="h2"
              maxLength={50}
            />
            <EditableText
              sectionId="skills-subtitle"
              defaultContent="A comprehensive toolkit built through academic studies, hands-on projects, and collaborative development experiences."
              className="body-lg max-w-2xl mx-auto text-gray-400"
              element="p"
              multiline={true}
              maxLength={300}
            />
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              const colors = getColorClasses(category.color);
              
              return (
                <div key={index} className="feature-card">
                  <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent size={32} className={colors.icon} />
                  </div>
                  
                  <h3 className="h3 mb-6 text-white text-center">{category.title}</h3>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className={`p-3 bg-gray-800/50 border ${colors.border} ${colors.hover} rounded-lg transition-all duration-300 text-center`}
                      >
                        <span className="body-sm text-gray-300 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Highlights */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Experience Highlight */}
            <div className="feature-card">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-300/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target size={24} className="text-blue-300" />
                </div>
                <div>
                  <h4 className="h3 mb-3 text-white">Problem-Solving Approach</h4>
                  <p className="body-md text-gray-400">
                    Experienced in breaking down complex problems into manageable components, 
                    utilizing object-oriented principles and collaborative development practices 
                    to deliver robust solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Learning Philosophy */}
            <div className="feature-card">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb size={24} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="h3 mb-3 text-white">Continuous Learning</h4>
                  <p className="body-md text-gray-400">
                    Always exploring new technologies and methodologies. Currently diving deeper 
                    into advanced game development techniques and full-stack system architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;