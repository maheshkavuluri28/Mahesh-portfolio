import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const tabContent = {
    skills: {
      title: 'Skills',
      items: [
        {
          category: 'UI/UX',
          description: 'Designing Web/App interfaces',
          color: 'text-red-500'
        },
        {
          category: 'Web Designing',
          description: 'Creating beautiful and responsive web designs',
          color: 'text-red-500'
        }
      ]
    },
    experience: {
      title: 'Experience',
      items: []
    },
    education: {
      title: 'Education',
      items: [
        {
          category: '2020 - 2024',
          description: 'Raghu Engineering College - B.Tech',
          color: 'text-red-500'
        },
        {
          category: '2018 - 2020',
          description: 'Amaravati Junior College - Intermediate',
          color: 'text-red-500'
        },
        {
          category: '2017 - 2018',
          description: 'SRI MYTRI VIDYA NIKETHAN - Matriculation',
          color: 'text-red-500'
        }
      ]
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="bg-gray-800 rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
              <img
                src="/DSC_1784_11zon-photoaidcom-cropped_11zon.jpg"
                alt="Mahesh"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Me
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              To secure a challenging position as a UI/UX Designer where I can apply my creative and technical skills in user interface and experience design, contribute to user-centric solutions, and continuously grow in a dynamic and innovative environment.
            </p>

            {/* Tabs */}
            <div className="mb-8">
              <div className="flex space-x-8 border-b border-gray-700">
                {Object.keys(tabContent).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-2 px-1 font-medium capitalize transition-colors duration-300 relative ${
                      activeTab === tab ? 'text-red-500' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              {tabContent[activeTab as keyof typeof tabContent].items.length > 0 ? (
                tabContent[activeTab as keyof typeof tabContent].items.map((item, index) => (
                  <div key={index} className="border-l-2 border-gray-700 pl-6">
                    <h3 className={`font-semibold mb-2 ${item.color}`}>
                      {item.category}
                    </h3>
                    <p className="text-gray-400">
                      {item.description}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-gray-400 text-center py-8">
                  No experience information available yet.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;