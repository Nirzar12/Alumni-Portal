import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    enrollment: {
      type: String,
      required: true,
      unique: true,
    },
    batch: {
      type: Number,
      required: true,
    },
    stream: {
      type: String,
      enum: [
        "Applied Mechanics",
        "Artificial Intelligence and Machine Learning",
        "Automobile Engineering",
        "Biomedical Engineering",
        "Chemical Engineering",
        "Civil Engineering",
        "Computer Engineering",
        "Electrical Engineering",
        "Electronics and Communication Engineering",
        "Environmental Engineering",
        "Information Technology",
        "Instrumentation and Control Engineering",
        "Mechanical Engineering",
        "Plastic Technology",
        "Robotics and Automation",
        "Rubber Technology",
        "Textile Technology",
        "Science and Humanities"
      ],
      required: true
    }
    ,
    password: {
      type: String,
      required: true,
      minlength: 3,
    },
    photo: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isValidAlumni: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;
