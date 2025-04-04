import React from "react";

const Events = () => {
  // Events data with image URLs
  const events = [
    {
      name: "Triveni 2024",
      date: "January 2024",
      description:
        "Triveni 2024 is the annual fest of LD College of Engineering, featuring cultural and technical events.",
      link: "https://www.knowafest.com/explore/events/2024/01/0316-triveni-2024-ld-college-engineering-annual-fest-ahmedabad",
      image: "data:image/jpeg;base64,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",
    },
    {
      name: "Lakshya 2023",
      date: "March 2023",
      description:
        "Lakshya 2023 is a technical festival at LD College of Engineering, showcasing innovative projects and workshops.",
      link: "https://www.ulektzevents.com/Lakshya-2023%2C-LD-College-of-Engineering%2C-Technical-Festival%2C-Ahmedabad%2C-Gujarat-Mjc5MQ%3D%3D",
      image: "https://media.istockphoto.com/id/1345057967/photo/darts.webp?a=1&b=1&s=612x612&w=0&k=20&c=ITqEgXHzz1WA0zQ4ldzHOSXf1Pxzu4YVmcjslkMU8Ao=",
    },
    {
      name: "Global Alumni Convention",
      date: "January 2024",
      description:
        "LD College of Engineering hosted the Global Alumni Convention, bringing together alumni from around the world.",
      link: "http://www.gujaratheadline.com/ld-college-of-engineering-hosted-global-alumni-convention/",
      image:
        "https://images.unsplash.com/photo-1561489396-888724a1543d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGV2ZW50fGVufDB8fDB8fHww",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Upcoming Events at LDCE
      </h1>

      {events.map((event, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden mb-6"
        >
          {/* Left: Event Image */}
          <div className="w-full md:w-1/3">
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Event Details */}
          <div className="w-full md:w-2/3 p-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              {event.name}
            </h2>
            <p className="text-gray-600 mt-2">
              <strong>Date:</strong> {event.date}
            </p>
            <p className="text-gray-700 mt-3">{event.description}</p>
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              More Details
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
