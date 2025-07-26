import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
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
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-2">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="h2 text-white">Irfan Akbur Ally</h3>
            <p className="body-md text-gray-400 max-w-xs">
              Aspiring Software Developer passionate about creating innovative 
              solutions and engaging digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="h3 text-white">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block body-md text-gray-400 hover:text-blue-300 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="h3 text-white">Let's Connect</h4>
            <p className="body-md text-gray-400 mb-4">
              Follow me on social media for updates on my latest projects.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-300 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="body-sm text-gray-500">
              © {currentYear} Mahomed Irfan Akbur Ally. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-gray-500">
              <span className="body-sm">Made with</span>
              <Heart size={16} className="text-red-500" />
              <span className="body-sm">using React & passion</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;