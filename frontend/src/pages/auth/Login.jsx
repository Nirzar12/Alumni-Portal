// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";
// import {  toast } from "react-hot-toast";

// const Login = () => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         console.log(email)
//         console.log(password)

//         try {
//             const res = await axios.post("http://localhost:5000/api/users/login", { email, password });
//             const { token, isValidAlumni } = res.data;

//             if (!isValidAlumni) {
//                 alert("Your request is pending admin approval. Please wait.");
//                 return;
//             }

//             const decoded = jwtDecode(token);

//             const profileRes = await axios.get("http://localhost:5000/api/users/profile", {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             });

//             localStorage.setItem("token", token);
//             localStorage.setItem("user", JSON.stringify(profileRes.data));

//             navigate("/");

//             // ✅ Corrected toast placement
//             toast.success("Login was successfull!")

//         } catch (err) {
//             console.error("Login failed:", err.response?.data || err.message);
//             const status = err.response?.status;

//             if (status === 403) {
//                 toast.error("Your request is pending approval. Please wait for admin approval.");
//             } else {
//                 toast.error("Invalid credentials. Please try again.");
//             }
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//             <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//                 <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
//                     Login to Your Account
//                 </h2>

//                 <form onSubmit={handleLogin} className="space-y-4">
//                     <div>
//                         <label className="block text-gray-700 font-medium">Email</label>
//                         <input type="email" name="email" placeholder="Enter your email"
//                             className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
//                             value={email} onChange={(e) => setEmail(e.target.value)} required />
//                     </div>

//                     <div>
//                         <label className="block text-gray-700 font-medium">Password</label>
//                         <input type="password" name="password" placeholder="Enter your password"
//                             className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
//                             value={password} onChange={(e) => setPassword(e.target.value)} required />
//                     </div>

//                     <button type="submit"
//                         className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
//                         Login
//                     </button>
//                 </form>

//                 <p className="text-gray-600 text-center mt-4">
//                     Don't have an account?{" "}
//                     <Link to="/register" className="text-blue-500 hover:underline">Register here</Link>
//                 </p>
//             </div>

            
//         </div>
//     );
// };

// export default Login;
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-hot-toast";
import { useAuth } from "../../context/AuthContext"; // ✅ make sure this path is correct

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth(); // ✅ access the context login function

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5000/api/users/login", { email, password });
            const { token, isValidAlumni } = res.data;

            if (!isValidAlumni) {
                alert("Your request is pending admin approval. Please wait.");
                return;
            }

            const decoded = jwtDecode(token);

            const profileRes = await axios.get("http://localhost:5000/api/users/profile", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            // Store token and user in localStorage (optional for persistence)
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(profileRes.data));

            // ✅ Update AuthContext state
            login(profileRes.data); 

            toast.success("Login was successful!");
            navigate("/");

        } catch (err) {
            console.error("Login failed:", err.response?.data || err.message);
            const status = err.response?.status;

            if (status === 403) {
                toast.error("Your request is pending approval. Please wait for admin approval.");
            } else {
                toast.error("Invalid credentials. Please try again.");
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
                    Login to Your Account
                </h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-gray-600 text-center mt-4">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-500 hover:underline">Register here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;