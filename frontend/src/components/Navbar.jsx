import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if a token exists in localStorage
    const token = localStorage.getItem("token");
    
    if (token) {
      // Decode the token to get user details (if needed)
      // For now, we'll assume a logged-in user
      setUser({ email: "user@example.com" }); // Replace with actual user data if available
    } else {
      setUser(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token on logout
    localStorage.removeItem("adminToken"); // Remove token on logout
    setUser(null);
    window.location.reload(); // Refresh the page to apply changes
  };

  return (
    <nav className="bg-gray-100 shadow-md py-3 px-6 flex justify-between items-center">
      {/* Left: Site Name */}
      <Link to="/" className="text-xl font-semibold text-blue-600">
        Alumni-Portal
      </Link>

      {/* Center: Navigation Links */}
      <div className="space-x-6">
        <Link to="/about" className="text-gray-700 hover:text-blue-600">
          About
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600">
          Contact
        </Link>
      </div>

      {/* Right: Auth Buttons */}
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
