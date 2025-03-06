import Image from 'next/image';
export default function About() {
  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white mb-12">
        <img
          src="/DSC08454.JPG" // Replace with your banner image
          alt="About Banner"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold mb-4">About <span className="text-yellow-500">Me</span> </h1>
          <p className="text-lg max-w-2xl">
            Empowering growth, clarity, and well-being with purpose-driven coaching.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-6 text-yellow-500">Who I Am</h2>
        <p className="text-lg text-white leading-relaxed">
          I am Sarvesh Mishra, a coach who blends the art of self-branding, marketing clarity, and holistic wellness to inspire individuals to realize their fullest potential. With over 15 years of experience, I’ve dedicated my life to helping others unlock their true value, achieve personal and professional clarity, and lead lives of purpose and balance.
        </p>
      </div>

      {/* PR Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4 text-yellow-500">Public Relations</h3>
          <p className="text-white leading-relaxed">
            Effective communication is key to building a strong reputation. With expertise in public relations, I help individuals and businesses craft compelling narratives, manage their public image, and develop strategies that enhance brand credibility. From media outreach to crisis communication, I provide guidance to ensure your story is heard in the right way.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/5806789.jpg" // Replace with your PR-related image
            alt="Public Relations"
            className="w-full h-[300px] object-cover rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>

      {/* Media Consultant Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-16">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4 text-yellow-500">Media Consultant</h3>
          <p className="text-white leading-relaxed">
            Navigating the ever-evolving media landscape can be challenging. As a media consultant, I work with clients to develop media strategies that maximize their reach and impact. Whether it’s content creation, digital marketing, or media training, I provide insights and expertise to help you stand out in a competitive industry.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/4846426.jpg" // Replace with your media-related image
            alt="Media Consultant"
            className="w-full h-[300px] object-cover rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>

      {/* Footer Call-to-Action */}
      <div className="bg-gray-900 text-white text-center py-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Join Me <span className="text-yellow-500">on This Journey</span></h2>
        <p className="text-lg mb-6">
          Ready to transform your life and achieve clarity in your goals? Connect with me to start your journey of growth and success.
        </p>
        <a
          href="/contact"
          className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

