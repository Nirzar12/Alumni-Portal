import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import UsersList from "./UsersList";
// import Posts from "./Posts";
// import Events from "./Events";

const Dashboard = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-content">
        <Routes>
          <Route path="users" element={<UsersList />} />
          {/* <Route path="posts" element={<Posts />} /> */}
          {/* <Route path="events" element={<Events />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;

