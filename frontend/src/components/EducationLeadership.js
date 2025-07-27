import React from 'react';
import { ArrowLeft, GraduationCap, Users, Award, MapPin, Calendar, User, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import EditableText from './EditableText';

const EducationLeadership = () => {
  const navigate = useNavigate();

  const educationData = [
    {
      institution: 'University of KwaZulu-Natal, Westville, Durban',
      degree: 'BSc Computer Science and Information Technology — Third Year (2025)',
      details: [
        'Current Average: 86%',
        'Awards: 3x Dean\'s Commendations, 7x Certificates of Merit',
        'Top 2nd-Year Student in Computer Science for 2024',
        '3rd-ranked undergraduate for 2025 (100th Anniversary Scholarship)',
        'Relevant Coursework: Systems Analysis and Design, OOP, Databases and Programming, Data Structures, Architecture, Advanced Programming, etc.'
      ]
    },
    {
      institution: 'Phoenix Muslim School, Durban',
      degree: 'NSC Matric, 2022',
      details: [
        'Average: 80%',
        '6 Distinctions, Principal\'s Award'
      ]
    }
  ];

  const leadershipData = [
    {
      title: 'Class Representative – COMP315',
      period: 'Mar 2025 – Jun 2025',
      details: [
        'Represented 169 third-year students',
        'Liaised between lecturer and class, resolving concerns and improving communication'
      ]
    },
    {
      title: 'Head Prefect – Phoenix Muslim School',
      period: 'Feb 2022 – Oct 2022',
      details: [
        'Led 20 prefects and coordinated daily conduct for 500+ students',
        'Strengthened discipline and leadership through daily initiatives and student engagement'
      ]
    }
  ];

  const skills = [
    'Team Communication',
    'Leadership',
    'Problem-solving',
    'Student Representation',
    'Academic Excellence',
    'Mentorship'
  ];

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
                <h1 className="display-lg mb-4 text-white">Education and Leadership</h1>
                <p className="h2 text-cyan-400 mb-6">Academic Excellence & Leadership Journey</p>
                <p className="body-lg max-w-3xl mx-auto text-gray-400">
                  A comprehensive overview of my academic achievements, leadership roles, and 
                  commitment to excellence in both educational and organizational settings.
                </p>
              </div>

              {/* Info Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="feature-card text-center">
                  <Award size={32} className="text-blue-300 mx-auto mb-4 glow-icon" />
                  <h3 className="h3 text-white mb-2">Current GPA</h3>
                  <p className="body-md text-gray-400">86% Average</p>
                </div>
                <div className="feature-card text-center">
                  <Users size={32} className="text-blue-300 mx-auto mb-4 glow-icon" />
                  <h3 className="h3 text-white mb-2">Students Represented</h3>
                  <p className="body-md text-gray-400">169 Third-Year Students</p>
                </div>
                <div className="feature-card text-center">
                  <Target size={32} className="text-blue-300 mx-auto mb-4 glow-icon" />
                  <h3 className="h3 text-white mb-2">Leadership Roles</h3>
                  <p className="body-md text-gray-400">Class Rep & Head Prefect</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Education Section */}
                  <div>
                    <div className="flex items-center space-x-3 mb-6">
                      <GraduationCap size={24} className="text-blue-300 glow-icon" />
                      <h2 className="h1 text-white">🎓 Education</h2>
                    </div>
                    
                    <div className="space-y-8">
                      {educationData.map((education, index) => (
                        <div key={index} className="feature-card">
                          <div className="mb-4">
                            <div className="flex items-start space-x-3 mb-2">
                              <MapPin size={18} className="text-blue-300 mt-1 flex-shrink-0" />
                              <h3 className="h3 text-white">{education.institution}</h3>
                            </div>
                            <p className="body-lg text-gray-300 ml-6">{education.degree}</p>
                          </div>
                          
                          <div className="ml-6 space-y-2">
                            {education.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0 glow-icon"></div>
                                <p className="body-md text-gray-400">{detail}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Leadership Section */}
                  <div>
                    <div className="flex items-center space-x-3 mb-6">
                      <Users size={24} className="text-green-300 glow-icon" />
                      <h2 className="h1 text-white">🧭 Leadership</h2>
                    </div>
                    
                    <div className="space-y-8">
                      {leadershipData.map((leadership, index) => (
                        <div key={index} className="feature-card">
                          <div className="mb-4">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="h3 text-white">{leadership.title}</h3>
                              <span className="body-sm text-blue-300 bg-blue-300/10 px-3 py-1 rounded-full">
                                {leadership.period}
                              </span>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            {leadership.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-green-300 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="body-md text-gray-400">{detail}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Key Skills */}
                  <div className="feature-card">
                    <div className="flex items-center mb-6">
                      <Target size={24} className="text-blue-300 mr-3 glow-icon" />
                      <h3 className="h3 text-white">Key Skills</h3>
                    </div>
                    <div className="space-y-3">
                      {skills.map((skill, index) => (
                        <div key={index} className="p-3 bg-gray-800/60 border border-gray-700 rounded-lg text-center backdrop-blur-sm hover:border-blue-300/50 transition-colors">
                          <span className="body-sm text-gray-300 font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Facts */}
                  <div className="feature-card">
                    <h3 className="h3 text-white mb-6">Quick Facts</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Calendar size={16} className="text-blue-300" />
                        <div>
                          <p className="body-sm text-gray-500">Expected Graduation</p>
                          <p className="body-md text-gray-300">2025</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Award size={16} className="text-blue-300" />
                        <div>
                          <p className="body-sm text-gray-500">Total Awards</p>
                          <p className="body-md text-gray-300">10+ Recognitions</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <User size={16} className="text-blue-300" />
                        <div>
                          <p className="body-sm text-gray-500">Class Rank</p>
                          <p className="body-md text-gray-300">Top 3 Undergraduate</p>
                        </div>
                      </div>
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

export default EducationLeadership;