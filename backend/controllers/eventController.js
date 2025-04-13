// import Event from '../models/event_model.js';

// // Create new event
// export const createEvent = async (req, res) => {
//     try {
//       const { name, description, link, contact, date } = req.body;
      
//       // Auto-tag event
//       const eventDate = new Date(date);
//       const tag = eventDate < new Date() ? "past" : "upcoming";
  
//       const newEvent = new Event({
//         name,
//         description,
//         link,
//         contact,
//         date: eventDate,
//         tag,
//         poster: req.file ? `/uploads/${req.file.filename}` : ""
//       });
  
//       await newEvent.save();
//       res.status(201).json(newEvent);
//     } catch (error) {
//       console.error("Error creating event:", error);
//       res.status(400).json({ error: error.message });
//     }
//   };

// // Get all events
// export const getEvents = async (req, res) => {
//     try {
//       const events = await Event.find().sort({ date: -1 });
  
//       const updatedEvents = events.map(event => {
//         const now = new Date();
//         const isPast = new Date(event.date) < now;
//         return { ...event._doc, tag: isPast ? 'past' : 'upcoming' };
//       });
  
//       res.json(updatedEvents);
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   };
  

// // Filter by tag
// export const getEventsByTag = async (req, res) => {
//   try {
//     const events = await Event.find({ tag: req.params.tag });
//     res.json(events);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

import Event from '../models/event_model.js';

// Create new event
export const createEvent = async (req, res) => {
  try {
    const { name, description, link, contact, date } = req.body;
    const eventDate = new Date(date);
    const tag = eventDate < new Date() ? "past" : "upcoming";

    const newEvent = new Event({
      name,
      description,
      link,
      contact,
      date: eventDate,
      tag,
      poster: req.file ? `/uploads/${req.file.filename}` : ""
    });

    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(400).json({ error: error.message });
  }
};

// Get all events
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 });
    const updatedEvents = events.map(event => {
      const isPast = new Date(event.date) < new Date();
      return { ...event._doc, tag: isPast ? 'past' : 'upcoming' };
    });
    res.json(updatedEvents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get events by tag
export const getEventsByTag = async (req, res) => {
  try {
    const events = await Event.find({ tag: req.params.tag });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update event
export const updateEvent = async (req, res) => {
  try {
    const { name, description, link, contact, date } = req.body;
    const eventDate = new Date(date);
    const tag = eventDate < new Date() ? "past" : "upcoming";

    const updateData = {
      name,
      description,
      link,
      contact,
      date: eventDate,
      tag,
    };

    if (req.file) {
      updateData.poster = `/uploads/${req.file.filename}`;
    }

    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(updatedEvent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete event
export const deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: "Event deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

