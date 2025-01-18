import React, { useState } from 'react';

const PricingPage = () => {
  const [faqs, setFaqs] = useState([
    { question: 'What is included in the Free plan?', answer: 'The Free plan includes 100 credits/day, 1 user, 10MB of Knowledge, low-code tool builder, and access to different LLM models.', open: false },
    { question: 'Can I upgrade from Free to Pro?', answer: 'Yes, you can easily upgrade from Free to Pro at any time from your account settings.', open: false },
    { question: 'What does the Custom plan include?', answer: 'The Custom plan is tailored to your needs. Contact us for a detailed quote.', open: false },
  ]);

  const toggleFaq = (index) => {
    setFaqs(
      faqs.map((faq, i) => ({
        ...faq,
        open: i === index ? !faq.open : faq.open,
      }))
    );
  };

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen py-12 px-6" style={{ paddingTop: '3cm' }}>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Pricing</h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Affordable plans to hire your AI Agents and take your productivity to the next level.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Free</h2>
            <p className="text-gray-600 mb-6">Build and deploy AI tools and agents.</p>
            <p className="text-4xl font-bold mb-2">$0</p>
            <p className="text-gray-600 mb-6">per month</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Try now</button>
            <ul className="mt-6 space-y-2 text-gray-600">
              <li>&#10003; 100 credits /day</li>
              <li>&#10003; 1 user</li>
              <li>&#10003; 10MB of Knowledge</li>
              <li>&#10003; Low-code tool builder</li>
              <li>&#10003; Access to different LLM models</li>
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Pro</h2>
            <p className="text-gray-600 mb-6">Take your AI app to production at scale.</p>
            <p className="text-4xl font-bold mb-2">$19</p>
            <p className="text-gray-600 mb-6">per month</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Try now</button>
            <ul className="mt-6 space-y-2 text-gray-600">
              <li>&#10003; 10,000 credits /month</li>
              <li>&#10003; 4 credits per run</li>
              <li>&#10003; 1 user</li>
              <li>&#10003; 100MB of Knowledge</li>
              <li>&#10003; Schedule app runs</li>
              <li>&#10003; Live-chat support</li>
            </ul>
          </div>

          {/* Custom Plan */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Custom</h2>
            <p className="text-gray-600 mb-6">Tailored to your business needs.</p>
            <p className="text-4xl font-bold mb-2">Contact</p>
            <p className="text-gray-600 mb-6">for pricing</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Contact Us</button>
            <ul className="mt-6 space-y-2 text-gray-600">
              <li>&#10003; Customized credits</li>
              <li>&#10003; Multiple users</li>
              <li>&#10003; Advanced Knowledge options</li>
              <li>&#10003; Priority support</li>
              <li>&#10003; Dedicated account manager</li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left font-medium text-lg bg-gray-200 p-4 rounded-md flex justify-between items-center"
              >
                {faq.question}
                <span>{faq.open ? '-' : '+'}</span>
              </button>
              {faq.open && (
                <div className="mt-2 px-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
