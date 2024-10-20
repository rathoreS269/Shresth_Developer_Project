import React from 'react'

function About() {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto bg-gray-200 rounded-lg shadow-lg shadow-slate-500 p-6"
        >
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Trusted Real Estate Partner</h2>
            <p className="text-gray-600 leading-relaxed">
              At <strong>Shresth Developer</strong>, we believe that finding the perfect home should be a memorable and rewarding experience. With years of experience in the industry, our dedicated team is committed to guiding you through every step of the real estate process, ensuring that you find not just a house, but a home.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to simplify the buying and selling experience by providing unparalleled customer service and expert advice. We leverage the latest technology and market insights to help you make informed decisions in today’s dynamic real estate market.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Values</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li><strong>Integrity:</strong> We prioritize honesty and transparency in all our dealings.</li>
              <li><strong>Excellence:</strong> We strive for excellence in every transaction.</li>
              <li><strong>Client-Centric:</strong> Our clients’ needs are our top priority.</li>
              <li><strong>Community Focused:</strong> We are dedicated to giving back to the communities we serve.</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 leading-relaxed">
              With a proven track record of success and a passion for real estate, our team brings a wealth of knowledge and expertise to the table. Whether you are buying, selling, or investing, we are here to help you navigate the complexities of the real estate market and achieve your goals. 
            </p>
            <p className="mt-4 text-gray-600">
              Let us help you find your dream home or sell your property for the best possible price. Contact us today!
            </p>
          </section>
        </div>
      </div>
  )
}

export default About