import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col p-4 shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Admin Panel</h2>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              to="/admin/dashboard/users"
              className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              📋 Users
            </Link>
          </li>
          <li>
            <Link
              to="/admin/dashboard/posts"
              className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              📝 Posts
            </Link>
          </li>
          <li>
            <Link
              to="/admin/dashboard/events"
              className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              📅 Events
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
