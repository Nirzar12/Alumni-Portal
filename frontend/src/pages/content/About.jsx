import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaHistory, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="flex flex-col items-center mb-8">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <FaGraduationCap className="text-blue-600 text-4xl" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-2">
                LD College of Engineering
              </h1>
              <p className="text-blue-600 font-medium">Established 1948</p>
            </div>

            <div className="space-y-6 text-gray-700">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start"
              >
                <FaHistory className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <p>
                  <strong>LD College of Engineering (LDCE)</strong>, founded in <strong>1948</strong>, stands as a beacon of excellence in engineering education in India. Affiliated with <strong>Gujarat Technological University (GTU)</strong>, LDCE offers a broad range of undergraduate and postgraduate programs across multiple disciplines.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start"
              >
                <FaGraduationCap className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <p>
                  With a legacy of innovation, research, and community engagement, LDCE has nurtured generations of engineers who have made significant contributions in academia, industry, and entrepreneurship.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-start"
              >
                <FaUsers className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <p>
                  The <strong>Alumni Portal</strong> is your gateway to reconnect, collaborate, and celebrate the journey we began here. Through this platform, we foster lifelong relationships, mentorship opportunities, and a shared commitment to excellence.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-10 text-center"
            >
              <p className="text-xl font-semibold text-blue-700">
                Once an LDCEian, always an LDCEian.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;