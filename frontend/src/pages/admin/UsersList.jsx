const handleAccept = async (userId) => {
  try {
    const token = localStorage.getItem("token");

    await axios.put(
      `http://localhost:5000/api/users/approve/${userId}`,  // Corrected route
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
import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("adminToken"); // Get token from localStorage

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
      `http://localhost:5000/api/users/approve/${userId}`,  // Corrected route
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
  
      setUsers(users.filter(user => user._id !== userId)); // Update UI
    } catch (error) {
      console.error("Error rejecting user:", error.response?.data || error.message);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Users List</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 shadow-md">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Email</th>
                <th className="border border-gray-300 px-4 py-2 text-center text-gray-700">Status</th>
                <th className="border border-gray-300 px-4 py-2 text-center text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50 transition">
                  <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium 
                      ${user.isValidAlumni ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"}`}>
                      {user.isValidAlumni ? "Accepted" : "Pending"}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {!user.isValidAlumni && (
                      <div className="flex justify-center space-x-2">
                        <button 
                          onClick={() => handleAccept(user._id)}
                          className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                          Accept
                        </button>
                        <button 
                          onClick={() => handleReject(user._id)}
                          className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
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
      </div>
    </div>
  );
};

export default UsersList;
