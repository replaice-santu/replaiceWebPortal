import React, { useState } from 'react';

const agentsData = [
  { id: 1, domain: 'Supply Chain', title: 'Customer Support - Smart Customer Support Agent for Supply Chain', description: '24/7 customer support with instant response times and automated, query resolution with integrated tools.', icon: '📧' },
  { id: 2, domain: 'Technology', title: 'Testing - Automate Web Application testing', description: 'Automated web application testing processes for efficient and accurate results, integrated with Jira and other tools.', icon: '🛡️' },
  { id: 3, domain: 'Marketing', title: 'Marketing - Real-Time Marketing Optimization', description: 'Enhance campaigns with real-time insights and optimize with data-driven insights.', icon: '📊' },
  { id: 4, domain: 'Sales', title: 'Sales - Dynamic Sales Agent', description: 'Automate prospecting and follow-ups while maintaining personal touch. Connected with tools like Salesforce and other CRM to track.', icon: '💰' },
  { id: 5, domain: 'HR', title: 'HR - Streamline hiring and employee engagement', description: 'HR agents can create job requisitions, filter through large applicant pools, identify top talent, schedule interviews, generate and send email.', icon: '💼' },
  { id: 6, domain: 'Insurance', title: 'Insurance Claim Agent', description: 'Claim AI agent can automate the entire claims workflow, ensuring accuracy, speed, and efficiency.', icon: '💼' },
  { id: 7, domain: 'Research', title: 'Market Research - Trend Analysis', description: 'Analyze Market trends with AI for actionable insights and smarter marketplace decisions.', icon: '📈' },
  { id: 8, domain: 'Technology', title: 'Project Manager - AI Project Manager or Scrum Manager Agent', description: 'An innovative AI-powered tool designed to redefine how projects are planned, managed, and executed.', icon: '📄' },
];

const AgentsPage = () => {
  const [selectedDomain, setSelectedDomain] = useState('All');

  const handleDomainClick = (domain) => {
    setSelectedDomain(domain);
  };

  const filteredAgents =
    selectedDomain === 'All'
      ? agentsData
      : agentsData.filter((agent) => agent.domain === selectedDomain);

  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 py-12" style={{ paddingTop: '3cm' }}>
        <h1 className="text-4xl font-bold text-center mb-6">Unlock new level of efficiency with AI Agents</h1>
        <p className="text-center text-lg text-gray-600 mb-12">
        Build a team of intelligent agents that work 24/7, eliminating errors and accelerating your business processes.
        </p>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center"></h1>
        <div className="flex space-x-4 mb-8 justify-center">
          {['All', 'Sales', 'Supply Chain', 'Marketing', 'Technology', 'HR', 'Insurance', 'Research', 'Finance'].map((domain) => (
            <button
              key={domain}
              onClick={() => handleDomainClick(domain)}
              className={`px-4 py-2 rounded-md font-medium ${
                selectedDomain === domain ? 'bg-blue-500 text-gray-900' : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              {domain}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent) => (
            <div key={agent.id} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">{agent.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{agent.title}</h2>
              <p className="text-gray-400 mb-4">{agent.description}</p>
              <a
                href="#"
                className="text-blue-500 font-medium hover:underline flex items-center"
              >
                Learn more <span className="ml-2">&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentsPage;
