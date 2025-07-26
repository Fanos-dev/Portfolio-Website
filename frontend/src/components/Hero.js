import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { SiItchdotio } from 'react-icons/si';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Fanos-dev',
      icon: Github
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/irfan-akbur-ally',
      icon: Linkedin
    },
    {
      name: 'Email',
      url: 'mailto:akburallyirfan12@gmail.com',
      icon: Mail
    },
    {
      name: 'Itch.io',
      url: 'https://fanosgames.itch.io/',
      icon: SiItchdotio,
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">

      {/* Animated Light Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-96 h-96 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-30 rounded-full blur-3xl animate-floating-light"></div>
      </div>
      
      <div className="container text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="display-lg mb-8 text-white">
            Mahomed Irfan 
            <span className="block text-blue-300 glow-icon">Akbur Ally</span>
          </h1>

          {/* Tagline */}
          <p className="h2 mb-8 text-gray-300">
            <Typewriter
              options={{
                strings: [
                  'Aspiring Software Developer',
                  'Computer Science Student at UKZN',
                  'Game & Software Builder',
                  'Passionate about Clean Code',
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 40,
              }}
            />
          </p>

          {/* Bio */}
          <p className="body-lg mb-12 max-w-2xl mx-auto text-gray-400">
            Passionate about building impactful software and games. Experienced in C++, Java, 
            and full-stack system development. Excels in collaborative environments and thrives 
            on solving real-world problems through code.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-300 hover:bg-gray-700 transition-all duration-300 hover:scale-110 glow-icon"
                  aria-label={social.name}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center space-x-4 mb-16">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <a href="#about" className="text-gray-500 hover:text-blue-300 transition-colors glow-icon">
              <ArrowDown size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;