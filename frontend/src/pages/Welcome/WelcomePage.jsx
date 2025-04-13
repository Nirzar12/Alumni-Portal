import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserFriends, FaCalendarAlt, FaGraduationCap } from "react-icons/fa";

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-green-100 flex flex-col items-center justify-center px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-blue-700 mb-4 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to LD College Alumni Portal
      </motion.h1>

      <p className="text-gray-700 text-lg md:text-xl text-center max-w-xl mb-10">
        Reconnect with old friends, explore alumni events, and celebrate the achievements of LDCE graduates.
      </p>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <FeatureCard icon={<FaUserFriends />} title="Connect" desc="Find and reconnect with batchmates." />
        <FeatureCard icon={<FaCalendarAlt />} title="Events" desc="Stay updated with alumni meetups." />
        <FeatureCard icon={<FaGraduationCap />} title="Achievements" desc="Celebrate LDCE success stories." />
      </div>

      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700 transition"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-6 py-3 bg-green-600 text-white rounded-md text-lg hover:bg-green-700 transition"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-md w-64 text-center border"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <div className="text-3xl text-blue-600 mb-3">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{desc}</p>
  </motion.div>
);

export default WelcomePage;
