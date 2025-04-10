import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-gray-600 text-white shadow-md px-6 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400">
          Alumni-Portal
        </Link>

        {/* Links */}
        <div className="space-x-6 text-sm md:text-base">
          {user && (
            <>
              <Link to="/alumni" className="hover:text-blue-400">
                Alumni
              </Link>
              <Link to="/events" className="hover:text-blue-400">
                Events
              </Link>
            </>
          )}
          <Link to="/contact" className="hover:text-blue-400">
            Contact
          </Link>
          <Link to="/about" className="hover:text-blue-400">
            About Us
          </Link>
        </div>

        {/* Auth Section */}
        <div>
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm hidden sm:inline">{user.email}</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-x-3">
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;