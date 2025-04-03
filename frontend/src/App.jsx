import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/content/Home";
import Login from "./pages/auth/Login";
import AlumniList from "./pages/alumni/AlumniList";
import Dashboard from "./pages/admin/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import Register from "./pages/auth/Register";
import About from "./pages/content/About";
import Contact from "./pages/content/Contact";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="alumni" element={<AlumniList />} />
          <Route path="admin" element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
