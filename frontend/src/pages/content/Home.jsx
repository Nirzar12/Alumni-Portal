// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   const user = JSON.parse(localStorage.getItem("user")); // 👈 fetch from localStorage
//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center px-4 py-10 bg-gradient-to-br from-slate-100 to-slate-200">
//       <h1 className="text-4xl md:text-5xl font-bold text-blue-700 text-center mb-4">
//         Welcome to LD College Alumni Portal
//       </h1>
//       <p className="text-lg md:text-xl text-slate-700 text-center max-w-2xl mb-8">
//         A place to reconnect, network, and celebrate the achievements of LDCE graduates. Stay updated with alumni events, view batches, and connect with your old friends!
//       </p>

//       <div className="flex flex-wrap justify-center gap-6">
//         <Link
//           to="/app/alumni"
//           className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
//         >
//           View Alumni
//         </Link>
//         <Link
//           to="/app/events"
//           className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md transition"
//         >
//           Explore Events
//         </Link>
//         <Link
//           to="/app/about"
//           className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition"
//         >
//           About Us
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user")); // 👈 fetch from localStorage

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-10 bg-gradient-to-br from-slate-100 to-slate-200">
      {user && (
        <h2 className="text-2xl md:text-3xl font-semibold text-green-700 mb-2">
          Welcome back, {user.name}!
        </h2>
      )}
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 text-center mb-4">
        Welcome to LD College Alumni Portal
      </h1>
      <p className="text-lg md:text-xl text-slate-700 text-center max-w-2xl mb-8">
        A place to reconnect, network, and celebrate the achievements of LDCE graduates. Stay updated with alumni events, view batches, and connect with your old friends!
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <Link
          to="/app/alumni"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
        >
          View Alumni
        </Link>
        <Link
          to="/app/events"
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md transition"
        >
          Explore Events
        </Link>
        <Link
          to="/app/about"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition"
        >
          About Us
        </Link>
      </div>
    </div>
  );
};

export default Home;

