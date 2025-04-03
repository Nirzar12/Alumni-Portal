import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api/authAPI";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post("/login", { email, password });
            console.log("Login successful:", res.data);
            alert("Login successful!");
        } catch (err) {
            console.error("Login failed:", err.response?.data || err.message);
            alert("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
                    Login to Your Account
                </h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium">Email</label>
                        <input type="email" name="email" placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                            value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 font-medium">Password</label>
                        <input type="password" name="password" placeholder="Enter your password"
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                            value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>

                    {/* Login Button */}
                    <button type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                        Login
                    </button>
                </form>

                {/* Register Link */}
                <p className="text-gray-600 text-center mt-4">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-500 hover:underline">Register here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
