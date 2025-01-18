import React, { useState } from 'react';
import axios from 'axios';
import joinus from '../assets/joinus.jpeg'

const JoinUsPopup = ({ onClose, onSubmit, message = '' }) => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      position: '',
      resume: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleFileChange = (e) => {
        setFormData({ ...formData, resume: e.target.files[0] });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', formData.name);
        form.append('email', formData.email);
        form.append('position', formData.position);
        form.append('resume', formData.resume);
    
        onSubmit(form);
      };
      
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <div className="flex flex-col md:flex-row items-center mb-6">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
            <p className="text-gray-600 mb-4">Be at the forefront of the Agentic AI revolution. We're pushing the boundaries of autonomous systems. If you're a Data Science Engineer or a driven Sales Associate passionate about Agentic AI, join us!</p>
            <img src={joinus} alt="replaice.ai joinus" className="h-40" />
          </div>
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Position *</label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md"
                  required
                >
                  <option value="">Select a position</option>
                  <option value="Data Science Engineer">Data Science Engineer</option>
                  <option value="Fullstack Developer">Fullstack Developer</option>
                  <option value="Business Development">Business Development</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Upload Resume *</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
            {message && <p className="mt-4 text-green-500">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsPopup;
