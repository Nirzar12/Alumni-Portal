// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import UsersList from "./UsersList";
// // import Posts from "./Posts";
// // import Events from "./Events";

// const Dashboard = () => {
//   return (
//     <div className="admin-dashboard">
//       <Sidebar />
//       <div className="admin-content">
//         <Routes>
//           <Route path="users" element={<UsersList />} />
//           {/* <Route path="posts" element={<Posts />} /> */}
//           {/* <Route path="events" element={<Events />} /> */}
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// src/pages/Admin/Dashboard.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import AdminEvents from "./AdminEvents";
import UsersList from "./UsersList";


const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="events" element={<AdminEvents />} />
          <Route path="users" element={<UsersList />} /> {/* ✅ */}
      
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;


