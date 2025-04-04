import React from "react";

const teamMembers = [
  {
    name: "Nirza Diwan",
    email: "nirzar@example.com",
    phone: "+91 98765 43210",
    role: "Team Lead",
  },
  {
    name: "Deep Patel",
    email: "deep@example.com",
    phone: "+91 98765 12345",
    role: "Frontend Developer",
  },
  {
    name: "Bhavya Shah",
    email: "bhavya@example.com",
    phone: "+91 99887 65432",
    role: "Backend Developer",
  },
  {
    name: "Shyam Kakkad",
    email: "shyam@example.com",
    phone: "+91 91234 56789",
    role: "Security Engineer",
  },
];

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-4 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
        Contact Our Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h4 className="text-xl font-semibold text-blue-700">{member.name}</h4>
            <p className="text-gray-600"><strong>Role:</strong> {member.role}</p>
            <p className="text-gray-600"><strong>Email:</strong> {member.email}</p>
            <p className="text-gray-600"><strong>Phone:</strong> {member.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;

