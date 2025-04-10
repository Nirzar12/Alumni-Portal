import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    link: "",
    contact: "",
    date: "",
    poster: null,
  });

  const fetchEvents = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/events", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEvents(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "poster") {
      setFormData({ ...formData, poster: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    for (const key in formData) {
      payload.append(key, formData[key]);
    }

    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:5000/api/events", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setShowModal(false);
      fetchEvents();
    } catch (err) {
      console.error("Error creating event:", err);
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">📅 Admin Events</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg shadow"
        >
          + Add Event
        </button>
      </div>

      {/* Events List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {events.map((event) =>
          event && event.name ? (
            <div
              key={event._id}
              className="bg-white shadow-sm border rounded-lg p-3 hover:shadow-md transition-all text-sm flex flex-col"
            >
              <h3 className="text-base font-semibold text-gray-800 mb-1 line-clamp-1">
                {event.name}
              </h3>
              <p className="text-gray-600 mb-1 line-clamp-2 text-xs">
                {event.description}
              </p>
              <p className="text-gray-500 text-xs mb-1">
                <strong>Date:</strong>{" "}
                {new Date(event.date).toLocaleDateString()}
              </p>
              <p className="text-gray-500 text-xs mb-1">
                <strong>Contact:</strong> {event.contact}
              </p>
              <span
                className={`w-fit px-2 py-0.5 rounded text-white text-xs mb-2 ${
                  event.tag === "upcoming" ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {event.tag}
              </span>
              <a
                href={event.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline text-xs mb-2"
              >
                🔗 Visit Link
              </a>
              {event.poster ? (
                <img
                  src={`http://localhost:5000${event.poster}`}
                  alt="Poster"
                  className="mt-auto w-full aspect-[4/3] object-cover rounded-md border"
                />
              ) : (
                <div className="mt-auto w-full h-28 bg-gray-100 text-gray-400 text-center flex items-center justify-center rounded-md border">
                  No Poster
                </div>
              )}
            </div>
          ) : null
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-2xl shadow-xl relative">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Add New Event
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Event Name"
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-lg text-sm"
                />
                <input
                  type="text"
                  name="link"
                  placeholder="Event Link"
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-lg text-sm"
                />
                <input
                  type="text"
                  name="contact"
                  placeholder="Contact Info"
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-lg text-sm"
                />
                <input
                  type="date"
                  name="date"
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-lg text-sm"
                />
              </div>
              <textarea
                name="description"
                rows="3"
                placeholder="Event Description"
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-lg text-sm"
              />
              <input
                type="file"
                name="poster"
                accept="image/*"
                onChange={handleChange}
                className="w-full p-2 border rounded-lg text-sm"
              />

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className=" text-white bg-red-500 p-2 rounded-lg hover:bg-red-600 text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 text-sm"
                >
                  Create Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEvents;
