
import React from 'react';
import heroImage from '../assets/hero-image.svg';

const HeroSection = ({ onSignUpClick }) => {
  return (
    <>
      <section className="bg-white py-20 mt-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold text-gray-800">Revolutionize Work with AI-Powered Efficiency</h1>
          <p className="mt-6 text-2xl text-gray-600">Empower your team. Deploy your first AI agent today!</p>
          <p className="mt-4 text-lg text-gray-500">Scale smarter with AI teammates handling tasks seamlessly. Boost outcomes, not overhead.</p>
          <div className="mt-8 flex justify-center space-x-4">
          <button
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          onClick={onSignUpClick} // Trigger SignUpPopup
        >
          Try for Free
        </button>
        <button
          className="bg-gray-200 text-blue-600 px-6 py-3 rounded hover:bg-gray-300"
          onClick={onSignUpClick} // Trigger SignUpPopup
        >
          Request Demo
        </button>
          </div>
          <div className="mt-12">
            <img src={heroImage} alt="Hero" className="mx-auto max-w-3xl" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Features That Set Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-blue-600 text-white p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M12 2a2 2 0 110 4 2 2 0 010-4zm-6 6h12a2 2 0 012 2v6h1a1 1 0 010 2H3a1 1 0 010-2h1v-6a2 2 0 012-2zm10 2H8v6h8v-6zm-3 1a1 1 0 100 2 1 1 0 000-2zM9 11a1 1 0 100 2 1 1 0 000-2z" />
                </svg>

                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Advanced AI Agents</h3>
              <p className="text-gray-600">Purpose-built AI agents designed for specific business roles deliver significant time savings and productivity boosts by working continuously and efficiently, handling tasks at scale.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-blue-600 text-white p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l7 4v6c0 5-3.58 9.35-7 10-3.42-.65-7-5-7-10V6l7-4z" />
                </svg>

                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Choose between local or private cloud deployment models for enhanced data privacy, complemented by bank-grade security and SOC 2 compliance.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-blue-600 text-white p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 2a1 1 0 00-1 1v5H5a3 3 0 100 6h3v5a1 1 0 001 1h6a1 1 0 001-1v-5h3a3 3 0 100-6h-3V3a1 1 0 00-1-1H9z" />
                </svg>

                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Integration</h3>
              <p className="text-gray-600">Robust integration with existing systems like Salesforce, Workday, or Supply Chain Systems. Platform includes a wide range of plugins for specific tasks.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-blue-600 text-white p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1a10 10 0 100 20 10 10 0 000-20zm-1 4h2v2.09c.47.07.92.2 1.35.37.38.14.55.58.38.95-.15.32-.53.45-.85.31a4.93 4.93 0 00-1.88-.36c-1.31 0-2.1.45-2.1 1.26 0 .94.97 1.26 2.47 1.68 1.6.44 3.53 1.1 3.53 3.06 0 1.5-1.17 2.5-2.91 2.8V19h-2v-2.09a6.15 6.15 0 01-2.01-.62c-.37-.2-.5-.68-.29-1.05.2-.37.69-.5 1.06-.3.54.3 1.21.48 1.94.48.85 0 2.23-.2 2.23-1.3 0-.97-1.15-1.37-2.56-1.76-1.48-.42-3.44-1.03-3.44-3.1 0-1.43 1.08-2.54 2.91-2.8V5z" />
                </svg>

                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Cost Efficiency</h3>
              <p className="text-gray-600">Forget expensive consultants and complex integrations. Our AI agents are the most economical solution for deploying enterprise-grade Agentic AI across your business roles.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;