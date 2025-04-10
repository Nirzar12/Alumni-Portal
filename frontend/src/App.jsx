import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./components/layout/Layout";
import Home from "./pages/content/Home";
import Login from "./pages/auth/Login";
import AlumniList from "./pages/alumni/AlumniList";
import Dashboard from "./pages/admin/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import Register from "./pages/auth/Register";
import About from "./pages/content/About";
import Contact from "./pages/content/Contact";
import AdminLogin from "./pages/admin/AdminLogin";
import UsersList from "./pages/admin/UsersList";
import AlumniByYear from "./pages/alumni/AlumniByYear";
import Events from "./pages/content/Events";
import AdminEvents from "./pages/admin/AdminEvents";




function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="about" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="events" element={<Events />} />
            <Route path="alumni" element={<AlumniList />} />
            <Route path="/alumni/year/:year" element={<AlumniByYear />} />
            <Route path="admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<PrivateRoute />}>
              <Route index element={<Dashboard />} />
              <Route path="users" element={<UsersList />} />
              <Route path="events" element={<AdminEvents />} />
              {/* <Route path="posts" element={<UsersList />} /> */}
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
