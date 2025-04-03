import User from "../models/user_model.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, enrollment, batch, stream, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    enrollment,
    batch,
    stream,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Login User
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
  
    // Check if the user exists
    if (!user) {
      res.status(401);
      throw new Error("Invalid email or password");
    }
  
    // Check if the password is correct
    const isPasswordValid = await user.matchPassword(password);
    if (!isPasswordValid) {
      res.status(401);
      throw new Error("Invalid email or password");
    }
  
    // Check if the user is approved as an alumni
    if (!user.isValidAlumni) {
      return res.status(403).json({
        message: "Your request is pending approval. Please wait for admin approval.",
      });
    }
  
    // If all checks pass, allow login
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isValidAlumni:user.isValidAlumni,
      token: generateToken(user._id),
    });
  });
  

// @desc    Login Admin
// @route   POST /api/admin/login
// @access  Public
const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && user.isAdmin && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid admin credentials");
  }
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      batch: user.batch,
      stream: user.stream,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Approve an alumni (Admin Only)
// @route   PUT /api/users/approve/:id
// @access  Private (Admin Only)
const approveAlumni = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.isValidAlumni = true;
    await user.save();
    res.json({ message: "Alumni approved successfully!" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Make a user an Admin (Admin Only)
// @route   PUT /api/users/make-admin/:id
// @access  Private (Admin Only)
const makeAdmin = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.isAdmin = true;
    await user.save();
    res.json({ message: "User promoted to admin successfully!" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Get all users sorted by creation time (Admin Only)
// @route   GET /api/users
// @access  Private (Admin Only)
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().sort({ createdAt: -1 }); // Sort by creation time (latest first)

  if (users.length > 0) {
    res.json(users);
  } else {
    res.status(404);
    throw new Error("No users found");
  }
});

// @desc    Delete User (Admin Only)
// @route   DELETE /api/users/:id
// @access  Private (Admin Only)
const deleteUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.deleteOne(); // Delete the user
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// @desc    Logout user
// @route   POST /api/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
  res.json({ message: "Logged out successfully" });
});

export { 
  registerUser, 
  loginUser, 
  loginAdmin, 
  getUserProfile, 
  approveAlumni, 
  makeAdmin, 
  getAllUsers, 
  deleteUser, 
  logoutUser 
};
