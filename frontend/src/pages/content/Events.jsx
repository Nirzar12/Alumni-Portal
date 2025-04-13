// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const EventList = () => {
//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [pastEvents, setPastEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const fetchEvents = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");

//       const [upcomingRes, pastRes] = await Promise.all([
//         axios.get("http://localhost:5050/api/app/events/tag/upcoming", {
//           headers: { Authorization: `Bearer ${token}` },
//         }),
//         axios.get("http://localhost:5050/api/app/events/tag/past", {
//           headers: { Authorization: `Bearer ${token}` },
//         }),
//       ]);

//       setUpcomingEvents(upcomingRes.data);
//       setPastEvents(pastRes.data);
//     } catch (err) {
//       console.error("Error loading events:", err);
//       setError("Failed to fetch events");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const openModal = (event) => {
//     setSelectedEvent(event);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setSelectedEvent(null);
//     setShowModal(false);
//   };

//   const renderEvents = (events) =>
//     events.map((event) => (
//       <div
//         key={event._id}
//         className="p-2 bg-white border rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col text-sm"
//       >
//         {event.poster && (
//           <img
//             src={`http://localhost:5050${event.poster}`}
//             alt="Event Poster"
//             className="w-full aspect-[3/2] object-cover rounded-md mb-2"
//           />
//         )}
//         <h2 className="text-base font-semibold text-gray-800 line-clamp-1">
//           {event.name}
//         </h2>
//         <p className="text-xs text-gray-500 mb-1">
//           {new Date(event.date).toLocaleDateString()}
//         </p>
//         <p className="text-xs text-gray-700 line-clamp-2 mb-2">
//           {event.description}
//         </p>
//         <button
//           onClick={() => openModal(event)}
//           className="mt-auto bg-blue-600 hover:bg-blue-700 text-white px-2 py-2 rounded text-md"
//         >
//           View Details
//         </button>
//       </div>
//     ));

//   if (loading) return <p className="text-center py-10">Loading events...</p>;
//   if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

//   return (
//     <div className="p-6 space-y-12">
//       {/* Upcoming Events */}
//       <div>
//         <h2 className="text-3xl font-bold text-center text-white mb-8 tracking-wide border-b-4 border-blue-500 inline-block pb-1">
//           Upcoming Events
//         </h2>
//         {upcomingEvents.length > 0 ? (
//           <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//             {renderEvents(upcomingEvents)}
//           </div>
//         ) : (
//           <p className="text-gray-500">No upcoming events found.</p>
//         )}
//       </div>

//       {/* Past Events */}
//       <div>
//         <h2 className="text-3xl font-bold text-center text-white mb-8 tracking-wide border-b-4 border-blue-500 inline-block pb-1">
//           Past Events
//         </h2>
//         {pastEvents.length > 0 ? (
//           <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//             {renderEvents(pastEvents)}
//           </div>
//         ) : (
//           <p className="text-gray-500">No past events found.</p>
//         )}
//       </div>

//       {/* Modal */}
//       {showModal && selectedEvent && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
//           <div className="bg-white rounded-xl p-6 max-w-2xl w-full relative">
//             <button
//               className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl"
//               onClick={closeModal}
//             >
//               &times;
//             </button>

//             {selectedEvent.poster && (
//               <img
//                 src={`http://localhost:5050${selectedEvent.poster}`}
//                 alt="Event Poster"
//                 className="w-full aspect-video object-cover rounded mb-4"
//               />
//             )}

//             <h2 className="text-2xl font-bold mb-2">{selectedEvent.name}</h2>
//             <p className="text-sm text-gray-500 mb-1">
//               {new Date(selectedEvent.date).toDateString()}
//             </p>
//             <p className="mb-3 text-gray-700">{selectedEvent.description}</p>
//             <a
//               href={selectedEvent.link}
//               target="_blank"
//               rel="noreferrer"
//               className="text-indigo-600 underline block mb-2"
//             >
//               Visit Event Page
//             </a>
//             <p className="text-gray-600 mb-4">📞 Contact: {selectedEvent.contact}</p>

//             <div className="text-right">
//               <button
//                 onClick={closeModal}
//                 className="mt-2 w-full px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded text-sm"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EventList;


import React, { useEffect, useState } from "react";
import axios from "axios";

const Events = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  const fetchEvents = async () => {
    const res = await axios.get("http://localhost:5050/api/app/events");
    const today = new Date();

    const upcoming = res.data.filter(
      (event) => new Date(event.date) >= today
    );
    const past = res.data.filter(
      (event) => new Date(event.date) < today
    );

    setUpcomingEvents(upcoming);
    setPastEvents(past);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const renderEventCard = (event) => (
    <div
      key={event._id}
      className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col justify-between transition hover:shadow-xl hover:scale-[1.02] duration-200"
    >
      {event.poster && (
        <img
          src={`http://localhost:5050${event.poster}`}
          alt="poster"
          className="w-full h-40 object-cover"
        />
      )}

      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-semibold text-lg text-gray-800 mb-1 truncate">{event.name}</h3>
          <p className="text-gray-600 text-sm mb-2 line-clamp-3">{event.description}</p>
        </div>

        <div className="mt-2 text-sm text-gray-500">
          <p><span className="font-semibold">Date:</span> {new Date(event.date).toLocaleDateString()}</p>
          {event.link && (
            <a
              href={event.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              View Link
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 min-h-screen bg-[#1d2531]">
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">🎉 Upcoming Events</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map(renderEventCard)
        ) : (
          <p className="text-center col-span-full text-gray-300">No upcoming events.</p>
        )}
      </div>

      <h2 className="text-3xl font-bold text-center text-gray-200 mb-6">📜 Past Events</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pastEvents.length > 0 ? (
          pastEvents.map(renderEventCard)
        ) : (
          <p className="text-center col-span-full text-gray-300">No past events.</p>
        )}
      </div>
    </div>
  );
};

export default Events;
