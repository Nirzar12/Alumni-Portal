import User from "../models/user_model.js";
import asyncHandler from "express-async-handler";

// @desc    Get alumni stats grouped by batch year with total count
// @route   GET /api/alumni/stats-by-year
// @access  Public
const getStatsByYear = asyncHandler(async (req, res) => {
  const stats = await User.aggregate([
    {
      $match: { isValidAlumni: true } // Only valid alumni
    },
    {
      $group: {
        _id: '$batch',
        count: { $sum: 1 }
      }
    },
    { $sort: { _id: 1 } }
  ]);

  res.status(200).json(stats);
});

// @desc    Get all valid alumni by specific year (batch)
// @route   GET /api/alumni/by-year/:year
// @access  Public
const getAlumniByYear = asyncHandler(async (req, res) => {
  const year = parseInt(req.params.year);

  const students = await User.find({
    batch: year,
    isValidAlumni: true,
  }).sort({ name: 1 });

  res.status(200).json(students);
});

export { getStatsByYear, getAlumniByYear };
