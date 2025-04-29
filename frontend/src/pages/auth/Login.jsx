import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import { motion } from "framer-motion";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });
      const { token, isValidAlumni } = res.data;
      
      if (!isValidAlumni) {
        toast.error("Approval pending from administration");
        return;
      }

      const profileRes = await axios.get("http://localhost:5000/api/users/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(profileRes.data));
      login(profileRes.data);
      
      toast.success("Welcome back!");
      navigate("/app");
    } catch (err) {
      const status = err.response?.status;
      if (status === 403) {
        toast.error("Account pending admin approval");
      } else {
        toast.error("Invalid login credentials");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="h-12 w-12 bg-blue-900 rounded-xl flex items-center justify-center">
            <FaUser className="text-2xl text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Alumni Login</h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <InputField
            label="Email"
            type="email"
            Icon={FaUser}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
          />
          <InputField
            label="Password"
            type="password"
            Icon={FaLock}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition-all"
          >
            Sign In
          </motion.button>

          <p className="text-center mt-6 text-slate-600">
            New member?{" "}
            <Link to="/register" className="text-blue-900 font-medium hover:underline">
              Create account
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

const InputField = ({ label, Icon, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-slate-700 mb-2">{label}</label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="text-slate-400" />
      </div>
      <input
        {...props}
        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
      />
    </div>
  </div>
);

export default Login;