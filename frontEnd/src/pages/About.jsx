import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
const About = () => {
  return (
    <div className="bg-gray-100 p-8">
      {/* Image Container */}
      <div className="max-w-6xl h-[500px] mx-auto bg-white rounded-lg shadow-lg p-6 relative">
        <img 
          src="https://www.sobharealty.com/media/fxrfl5pr/banner-13.jpg?width=1920&height=944&v=1db2933b297df10" 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-85 rounded-lg"
        />
        
        {/* Text over the image */}
        <h1 className="text-4xl font-bold text-center text-gray-800 relative z-10">Choose the Best</h1>
        <p className="text-gray-800 mt-2 text-lg mb-4 relative z-10 mx-auto text-center">
          Welcome to shresth developer! We are dedicated to helping you find your dream home.
        </p>
      </div>
      <div className="max-w-6xl mx-auto mt-2 bg-gray-500 bg-opacity-10 rounded-lg p-6 shadow-md shadow-gray-500">
        <div className="text-black text-center">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p>
            At <strong>Shresth Developer</strong>, we believe that finding the perfect home should be a memorable and rewarding experience. With years of experience in the industry, our dedicated team is committed to guiding you through every step of the real estate process, ensuring that you find not just a house, but a home.
          </p>
          <p className="flex items-center mt-6 gap-2 text-slate-600  text-sm">
            <FaMapMarkerAlt className='text-green-700' />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  'saraidhela dhanbad'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                saraidhela dhanbad
              </a>
            </p>
        </div>
      </div>

  
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-200 p-5 rounded-lg shadow-lg shadow-gray-700">
          <h3 className="text-xl font-semibold">Expert Knowledge</h3>
          <p className="text-black">Our team has extensive knowledge of the local market.</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg  shadow-gray-700 ">
          <h3 className="text-xl font-semibold">Personalized Service</h3>
          <p className="text-black">We tailor our services to meet your unique needs.</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg  shadow-gray-700">
          <h3 className="text-xl font-semibold">Integrity & Transparency</h3>
          <p className="text-black">We believe in honest and open communication.</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg  shadow-gray-700">
          <h3 className="text-xl font-semibold">Client Satisfaction</h3>
          <p className="text-black">Your satisfaction is our top priority.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
