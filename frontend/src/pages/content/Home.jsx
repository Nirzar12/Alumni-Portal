import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUsers, FaCalendarAlt, FaInfoCircle, FaUniversity } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-hot-toast";

const Home = () => {
  const { user } = useAuth(); // Using context instead of localStorage directly

  // Show welcome toast if user exists
  React.useEffect(() => {
    if (user) {
      toast.success(`Welcome back, ${user.name}!`, {
        icon: '👋',
        style: {
          background: '#1e3a8a',
          color: '#fff',
        },
      });
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center justify-center px-4 py-12">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-12 w-12 bg-blue-900 rounded-xl flex items-center justify-center">
            <FaUniversity className="text-2xl text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
            LDCE Alumni Portal
          </h1>
        </div>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Reconnect with your alma mater. Network with fellow alumni, discover career opportunities, 
          and stay updated with campus happenings.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-12 w-full max-w-6xl px-4">
        <FeatureCard 
          icon={<FaUsers className="w-8 h-8" />}
          title="Alumni Network"
          description="Connect with graduates across batches and streams"
          link="/app/alumni"
          linkText="Browse Alumni"
          bgColor="bg-blue-100"
          textColor="text-blue-900"
        />
        <FeatureCard 
          icon={<FaCalendarAlt className="w-8 h-8" />}
          title="Events"
          description="Participate in reunions, workshops and seminars"
          link="/app/events"
          linkText="View Events"
          bgColor="bg-emerald-100"
          textColor="text-emerald-900"
        />
        <FeatureCard 
          icon={<FaInfoCircle className="w-8 h-8" />}
          title="About LDCE"
          description="Discover our rich history and achievements"
          link="/app/about"
          linkText="Learn More"
          bgColor="bg-amber-100"
          textColor="text-amber-900"
        />
      </div>

      {/* Additional CTA */}
      {user && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 rounded-xl shadow-md border border-slate-200 max-w-2xl w-full text-center"
        >
          <h3 className="text-xl font-semibold text-slate-800 mb-3">
            Complete your profile to get the most from our community
          </h3>
          <Link
            to="/app/profile"
            className="inline-block px-6 py-2 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800 transition"
          >
            Update Profile
          </Link>
        </motion.div>
      )}
    </div>
  );
};

const FeatureCard = ({ icon, title, description, link, linkText, bgColor, textColor }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`${bgColor} p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow`}
  >
    <div className={`${textColor} text-4xl mb-4`}>{icon}</div>
    <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-600 mb-4">{description}</p>
    <Link
      to={link}
      className={`inline-block px-4 py-2 ${textColor} bg-white rounded-lg font-medium hover:bg-opacity-80 transition`}
    >
      {linkText}
    </Link>
  </motion.div>
);

export default Home;