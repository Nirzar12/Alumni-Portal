import express from 'express';
import { createEvent, getEvents, getEventsByTag } from '../controllers/eventController.js';
import upload from '../middlewares/upload_event.js';
import { protect,adminOnly } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', protect,adminOnly, upload.single("poster"),createEvent);
router.get('/',protect, getEvents);
router.get('/tag/:tag', protect,getEventsByTag);

export default router;
