import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import EditableText from './EditableText';
import { SiItchdotio } from 'react-icons/si';

const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'akburallyirfan12@gmail.com',
      href: 'mailto:akburallyirfan12@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Irfan Akbur Ally',
      href: 'https://linkedin.com/in/irfan-akbur-ally'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Fanos Dev',
      href: 'https://github.com/Fanos-dev'
    },
    {
      icon: SiItchdotio,
      label: 'Itch.io',
      value: 'Fanos Games',
      href: 'https://fanosgames.itch.io/'
    }
  ];

  return (
    <section id="contact" className="py-40">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <EditableText
              sectionId="contact-title"
              defaultContent="Let's Connect"
              className="display-md mb-6 text-white"
              element="h2"
              maxLength={50}
            />
            <EditableText
              sectionId="contact-subtitle"
              defaultContent="Have a project in mind or just want to chat about technology? I'd love to hear from you. Let's build something amazing together."
              className="body-lg max-w-2xl mx-auto text-gray-400"
              element="p"
              multiline={true}
              maxLength={300}
            />
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <EditableText
                  sectionId="contact-main-title"
                  defaultContent="Get In Touch"
                  className="h1 mb-6 text-white"
                  element="h3"
                  maxLength={50}
                />
                <EditableText
                  sectionId="contact-description"
                  defaultContent="I'm always open to discussing new opportunities, collaborations, or just connecting with fellow developers and tech enthusiasts."
                  className="body-md text-gray-400 mb-8"
                  element="p"
                  multiline={true}
                  maxLength={300}
                />
              </div>

              {/* Contact Methods */}
              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-300/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent size={20} className="text-blue-300" />
                      </div>
                      <div>
                        <p className="body-sm text-gray-500 uppercase tracking-wide">{contact.label}</p>
                        {contact.href ? (
                          <a 
                            href={contact.href}
                            target={contact.href.startsWith('http') ? '_blank' : undefined}
                            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="body-md text-gray-300 hover:text-blue-300 transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="body-md text-gray-300">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;