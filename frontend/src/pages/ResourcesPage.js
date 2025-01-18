import React, { useState } from 'react';

const resourcesData = [
  { id: 1, category: 'Supply Chain', title: 'Supply Chain SaaS', icon: '🛒' },
  { id: 2, category: 'Finance & Accounting', title: 'Ledger', icon: '💳' },
  { id: 3, category: 'Marketing', title: 'LinkedIn', icon: '🔗' },
  { id: 4, category: 'Marketing', title: 'Slack', icon: '💬' },
  { id: 5, category: 'Sales', title: 'Calendly', icon: '📅' },
  { id: 6, category: 'Artificial Intelligence', title: 'Google Vision', icon: '🔍' },
  { id: 7, category: 'Communication', title: 'Zoom', icon: '📹' },
  { id: 8, category: 'Developers', title: 'GitHub', icon: '🐙' },
  { id: 9, category: 'Developers', title: 'DocuSign', icon: '✍️' },
  { id: 10, category: 'Insurance', title: 'Insurance Claim System', icon: '🔗' },
  { id: 11, category: 'Finance & Accounting', title: 'QuickBooks', icon: '📒' },
  { id: 12, category: 'Sales', title: 'Salesforce', icon: '🌟' },
  { id: 13, category: 'Marketing', title: 'Gmail', icon: '✉️' },
  { id: 14, category: 'Developers', title: 'Google Drive', icon: '📂' },
  { id: 15, category: 'Marketing', title: 'LinkedIn', icon: '🔗' },
  { id: 16, category: 'Sales', title: 'Salesforce', icon: '🌟' },
  { id: 17, category: 'HR', title: 'WorkDay', icon: '🛠️' },
];

const ResourcesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Popular');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredResources =
    selectedCategory === 'Popular'
      ? resourcesData
      : resourcesData.filter((resource) => resource.category === selectedCategory);

  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 py-12" style={{ paddingTop: '3cm' }}>
        <h1 className="text-4xl font-bold text-center mb-6">Integrate your AI workforce seamlessly with your existing tech stack</h1>
        <p className="text-center text-lg text-gray-600 mb-12">
        Our AI agents collaborate with your team and utilize the tools you use every day, boosting productivity without disrupting your workflow.
        </p>
      <div className="container mx-auto flex flex-col md:flex-row">

        {/* Left Sidebar */}
        <div className="w-full md:w-1/4 mb-8 md:mb-0 md:mr-6">
          <div className="bg-gray-800 p-4 rounded-lg">
            {['Popular', 'Supply Chain', 'Finance & Accounting', 'Marketing', 'Sales', 'Developers', 'Insurance', 'HR', 'More Coming Soon'].map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`w-full text-left px-4 py-2 rounded-md font-medium mb-2 ${
                  selectedCategory === category ? 'bg-blue-500 text-gray-900' : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Resource Cards */}
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="text-4xl mb-4">{resource.icon}</div>
              <h2 className="text-lg font-semibold mb-2 text-center">{resource.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
