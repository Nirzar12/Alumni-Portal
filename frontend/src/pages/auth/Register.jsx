import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { FaUserGraduate, FaLock, FaUpload } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enrollment: "",
    batch: "",
    stream: "",
    password: "",
  });

  const streams = [
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
  ];

  const batchYears = Array.from({ length: 16 }, (_, i) => 2015 + i);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\d{12}$/.test(formData.enrollment)) {
      alert("Enrollment number must be exactly 12 digits.");
      return;
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    data.append("photo", photo);

    try {
      await axios.post("http://localhost:5000/api/users/register", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
      alert("Error: Registration failed.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-8"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="h-12 w-12 bg-blue-900 rounded-xl flex items-center justify-center">
            <FaUserGraduate className="text-2xl text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Alumni Registration</h1>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <InputField
              label="Full Name"
              name="name"
              Icon={FaUserGraduate}
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
            <InputField
              label="Email"
              type="email"
              name="email"
              Icon={FaUserGraduate}
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
            />
            <InputField
              label="Enrollment Number"
              name="enrollment"
              Icon={FaUserGraduate}
              value={formData.enrollment}
              onChange={handleChange}
              placeholder="12-digit number"
              pattern="\d{12}"
              maxLength={12}
            />
            <SelectField
              label="Batch"
              name="batch"
              options={batchYears}
              value={formData.batch}
              onChange={handleChange}
            />
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <SelectField
              label="Stream"
              name="stream"
              options={streams}
              value={formData.stream}
              onChange={handleChange}
            />
            <InputField
              label="Password"
              type="password"
              name="password"
              Icon={FaLock}
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
            />
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Profile Photo
              </label>
              <div className="flex items-center gap-4 p-3 border-2 border-dashed border-slate-200 rounded-lg hover:border-blue-900 transition">
                <FaUpload className="text-slate-500" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-900 hover:file:bg-blue-100"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition-all"
            >
              Create Account
            </motion.button>
            <p className="text-center mt-4 text-slate-600">
              Already registered?{" "}
              <Link to="/login" className="text-blue-900 font-medium hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

const InputField = ({ label, Icon, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-slate-700 mb-2">{label}</label>
    <div className="relative">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="text-slate-400" />
        </div>
      )}
      <input
        {...props}
        className={`w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900 ${
          props.className || ""
        }`}
      />
    </div>
  </div>
);

const SelectField = ({ label, options, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-slate-700 mb-2">{label}</label>
    <select
      {...props}
      className="w-full pl-3 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
    >
      <option value="">Select {label}</option>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

export default Register;