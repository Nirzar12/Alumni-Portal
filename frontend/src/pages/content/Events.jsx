import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaHistory, FaLink } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Events = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/app/events");
      const today = new Date();

      const upcoming = res.data.filter((event) => new Date(event.date) >= today);
      const past = res.data.filter((event) => new Date(event.date) < today);

      setUpcomingEvents(upcoming);
      setPastEvents(past);
      setLoading(false);
    } catch (error) {
      toast.error("Failed to load events");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const EventCard = ({ event, isPast }) => (
    <motion.div
      key={event._id}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
    >
      {event.poster && (
        <img
          src={`http://localhost:5000${event.poster}`}
          alt={event.name}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src = '/placeholder-event.jpg';
          }}
        />
      )}
      <div className="p-5">
        <div className="flex items-center mb-2">
          <FaCalendarAlt className="text-blue-600 mr-2" />
          <span className="text-sm text-slate-600">
            {new Date(event.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{event.name}</h3>
        <p className="text-slate-600 mb-4 line-clamp-3">{event.description}</p>
        {event.link && (
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <FaLink className="mr-1" /> Event Link
          </a>
        )}
        {isPast && (
          <div className="mt-3">
            <span className="inline-block bg-slate-100 text-slate-800 text-xs px-2 py-1 rounded">
              Past Event
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-2">Upcoming Events</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover exciting events and opportunities to connect with fellow alumni
          </p>
        </motion.div>

        {upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {upcomingEvents.map((event) => (
              <EventCard key={event._id} event={event} isPast={false} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-slate-200 mb-20">
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">No Upcoming Events</h3>
            <p className="text-slate-600">Check back later for new events</p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-2 flex items-center justify-center">
            <FaHistory className="mr-2" /> Past Events
          </h2>
          <p className="text-slate-600">Relive our previous gatherings and activities</p>
        </motion.div>

        {pastEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <EventCard key={event._id} event={event} isPast={true} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">No Past Events</h3>
            <p className="text-slate-600">Our event history will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
