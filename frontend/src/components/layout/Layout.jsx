// import { Outlet } from "react-router-dom";
// import Navbar from "../Navbar"; // ✅ Corrected path
// import Footer from "../Footer";

// const Layout = () => {
//   return (
//     <div className="flex flex-col min-h-screen bg-slate-800  ">
//       <Navbar />
//       <main className="flex-grow min-h-screen">
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Layout;

// Layout.js
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = () => {
  const location = useLocation();

  // Pages where Navbar/Footer should NOT be shown
  const hideLayoutPaths = ["/", "/login", "/register"];

  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-slate-800">
      {!shouldHideLayout && <Navbar />}
      <main className="flex-grow min-h-screen">
        <Outlet />
      </main>
      {!shouldHideLayout && <Footer />}
    </div>
  );
};

export default Layout;

