import express from "express";
import upload from "../middlewares/uploadMiddleware.js";
import { 
    registerUser, 
    loginUser, 
    loginAdmin, 
    getUserProfile, 
    approveAlumni, 
    makeAdmin, 
    getAllUsers,
    getAllAlumni, 
    deleteUser, 
    logoutUser 
  } from "../controllers/userController.js";
import { protect,adminOnly } from "../middlewares/authMiddleware.js"; 

const router = express.Router();

router.post("/register",upload.single("photo"), registerUser);
router.post("/login", loginUser);
router.post("/admin/login", loginAdmin);

router.post("/logout", logoutUser);
router.get("/profile", protect, getUserProfile);  // Protected Route
router.put("/approve/:id", protect, adminOnly, approveAlumni);
router.put("/make-admin/:id", protect, adminOnly, makeAdmin);
router.get("/getallusers", protect, adminOnly, getAllUsers);
router.delete("/delete/:id", protect, adminOnly, deleteUser); 
router.get("/app/alumni", protect, getAllAlumni); 


export default router;
