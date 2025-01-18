import React, { useState } from 'react';
import logo from '../assets/logo.png';
import SignUpPopup from './SignUpPopup';
import JoinUsPopup from './JoinUsPopup';

import { Link } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [isJoinUsPopupOpen, setIsJoinUsPopupOpen] = useState(false);
  const [signUpMessage, setSignUpMessage] = useState('');
  const [joinUsMessage, setJoinUsMessage] = useState('');

  const handleOpenSignUpPopup = () => setIsSignUpPopupOpen(true);
  const handleCloseSignUpPopup = () => setIsSignUpPopupOpen(false);

  const handleOpenJoinUsPopup = () => setIsJoinUsPopupOpen(true);
  const handleCloseJoinUsPopup = () => setIsJoinUsPopupOpen(false);

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

  const handleJoinUsSubmit = async (formData) => {
    console.log('Submitting Join Us:', formData); // Debug log
    try {
      const response = await axios.post('http://localhost:5000/api/forms/joinus', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setJoinUsMessage(response.data.message);
      setTimeout(() => {
        setJoinUsMessage('');
        handleCloseJoinUsPopup();
      }, 3000);
    } catch (error) {
      console.error('Join Us Error:', error);
      setJoinUsMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <head>
        <title>Replaice.ai - AI Agents for Modern Businesses</title>
        <meta name="description" content="Replaice.ai offers enterprise-grade AI agents tailored for various domains like Talent Acquisition, Customer Support, Insurance Claims, and Supply Chain. Revolutionize your business with cost-effective AI solutions." />
        <meta name="keywords" content="AI Agents, Agentic AI, AI Agents for Talent Acquisition, AI Agents for Customer Support, AI Agents for Insurance Claims, AI Agents for Supply Chain, Cost-effective AI Agents, Enterprise AI Agents, Replaice.ai" />
        <meta name="author" content="Replaice.ai" />
        <meta property="og:title" content="Replaice.ai - AI Agents for Modern Businesses" />
        <meta property="og:description" content="Discover the power of AI agents in transforming your business processes with Replaice.ai." />
        <meta property="og:url" content="https://replaice.ai" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://replaice.ai/assets/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Replaice.ai - AI Agents for Modern Businesses" />
        <meta name="twitter:description" content="Explore the capabilities of AI agents in diverse industries with Replaice.ai." />
        <meta name="twitter:image" content="https://replaice.ai/assets/logo.png" />
      </head>
      <header className="bg-white fixed top-0 w-full shadow-md z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <img src={logo} alt="Replaice Logo" className="h-8" />
          </div>
          <nav className="space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/agents" className="text-gray-600 hover:text-blue-600">Agents</Link>
            <Link to="/resources" className="text-gray-600 hover:text-blue-600">Resources</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-blue-600">Pricing</Link>
            <button
              className="text-gray-600 hover:text-blue-600"
              onClick={handleOpenJoinUsPopup}
            >
              Join Us
            </button>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={handleOpenSignUpPopup}
            >
              Get Started
            </button>
          </nav>
        </div>
        {isSignUpPopupOpen && (
          <SignUpPopup
            onClose={handleCloseSignUpPopup}
            onSubmit={handleSignUpSubmit}
            message={signUpMessage}
          />
        )}
        {isJoinUsPopupOpen && (
          <JoinUsPopup
            onClose={handleCloseJoinUsPopup}
            onSubmit={handleJoinUsSubmit}
            message={joinUsMessage}
          />
        )}
      </header>
    </>
  );
};

export default Header;
