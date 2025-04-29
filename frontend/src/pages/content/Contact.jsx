import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { toast } from "react-hot-toast";

const teamMembers = [
  {
    name: "Nirzar Diwan",
    email: "nirzardiwan14@gmail.com",
    phone: "+91 95866 99293",
    role: "Team Lead",
    photo: "/team/nirzar.jpg",
    linkedin: "https://www.linkedin.com/in/nirzardiwan",
    github: "https://github.com/nirzardiwan",
    instagram: "https://instagram.com/nirzardiwan",
  },
  {
    name: "Deep Patel",
    email: "deepkpatel1062004@gmail.com",
    phone: "+91 75671 26434",
    role: "Frontend Developer",
    photo: "/team/deep.jpg",
    linkedin: "https://www.linkedin.com/in/deep-patel",
    github: "https://github.com/deeppatel",
    instagram: "https://instagram.com/deeppatel",
  },
  {
    name: "Bhavya Shah",
    email: "bhavya@example.com",
    phone: "+91 99887 65432",
    role: "Backend Developer",
    photo: "/team/Bhavya.jpeg",
    linkedin: "https://www.linkedin.com/in/bhavyashah",
    github: "https://github.com/bhavyashah",
    instagram: "https://instagram.com/bhavyashah",
  },
  {
    name: "Shyam Kakkad",
    email: "shyam@example.com",
    phone: "+91 70968 81951",
    role: "Security Engineer",
    photo: "/team/Shyam.jpeg",
    linkedin: "https://www.linkedin.com/in/shyamkakkad",
    github: "https://github.com/shyamkakkad",
    instagram: "https://instagram.com/shyamkakkad",
  },
];

const Contact = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Meet Our Team</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Get in touch with the developers behind this alumni portal
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition"
            >
              <div className="relative h-64 bg-slate-100">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/placeholder-profile.jpg";
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-slate-300">{member.role}</p>
                </div>
              </div>

              <div className="p-6">
                <div
                  className="flex items-center mb-3 cursor-pointer"
                  onClick={() => copyToClipboard(member.email)}
                >
                  <FaEnvelope className="text-blue-600 mr-2" />
                  <span className="text-slate-700 hover:text-blue-600 transition">
                    {member.email}
                  </span>
                </div>
                <div
                  className="flex items-center mb-4 cursor-pointer"
                  onClick={() => copyToClipboard(member.phone)}
                >
                  <FaPhone className="text-blue-600 mr-2" />
                  <span className="text-slate-700 hover:text-blue-600 transition">
                    {member.phone}
                  </span>
                </div>

                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 transition"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-black transition"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800 transition"
                  >
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
