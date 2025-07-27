import React from 'react';
import { ArrowLeft, GraduationCap, Users, Award, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-gray-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="body-md">Back to Homepage</span>
            </button>
            <h1 className="display-sm text-white">Education and Leadership</h1>
            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-20">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Education Section */}
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-blue-300/20 rounded-lg flex items-center justify-center">
                <GraduationCap size={24} className="text-blue-300" />
              </div>
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
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="body-md text-gray-400">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Leadership Section */}
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-green-300/20 rounded-lg flex items-center justify-center">
                <Users size={24} className="text-green-300" />
              </div>
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
          </section>

          {/* Back to Homepage Button */}
          <div className="text-center pt-8">
            <button
              onClick={() => navigate('/')}
              className="btn-primary"
            >
              <ArrowLeft size={20} />
              Back to Homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationLeadership;