// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import WelcomePage from "./pages/Welcome/WelcomePage";

// import { Toaster } from "react-hot-toast";
// import Layout from "./components/layout/Layout";
// import Home from "./pages/content/Home";
// import Login from "./pages/auth/Login";
// import AlumniList from "./pages/alumni/AlumniList";
// import Dashboard from "./pages/admin/Dashboard";
// import PrivateRoute from "./routes/PrivateRoute";
// import Register from "./pages/auth/Register";
// import About from "./pages/content/About";
// import Contact from "./pages/content/Contact";
// import AdminLogin from "./pages/admin/AdminLogin";
// import UsersList from "./pages/admin/UsersList";
// import AlumniByYear from "./pages/alumni/AlumniByYear";
// import Events from "./pages/content/Events";
// import AdminEvents from "./pages/admin/AdminEvents";
// import NotFound from "./pages/notfound/NotFound";




// function App() {
//   return (
//     <>
//       <Toaster />
//       <Router>
//         <Routes>
//           {/* WelcomePage */}
//         <Route path="/" element={<WelcomePage />} />

//             {/* changes this route */}
//           <Route path="/app" element={<Layout />}> 

//             <Route index element={<Home />} />
            
//             <Route path="login" element={<Login />} />
//             <Route path="register" element={<Register />} />
//             <Route path="about" element={<About />} />
//             <Route path="contact" element={<Contact />} />
//             <Route path="events" element={<Events />} />
//             <Route path="alumni" element={<AlumniList />} />
//             <Route path="/alumni/year/:year" element={<AlumniByYear />} />
//             <Route path="admin" element={<AdminLogin />} />
//             <Route path="/admin/dashboard" element={<PrivateRoute />}>
//               <Route index element={<Dashboard />} />
//               <Route path="users" element={<UsersList />} />
//               <Route path="events" element={<AdminEvents />} />
//               {/* <Route path="posts" element={<UsersList />} /> */}
              

//                  {/* 404 Fallback */}
//           <Route path="*" element={<NotFound />} />

//           </Route>
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Pages & Components
import WelcomePage from "./pages/Welcome/WelcomePage";
import Layout from "./components/layout/Layout";
import Home from "./pages/content/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import About from "./pages/content/About";
import Contact from "./pages/content/Contact";
import Events from "./pages/content/Events";
import AlumniList from "./pages/alumni/AlumniList";
import AlumniByYear from "./pages/alumni/AlumniByYear";
import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import UsersList from "./pages/admin/UsersList";
import AdminEvents from "./pages/admin/AdminEvents";
import PrivateRoute from "./routes/PrivateRoute";
import NotFound from "./pages/notfound/NotFound";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          {/* Welcome Page - no layout */}
          <Route path="/" element={<WelcomePage />} />

          {/* Login and Register - no layout */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Admin Login (no layout) */}
          <Route path="/admin" element={<AdminLogin />} />

          {/* Admin Protected Routes */}
          <Route path="/admin/dashboard" element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<UsersList />} />
            <Route path="events" element={<AdminEvents />} />
          </Route>

          {/* Routes with layout */}
          <Route path="/app" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="events" element={<Events />} />
            <Route path="alumni" element={<AlumniList />} />
            <Route path="alumni/year/:year" element={<AlumniByYear />} />
          </Route>

          {/* 404 fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
