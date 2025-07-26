import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission - in real app, this would connect to backend
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

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
      value: 'irfan-akbur-ally',
      href: 'https://linkedin.com/in/irfan-akbur-ally'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Fanos-dev',
      href: 'https://github.com/Fanos-dev'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Phoenix, Durban',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="display-md mb-6 text-white">Let's Connect</h2>
            <p className="body-lg max-w-2xl mx-auto text-gray-400">
              Have a project in mind or just want to chat about technology? 
              I'd love to hear from you. Let's build something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="h1 mb-6 text-white">Get In Touch</h3>
                <p className="body-md text-gray-400 mb-8">
                  I'm always open to discussing new opportunities, collaborations, 
                  or just connecting with fellow developers and tech enthusiasts.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent size={20} className="text-yellow-400" />
                      </div>
                      <div>
                        <p className="body-sm text-gray-500 uppercase tracking-wide">{contact.label}</p>
                        {contact.href ? (
                          <a 
                            href={contact.href}
                            target={contact.href.startsWith('http') ? '_blank' : undefined}
                            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="body-md text-gray-300 hover:text-yellow-400 transition-colors"
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

              {/* Social Links */}
              <div className="pt-8 border-t border-gray-700">
                <p className="body-sm text-gray-500 mb-4">Follow me on social media</p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Fanos-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-gray-700 transition-all duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/irfan-akbur-ally"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-gray-700 transition-all duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="feature-card">
              <h3 className="h2 mb-6 text-white">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block body-sm text-gray-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block body-sm text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block body-sm text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors resize-vertical"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;