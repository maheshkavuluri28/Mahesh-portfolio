import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce platform built with React and Node.js featuring user authentication, payment integration, and admin dashboard.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      link: '#',
      github: '#'
    },
    {
      title: 'Mobile Banking App',
      category: 'App Development',
      description: 'Secure mobile banking application with biometric authentication, transaction history, and real-time notifications.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      link: '#',
      github: '#'
    },
    {
      title: 'Healthcare Dashboard',
      category: 'UI/UX Design',
      description: 'Comprehensive healthcare management dashboard for doctors and patients with appointment scheduling and medical records.',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg',
      link: '#',
      github: '#'
    },
    {
      title: 'Social Media Platform',
      category: 'Full Stack',
      description: 'Complete social media platform with real-time messaging, post sharing, and advanced privacy controls.',
      image: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg',
      link: '#',
      github: '#'
    },
    {
      title: 'Learning Management System',
      category: 'Web Development',
      description: 'Educational platform for online courses with video streaming, progress tracking, and interactive assignments.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
      link: '#',
      github: '#'
    },
    {
      title: 'Restaurant App',
      category: 'Mobile App',
      description: 'Food delivery and restaurant management app with menu customization, order tracking, and payment processing.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      link: '#',
      github: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Work
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Here are some of my recent projects that showcase my skills and expertise
            in various areas of development and design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-red-500/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.link}
                    className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="text-red-500 text-sm font-medium mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;