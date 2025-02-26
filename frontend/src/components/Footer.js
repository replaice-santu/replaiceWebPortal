
import React from 'react';
import logo from '../assets/logo.png';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';



const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <img src={logo} alt="Replaice Logo" className="h-8" />
            <p className="mt-4 text-white-600">AI-powered efficiency for modern businesses.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white-600 hover:text-blue-600"><FaTwitter size={24} /></a>
              <a href="https://www.linkedin.com/company/replaice" className="text-white-600 hover:text-blue-600"><FaLinkedin size={24} /></a>
              <a href="#" className="text-white-600 hover:text-blue-600"><FaGithub size={24} /></a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold text-white-800">About replaice</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-white-600 hover:text-blue-600">About</a></li>
              <li><a href="#" className="text-white-600 hover:text-blue-600">Team</a></li>
              <li><a href="#" className="text-white-600 hover:text-blue-600">Career</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold text-white-800">Explore replaice</h3>
            
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-white-600 hover:text-blue-600">Consulting</a></li>
              <li><a href="#" className="text-white-600 hover:text-blue-600">Blog</a></li>
              <li><a href="#" className="text-white-600 hover:text-blue-600">Support</a></li>
            </ul>
          </div>
    
          {/* Stay Updated */}
          <div>
            <h3 className="text-lg font-semibold text-white-800">Stay Updated</h3>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="mt-2 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-center text-white-600">
          <p>&copy; 2025 replaice.ai. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
