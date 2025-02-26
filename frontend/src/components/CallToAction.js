import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to transform your business?</h2>
        <p className="text-lg text-gray-600 mb-6">Sign up today and see the difference AI can make.</p>
        <a href="#signup" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Get Started Now</a>
      </div>
    </section>
  );
};

export default CallToAction;