import express from "express"
import {getStatsByYear,getAlumniByYear} from "../controllers/alumniController.js"

import { protect,adminOnly } from "../middlewares/authMiddleware.js"; 

const router = express.Router();

router.get("/stats-by-year",protect,getStatsByYear)

// Route: /api/alumni/by-year/:year
router.get('/by-year/:year', getAlumniByYear);



export default router;