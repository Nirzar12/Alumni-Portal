import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { FaUserGraduate, FaSignOutAlt, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/app" className="flex items-center space-x-2">
            <FaUserGraduate className="text-2xl" />
            <span className="text-xl font-bold hover:text-blue-200 transition">
              LDCE Alumni
            </span>
          </Link>

          {/* Main Nav Links */}
          <div className="hidden md:flex space-x-8">
            {user && (
              <>
                <NavLink to="/app/alumni" text="Alumni" />
                <NavLink to="/app/events" text="Events" />
              </>
            )}
            <NavLink to="/app/contact" text="Contact" />
            <NavLink to="/app/about" text="About" />
          </div>

          {/* Auth Buttons */}
          <div>
            {user ? (
              <div className="flex items-center space-x-6">
                <span className="hidden md:inline text-blue-100 text-sm">
                  {user?.email}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLogout}
                  className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm transition"
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </motion.button>
              </div>
            ) : (
              <div className="flex space-x-4">
                <NavAuthLink 
                  to="/login" 
                  text="Login" 
                  icon={<FaSignInAlt />} 
                  color="bg-blue-600 hover:bg-blue-700"
                />
                <NavAuthLink 
                  to="/register" 
                  text="Register" 
                  icon={<FaUserPlus />} 
                  color="bg-green-600 hover:bg-green-700"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, text }) => (
  <Link 
    to={to} 
    className="relative group text-blue-100 hover:text-white transition"
  >
    {text}
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
  </Link>
);

const NavAuthLink = ({ to, text, icon, color }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      to={to}
      className={`${color} flex items-center space-x-2 px-4 py-2 rounded-lg text-sm transition`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  </motion.div>
);

export default Navbar;