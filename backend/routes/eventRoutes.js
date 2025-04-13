// import express from 'express';
// import { createEvent, getEvents, getEventsByTag } from '../controllers/eventController.js';
// import upload from '../middlewares/upload_event.js';
// import { protect,adminOnly } from '../middlewares/authMiddleware.js';

// const router = express.Router();

// router.post('/', protect,adminOnly, upload.single("poster"),createEvent);
// router.get('/',protect, getEvents);
// router.get('/tag/:tag', protect,getEventsByTag);

// export default router;


import express from 'express';
import upload from '../middlewares/upload_event.js'; 

import {
  createEvent,
  getEvents,
  getEventsByTag,
  updateEvent,
  deleteEvent
} from '../controllers/eventController.js'; // ✅ FIXED

const router = express.Router();

router.post("/", upload.single("poster"), createEvent);
router.get("/", getEvents);
router.get("/:tag", getEventsByTag);
router.put("/:id", upload.single("poster"), updateEvent);
router.delete("/:id", deleteEvent);

export default router;

