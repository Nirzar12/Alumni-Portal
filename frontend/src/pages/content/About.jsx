import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#1e293b] flex items-center justify-center px-4 py-10">
      <div className="bg-white max-w-4xl p-8 rounded-2xl shadow-xl text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">
          Welcome to LD College of Engineering, Ahmedabad
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>LD College of Engineering (LDCE)</strong>, founded in <strong>1948</strong>, stands as a beacon of excellence in engineering education in India. Affiliated with <strong>Gujarat Technological University (GTU)</strong>, LDCE offers a broad range of undergraduate and postgraduate programs across multiple disciplines.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          With a legacy of innovation, research, and community engagement, LDCE has nurtured generations of engineers who have made significant contributions in academia, industry, and entrepreneurship.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          The <strong>Alumni Portal</strong> is your gateway to reconnect, collaborate, and celebrate the journey we began here. Through this platform, we foster lifelong relationships, mentorship opportunities, and a shared commitment to excellence.
        </p>
        <p className="text-blue-500 font-semibold mt-6 text-xl">
          Once an LDCEian, always an LDCEian.
        </p>
      </div>
    </div>
  );
};

export default About;
