// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const AdminLogin = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const handleAdminLogin = async (e) => {
//         e.preventDefault();
//         setError(""); // Clear previous errors

//         try {
//             const res = await axios.post("http://localhost:5050/api/users/admin/login", { email, password });

//             if (res.data.isAdmin) { 
//                 localStorage.setItem("adminToken", res.data.token); // Store admin token
//                 navigate("/admin/dashboard"); // Redirect to admin dashboard
//             } else {
//                 setError("You are not an admin!");
//             }

//         } catch (err) {
//             setError("Invalid admin credentials.");
//             console.error("Login failed:", err.response?.data || err.message);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="bg-white shadow-lg rounded-lg p-8 w-96">
//                 <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Admin Login</h2>

//                 {error && <p className="text-red-500 text-sm text-center">{error}</p>}

//                 <form onSubmit={handleAdminLogin} className="space-y-4">
//                     <input 
//                         type="email" 
//                         placeholder="Admin Email" 
//                         value={email} 
//                         onChange={(e) => setEmail(e.target.value)} 
//                         required 
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input 
//                         type="password" 
//                         placeholder="Password" 
//                         value={password} 
//                         onChange={(e) => setPassword(e.target.value)} 
//                         required 
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <button 
//                         type="submit" 
//                         className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
//                     >
//                         Login
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AdminLogin;


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("adminToken");
        if (token) {
            navigate("/admin");
        }
    }, []);

    const handleAdminLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await axios.post("http://localhost:5050/api/users/admin/login", {
                email,
                password,
            });

            if (res.data.isAdmin) {
                localStorage.setItem("adminToken", res.data.token);
                navigate("/admin/dashboard"); // redirect to dashboard
            } else {
                setError("You are not an admin!");
            }
        } catch (err) {
            setError("Invalid admin credentials.");
            console.error("Login failed:", err.response?.data || err.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-96">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Admin Login</h2>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <form onSubmit={handleAdminLogin} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Admin Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
