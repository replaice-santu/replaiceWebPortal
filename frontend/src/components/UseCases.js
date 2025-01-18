import React, { useState } from 'react';
import { FaChartLine, FaHeadset, FaSearch, FaBullhorn, FaUsers, FaTasks, FaClipboardCheck } from 'react-icons/fa';
import './UseCases.css';

const UseCases = () => {
  const [isHovered, setIsHovered] = useState(false);

  const cards = [
    {
      icon: <FaChartLine size={32} className="text-blue-600" />, 
      title: 'Sales',
      description: 'Automate prospecting and follow-ups while maintaining personal touch.',
    },
    {
      icon: <FaHeadset size={32} className="text-blue-600" />, 
      title: 'Support',
      description: '24/7 customer support with instant response times and smart escalation.',
    },
    {
      icon: <FaSearch size={32} className="text-blue-600" />, 
      title: 'Research',
      description: 'Gather and analyze data faster with AI-powered research assistance.',
    },
    {
      icon: <FaBullhorn size={32} className="text-blue-600" />, 
      title: 'Marketing',
      description: 'Create and optimize campaigns with data-driven insights.',
    },
    {
      icon: <FaUsers size={32} className="text-blue-600" />, 
      title: 'Human Resource',
      description: 'Streamline hiring and employee engagement with AI-powered tools.',
    },
    {
      icon: <FaTasks size={32} className="text-blue-600" />, 
      title: 'Project Management',
      description: 'Enhance collaboration and manage projects effectively with AI support.',
    },
    {
      icon: <FaClipboardCheck size={32} className="text-blue-600" />, 
      title: 'Testing',
      description: 'Automate testing processes for efficient and accurate results.',
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Transform Every Role with AI Agents</h2>
        <div 
          className="scroll-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`scroll-content ${isHovered ? 'paused' : ''}`}>
            {cards.map((card, index) => (
              <div
                key={index}
                className="card flex-shrink-0 w-72 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 mx-4"
              >
                <div className="mb-4 text-center">{card.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{card.title}</h3>
                <p className="text-gray-600 text-center">{card.description}</p>
                <div className="mt-4 text-center">
                  <a href="#" className="text-blue-600 font-medium hover:underline">Learn more</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;