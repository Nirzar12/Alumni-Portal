import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

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
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10  tracking-wide border-b-4 border-blue-500 inline-block pb-2">
          Contact Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-gray-800 p-5 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-br hover:from-gray-800 hover:via-gray-700 hover:to-gray-600 hover:shadow-blue-500/30 hover:shadow-lg flex flex-col h-full"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-60 object-fill rounded-sm mb-4 shadow-lg bg-gray-700"
              />
              <div className="flex flex-col flex-grow">
                <h4 className="text-xl font-semibold text-blue-300 mb-1 text-center">
                  {member.name}
                </h4>
                <p className="text-gray-200 mb-1 text-center">
                  <strong>Role:</strong> {member.role}
                </p>
                <p className="text-gray-400 mb-1 text-center overflow-hidden truncate group-hover:whitespace-normal group-hover:overflow-visible group-hover:text-ellipsis transition-all duration-300">
                  <strong>Email:</strong> {member.email}
                </p>
                <p className="text-gray-400 mb-3 text-center">
                  <strong>Phone:</strong> {member.phone}
                </p>

                <div className="flex justify-center space-x-4 mt-auto text-blue-400">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-transform transform group-hover:scale-110"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-transform transform group-hover:scale-110"
                  >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </a>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 transition-transform transform group-hover:scale-110"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
