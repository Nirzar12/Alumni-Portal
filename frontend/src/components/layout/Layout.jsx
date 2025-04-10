import { Outlet } from "react-router-dom";
import Navbar from "../Navbar"; // ✅ Corrected path
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-800  ">
      <Navbar />
      <main className="flex-grow min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
