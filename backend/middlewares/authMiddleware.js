import jwt from "jsonwebtoken";
import User from "../models/user_model.js";
import asyncHandler from "express-async-handler";

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, invalid token");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

// Admin Middleware (Authorization)
const adminOnly = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.isAdmin) {
      next();
  } else {
      res.status(403);
      throw new Error("Access denied, admin only");
  }
});

export { protect,adminOnly };
