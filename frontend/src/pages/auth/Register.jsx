
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const navigate = useNavigate();
//   const [photo, setPhoto] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     enrollment: "",
//     batch: "",
//     stream: "",
//     password: "",
//   });

//   // Dropdown options
//   // const streams = ["IT", "Computer", "Mechanical", "Electronics", "Civil"];
//   const streams = [
//     "Applied Mechanics",
//     "Artificial Intelligence and Machine Learning",
//     "Automobile Engineering",
//     "Biomedical Engineering",
//     "Chemical Engineering",
//     "Civil Engineering",
//     "Computer Engineering",
//     "Electrical Engineering",
//     "Electronics and Communication Engineering",
//     "Environmental Engineering",
//     "Information Technology",
//     "Instrumentation and Control Engineering",
//     "Mechanical Engineering",
//     "Plastic Technology",
//     "Robotics and Automation",
//     "Rubber Technology",
//     "Textile Technology",
//     "Science and Humanities"
//   ];

//   const batchYears = Array.from({ length: 16 }, (_, i) => 2015 + i); // Years from 2015 to 2030

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("email", formData.email);
//     data.append("enrollment", formData.enrollment);
//     data.append("batch", formData.batch);
//     data.append("stream", formData.stream);
//     data.append("password", formData.password);
//     data.append("photo", photo); // 📸 Photo added

//     try {
//       // const response = await axios.post("http://localhost:5000/api/users/register", formData);
//       const response = await axios.post(
//         "http://localhost:5000/api/users/register",
//         data,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log("Registration successful:", response.data);
//       alert("Registration successful!");
//       navigate("/login");
//     } catch (error) {
//       console.error(
//         "Registration failed:",
//         error.response?.data || error.message
//       );
//       alert("Error: Registration failed.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
//           Create Your Account
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name */}
//           <div>
//             <label className="block text-gray-700 font-medium">Full Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your full name"
//               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-gray-700 font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Enrollment Number */}
//           <div>
//             <label className="block text-gray-700 font-medium">
//               Enrollment Number
//             </label>
//             <input
//               type="text"
//               name="enrollment"
//               placeholder="Enter your enrollment number"
//               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
//               value={formData.enrollment}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Batch - Dropdown */}
//           <div>
//             <label className="block text-gray-700 font-medium">Batch</label>
//             <select
//               name="batch"
//               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
//               value={formData.batch}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select Batch</option>
//               {batchYears.map((year) => (
//                 <option key={year} value={year}>
//                   {year}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Stream - Dropdown */}
//           <div>
//             <label className="block text-gray-700 font-medium">Stream</label>
//             <select
//               name="stream"
//               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
//               value={formData.stream}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select Stream</option>
//               {streams.map((stream) => (
//                 <option key={stream} value={stream}>
//                   {stream}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-gray-700 font-medium">Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter a strong password"
//               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           {/* Photo Upload  */}
//           <div>
//             <label className="block text-gray-700 font-medium">
//               Upload Your Photo
//             </label>
//             <input
//               type="file"
//               name="photo"
//               accept="image/*"
//               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
//               onChange={(e) => setPhoto(e.target.files[0])}
//               required
//             />
//           </div>

//           {/* Register Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             Register
//           </button>
//         </form>

//         {/* Login Link */}
//         <p className="text-gray-600 text-center mt-4">
//           Already registered?{" "}
//           <Link to="/login" className="text-blue-500 hover:underline">
//             Go to Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enrollment: "",
    batch: "",
    stream: "",
    password: "",
  });

  const streams = [
    "Applied Mechanics",
    "Artificial Intelligence and Machine Learning",
    "Automobile Engineering",
    "Biomedical Engineering",
    "Chemical Engineering",
    "Civil Engineering",
    "Computer Engineering",
    "Electrical Engineering",
    "Electronics and Communication Engineering",
    "Environmental Engineering",
    "Information Technology",
    "Instrumentation and Control Engineering",
    "Mechanical Engineering",
    "Plastic Technology",
    "Robotics and Automation",
    "Rubber Technology",
    "Textile Technology",
    "Science and Humanities"
  ];

  const batchYears = Array.from({ length: 16 }, (_, i) => 2015 + i);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Extra check for exactly 12 digits in enrollment
    if (!/^\d{12}$/.test(formData.enrollment)) {
      alert("Enrollment number must be exactly 12 digits.");
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("enrollment", formData.enrollment);
    data.append("batch", formData.batch);
    data.append("stream", formData.stream);
    data.append("password", formData.password);
    data.append("photo", photo);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Registration successful:", response.data);
      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
      alert("Error: Registration failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Enrollment Number */}
          <div>
            <label className="block text-gray-700 font-medium">
              Enrollment Number
            </label>
            <input
              type="text"
              name="enrollment"
              placeholder="Enter your enrollment number"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
              value={formData.enrollment}
              onChange={handleChange}
              pattern="\d{12}"
              maxLength={12}
              title="Enrollment number must be exactly 12 digits"
              required
            />
          </div>

          {/* Batch Dropdown */}
          <div>
            <label className="block text-gray-700 font-medium">Batch</label>
            <select
              name="batch"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
              value={formData.batch}
              onChange={handleChange}
              required
            >
              <option value="">Select Batch</option>
              {batchYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Stream Dropdown */}
          <div>
            <label className="block text-gray-700 font-medium">Stream</label>
            <select
              name="stream"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
              value={formData.stream}
              onChange={handleChange}
              required
            >
              <option value="">Select Stream</option>
              {streams.map((stream) => (
                <option key={stream} value={stream}>
                  {stream}
                </option>
              ))}
            </select>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter a strong password"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-gray-700 font-medium">
              Upload Your Photo
            </label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
              onChange={(e) => setPhoto(e.target.files[0])}
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-gray-600 text-center mt-4">
          Already registered?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Go to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

