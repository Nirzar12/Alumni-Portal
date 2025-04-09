import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        console.error("No token found. User might be unauthenticated.");
        return;
      }

      const res = await axios.get("http://localhost:5000/api/users/getallusers", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error.response?.data || error.message);
    }
  };

  const handleAccept = async (userId) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/api/users/approve/${userId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUsers(users.map(user =>
        user._id === userId ? { ...user, isValidAlumni: true } : user
      ));
    } catch (error) {
      console.error("Error approving user:", error.response?.data || error.message);
    }
  };

  const handleReject = async (userId) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(`http://localhost:5000/api/users/delete/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUsers(users.filter(user => user._id !== userId));
    } catch (error) {
      console.error("Error rejecting user:", error.response?.data || error.message);
    }
  };

  const filteredUsers = users.filter(user =>
    (user.name && user.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (user.enrollment && user.enrollment.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Users List ({filteredUsers.length} showing of {users.length} total)
        </h2>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name or enrollment number..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 shadow-md">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Sr. No</th>
                <th className="border border-gray-300 px-4 py-2">Enrollment</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={user._id} className="hover:bg-gray-50 transition">
                  <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                  <td
                    className="border border-gray-300 px-4 py-2 text-blue-600 hover:underline cursor-pointer"
                    onClick={() => setSelectedUser(user)}
                  >
                    {user.enrollment || "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        user.isValidAlumni
                          ? "bg-green-200 text-green-800"
                          : "bg-yellow-200 text-yellow-800"
                      }`}
                    >
                      {user.isValidAlumni ? "Accepted" : "Pending"}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {!user.isValidAlumni && (
                      <div className="flex justify-center space-x-2">
                        <button
                          onClick={() => handleAccept(user._id)}
                          className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleReject(user._id)}
                          className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MODAL */}
        {selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-96 relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-sm"
                onClick={() => setSelectedUser(null)}
              >
                ✖
              </button>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">{selectedUser.name}</h3>
                <p><strong>Enrollment:</strong> {selectedUser.enrollment}</p>
                <p><strong>Email:</strong> {selectedUser.email}</p>
                <p><strong>Phone:</strong> {selectedUser.phone || "N/A"}</p>
                <p><strong>Stream:</strong> {selectedUser.stream || "N/A"}</p>
                <p><strong>Batch:</strong> {selectedUser.batch || "N/A"}</p>
                <p><strong>About:</strong> {selectedUser.about || "No details available."}</p>
              </div>
              <div className="mt-4 text-center">
                <button
                  className="bg-slate-700 text-white px-4 py-1 rounded hover:bg-slate-600 text-sm"
                  onClick={() => setSelectedUser(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersList;
