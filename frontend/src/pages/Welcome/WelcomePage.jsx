import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserFriends, FaCalendarAlt, FaGraduationCap } from "react-icons/fa";

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center justify-center px-4 py-12">
      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="h-12 w-12 bg-blue-900 rounded-full flex items-center justify-center">
            <FaGraduationCap className="text-2xl text-white" />
          </div>
          <h1 className="text-2xl font-bold text-blue-900">LD College of Engineering</h1>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Welcome to LDCE Alumni Network
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Join our thriving community of accomplished professionals and stay connected with your alma mater.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 px-4">
          <FeatureCard 
            icon={<FaUserFriends className="w-8 h-8" />} 
            title="Network & Connect" 
            desc="Reconnect with classmates and expand your professional network."
          />
          <FeatureCard 
            icon={<FaCalendarAlt className="w-8 h-8" />} 
            title="Events & Meetups" 
            desc="Participate in alumni events, workshops, and reunions."
          />
          <FeatureCard 
            icon={<FaGraduationCap className="w-8 h-8" />} 
            title="Career Growth" 
            desc="Access exclusive job opportunities and mentorship programs."
          />
        </div>

        {/* Action Buttons */}
        <motion.div 
          className="flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/login"
            className="px-8 py-4 bg-blue-900 text-white rounded-lg text-lg font-medium hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="px-8 py-4 bg-white text-blue-900 rounded-lg text-lg font-medium border-2 border-blue-900 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Register Now
          </Link>
        </motion.div>
      </div>

      {/* Footer Note */}
      <p className="mt-12 text-slate-500 text-center text-sm max-w-2xl px-4">
        LD College of Engineering Alumni Network - Fostering lifelong connections since 1948. 
        Proudly serving 50,000+ alumni worldwide.
      </p>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <motion.div
    className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-100"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="text-blue-900 mb-4">{icon}</div>
    <h3 className="text-2xl font-semibold text-slate-800 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </motion.div>
);

export default WelcomePage;