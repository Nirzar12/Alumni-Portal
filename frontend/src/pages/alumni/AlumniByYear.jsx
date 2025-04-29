import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaEnvelope, FaPhone, FaIdCard, FaTimes } from "react-icons/fa";
import { getAlumniByYear } from "../../api/alumniAPI";
import Loader from "../../components/Loader";
import { toast } from "react-hot-toast";

const AlumniByYear = () => {
  const { year } = useParams();
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState(["All"]);
  const [loading, setLoading] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        setLoading(true);
        const data = await getAlumniByYear(year);
        setStudents(data);

        const uniqueDepts = [...new Set(data.map((student) => student.stream))];
        setDepartments(uniqueDepts);
        setFilteredStudents(data);
      } catch (err) {
        console.error("Error fetching alumni:", err);
        toast.error("Failed to load alumni data");
      } finally {
        setLoading(false);
      }
    };

    fetchAlumni();
  }, [year]);

  const handleDepartmentChange = (dept) => {
    let updatedSelection = [...selectedDepartments];

    if (dept === "All") {
      updatedSelection = ["All"];
    } else {
      if (updatedSelection.includes("All")) {
        updatedSelection = [];
      }

      if (updatedSelection.includes(dept)) {
        updatedSelection = updatedSelection.filter((d) => d !== dept);
      } else {
        updatedSelection.push(dept);
      }

      if (updatedSelection.length === 0) {
        updatedSelection = ["All"];
      }
    }

    setSelectedDepartments(updatedSelection);

    if (updatedSelection.includes("All")) {
      setFilteredStudents(students);
    } else {
      const filtered = students.filter((s) => updatedSelection.includes(s.stream));
      setFilteredStudents(filtered);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-bfrom-slate-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-2">
            Alumni of {year}
          </h1>
          <p className="text-blue-200">
            Connect with your batchmates from LD College of Engineering
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleDepartmentChange("All")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedDepartments.includes("All")
                ? "bg-white text-blue-900 shadow-md"
                : "bg-blue-700 text-white"
            }`}
          >
            All Departments
          </motion.button>
          
          {departments.map((dept) => (
            <motion.button
              key={dept}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleDepartmentChange(dept)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedDepartments.includes(dept)
                  ? "bg-white text-blue-900 shadow-md"
                  : "bg-blue-700 text-white"
              }`}
            >
              {dept}
            </motion.button>
          ))}
        </div>

        {filteredStudents.length === 0 ? (
          <div className="bg-white bg-opacity-10 rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold text-white mb-2">
              No Alumni Found
            </h3>
            <p className="text-blue-100">
              Try adjusting your department filters
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredStudents.map((student) => (
              <motion.div
                key={student._id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={
                      student.photo
                        ? `http://localhost:5000/uploads/${student.photo}`
                        : "/placeholder-profile.jpg"
                    }
                    alt={student.name}
                    onError={(e) => {
                      e.target.src = '/placeholder-profile.jpg';
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 text-center">
                    {student.name}
                  </h3>
                  <p className="text-sm text-blue-600 text-center uppercase">
                    {student.stream}
                  </p>
                  <div className="flex justify-center mt-4">
                    <button
                      onClick={() => setSelectedStudent(student)}
                      className="px-4 py-2 bg-blue-900 text-white rounded-lg text-sm hover:bg-blue-800 transition"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <AnimatePresence>
          {selectedStudent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white rounded-xl shadow-2xl max-w-md w-full relative"
              >
                <button
                  onClick={() => setSelectedStudent(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <FaTimes size={20} />
                </button>

                <div className="p-6">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100 mb-4">
                      <img
                        className="w-full h-full object-cover"
                        src={
                          selectedStudent.photo
                            ? `http://localhost:5000/uploads/${selectedStudent.photo}`
                            : "/placeholder-profile.jpg"
                        }
                        alt={selectedStudent.name}
                      />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      {selectedStudent.name}
                    </h2>
                    <p className="text-blue-600 font-medium">
                      {selectedStudent.stream} - Batch {selectedStudent.batch}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <FaGraduationCap className="text-blue-500 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Department</p>
                        <p className="font-medium">{selectedStudent.stream}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <FaIdCard className="text-blue-500 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Enrollment</p>
                        <p className="font-medium">{selectedStudent.enrollment}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <FaEnvelope className="text-blue-500 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">{selectedStudent.email || "Not available"}</p>
                      </div>
                    </div>

                    {selectedStudent.phone && (
                      <div className="flex items-center">
                        <FaPhone className="text-blue-500 mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <p className="font-medium">{selectedStudent.phone}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {selectedStudent.about && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">About</h4>
                      <p className="text-gray-700">{selectedStudent.about}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AlumniByYear;