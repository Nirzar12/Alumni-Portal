import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) return setUser(null);

      try {
        const decoded = jwtDecode(token);
        const userId = decoded.id;

        // Optionally: you can check if token is expired here using decoded.exp
        const res = await axios.get(`http://localhost:5000/api/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data); // Expected: { _id, name, email, batch, stream }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setUser(null);
        localStorage.removeItem("token"); // Remove bad token
      }
    };

    fetchUserProfile();
  }, []);
  const handleLogout = () => {
    // Clear all tokens and user info
    localStorage.removeItem("token");
    localStorage.removeItem("adminToken");
    localStorage.removeItem("user");

    // Reset user state
    setUser(null);

    // Navigate to homepage (or login page)
    navigate("/");

    // Optionally reload to reset state completely
    window.location.reload();
  };

  return (
    <nav className="bg-gray-100 shadow-md py-3 px-6 flex justify-between items-center">
      {/* Left: Site Name */}
      <Link to="/" className="text-xl font-semibold text-blue-600">
        Alumni-Portal
      </Link>

      {/* Center: Navigation Links */}
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
