import React, { useState } from 'react';
import heroImage from '../assets/hero-image.svg';
import SignUpPopup from './SignUpPopup';
import axios from 'axios';

const HeroSection = () => {
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);
  const [signUpMessage, setSignUpMessage] = useState('');

  const handleOpenSignUpPopup = () => setIsSignUpPopupOpen(true);
  const handleCloseSignUpPopup = () => setIsSignUpPopupOpen(false);

  const handleOpenVideoPopup = () => setIsVideoPopupOpen(true);
  const handleCloseVideoPopup = () => setIsVideoPopupOpen(false);

  const handleSignUpSubmit = async (data) => {
    console.log('Submitting Sign Up:', data);
    try {
      const response = await axios.post('http://localhost:5000/api/forms/signup', data);
      console.log('Response:', response.data);
      setSignUpMessage(response.data.message);
      setTimeout(() => {
        setSignUpMessage('');
        handleCloseSignUpPopup();
      }, 3000);
    } catch (error) {
      console.error('Sign Up Error:', error);
      setSignUpMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <section className="bg-white py-20 mt-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold text-gray-800">Revolutionize Work with AI-Powered Efficiency</h1>
          <p className="mt-6 text-2xl text-gray-600">Empower your team. Deploy your first AI agent today!</p>
          <p className="mt-4 text-lg text-gray-500">
            Scale smarter with AI teammates handling tasks seamlessly. Boost outcomes, not overhead.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
              onClick={handleOpenSignUpPopup} // Trigger SignUpPopup
            >
              Try for Free
            </button>
            <button
              className="bg-gray-200 text-blue-600 px-6 py-3 rounded hover:bg-gray-300"
              onClick={handleOpenVideoPopup} // Open Video Popup
            >
              Quick Demo
            </button>
          </div>
          <div className="mt-12">
            <img src={heroImage} alt="Hero" className="mx-auto max-w-3xl" />
          </div>
        </div>
      </section>

      {/* Video Popup */}
      {isVideoPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-4xl w-full">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-gray-700">
                Conversational AI Agent of Health Insurance Claim Process, Integrated with Insurance System
              </h2>
              <button
                onClick={handleCloseVideoPopup}
                className="text-gray-500 hover:text-gray-700 text-lg"
              >
                ✖
              </button>
            </div>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-md"
                src="https://youtube.com/embed/XDkn9a8Iz5Y"
                title="AI Agent for Insurance Claim Process"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

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
                    <path d="M12 1C6.48 1 2 5.48 2 11s4.48 10 10 10 10-4.48 10-10S17.52 1 12 1zm1 17h-2v-2h2v2zm1.31-5.9c-.58.49-1.38.9-2.31.9h-1v2h-2v-2h-1c-1.66 0-3-1.34-3-3 0-.76.29-1.45.77-1.98.67-.73 1.73-1.17 2.92-1.17h1v-2h2v2h1c1.66 0 3 1.34 3 3 0 .76-.29 1.45-.77 1.98zM12 11h-1c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Cost Efficiency</h3>
              <p className="text-gray-600">Forget expensive consultants and complex integrations. Our AI agents are the most economical solution for deploying enterprise-grade Agentic AI across your business roles.</p>
            </div>
          </div>
        </div>
      </section>

      {isSignUpPopupOpen && <SignUpPopup onClose={handleCloseSignUpPopup} onSubmit={handleSignUpSubmit} />}
    </>
  );
};

export default HeroSection;
