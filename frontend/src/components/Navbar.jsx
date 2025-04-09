import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // this sets user to null, clears localStorage
    navigate("/");
  };

  return (
    <nav className="bg-gray-100 shadow-md py-3 px-6 flex justify-between items-center">
      <Link to="/" className="text-xl font-semibold text-blue-600">
        Alumni-Portal
      </Link>

      <div className="space-x-6">
        {user && (
          <>
            <Link to="/alumni" className="text-gray-700 hover:text-blue-600">
              Alumni
            </Link>
            <Link to="/events" className="text-gray-700 hover:text-blue-600">
              Events
            </Link>
          </>
        )}

        <Link to="/contact" className="text-gray-700 hover:text-blue-600">
          Contact
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600">
          About Us
        </Link>
      </div>

      <div>
        {user ? (
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">{user.email}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="space-x-4">
            <Link
              to="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;