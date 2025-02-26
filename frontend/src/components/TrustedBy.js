import React from 'react';
import company1 from '../assets/OpenAI.png';
import company2 from '../assets/Meta.png';
import company3 from '../assets/nvidia.png';
import company4 from '../assets/Hugging-Face.png';
import company5 from '../assets/langchain.png';

const TrustedBy = () => {
    return (
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Trusted & Supported By Industry Leaders</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src={company1} alt="OpenAI" className="h-16 w-32 object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
            <img src={company2} alt="Meta" className="h-16 w-32 object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
            <img src={company3} alt="NVIDIA" className="h-16 w-32 object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
            <img src={company4} alt="Hugging-Face" className="h-16 w-32 object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
            <img src={company5} alt="langchain" className="h-16 w-32 object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </section>
    );
  };
  
  export default TrustedBy;
    