// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getAlumniByYear } from "../../api/alumniAPI";
// import Loader from "../../components/Loader";

// const AlumniByYear = () => {
//   const { year } = useParams();
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedStudent, setSelectedStudent] = useState(null);

//   useEffect(() => {
//     const fetchAlumni = async () => {
//       try {
//         setLoading(true);
//         const data = await getAlumniByYear(year);
//         setStudents(data);
//       } catch (err) {
//         console.error("🔴 Error fetching alumni:", err);
//         setError("Failed to load alumni. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAlumni();
//   }, [year]);

//   if (loading) return <Loader />;
//   if (error)
//     return <div className="text-center text-red-500 mt-6">{error}</div>;

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4 text-center">Alumni of {year}</h2>

//       {students.length === 0 ? (
//         <p className="text-center text-gray-500">
//           No alumni found for this year.
//         </p>
//       ) : (
//         <div className="max-h-[80vh] overflow-y-auto px-2">
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
//             {students.map((student) => (
//               <div
//                 key={student._id}
//                 className="flex flex-col bg-white shadow-sm border border-gray-200 rounded-md w-64"
//               >
//                 <div className="m-2 overflow-hidden rounded h-36 flex justify-center items-center">
//                   <img
//                     className="w-full h-full object-cover"
//                     src={
//                       student.photo
//                         ? `http://localhost:5000/uploads/${student.photo}`
//                         : "https://docs.material-tailwind.com/img/team-3.jpg"
//                     }
//                     alt={student.name}
//                   />
//                 </div>

//                 <div className="px-3 pb-2 text-center">
//                   <h4 className="text-sm font-semibold text-slate-800">
//                     {student.name}
//                   </h4>
//                   <p className="text-xs text-slate-500 uppercase">
//                     {student.stream} - {student.batch}
//                   </p>
//                   <p className="text-xs text-slate-600 mt-1">
//                     {student.email || "No email"}
//                   </p>
//                 </div>

//                 <div className="flex justify-center pb-3">
//                   <button
//                     className="text-xs bg-slate-700 text-white py-1 px-3 rounded hover:bg-slate-600"
//                     onClick={() => setSelectedStudent(student)}
//                   >
//                     See More
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* MODAL */}
//       {selectedStudent && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-4 rounded shadow-lg w-80 relative">
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-sm"
//               onClick={() => setSelectedStudent(null)}
//             >
//               ✖
//             </button>
//             <div className="text-center">
//               <img
//                 className="w-24 h-24 rounded-full mx-auto object-cover"
//                 src={
//                   selectedStudent.photo
//                     ? `http://localhost:5000/uploads/${selectedStudent.photo}`
//                     : "https://docs.material-tailwind.com/img/team-3.jpg"
//                 }
//                 alt={selectedStudent.name}
//               />
//               <h3 className="text-lg font-medium mt-2">
//                 {selectedStudent.name}
//               </h3>
//               <p className="text-xs text-gray-500">
//                 {selectedStudent.stream} - {selectedStudent.batch}
//               </p>
//               <p className="text-sm mt-1">
//                 <strong>Email:</strong> {selectedStudent.email}
//               </p>
//               <p className="text-sm">
//                 <strong>Enrollment:</strong> {selectedStudent.enrollment}
//               </p>
//               <p className="text-sm">
//                 <strong>Phone:</strong> {selectedStudent.phone || "N/A"}
//               </p>
//               <p className="text-xs text-gray-600 mt-2">
//                 {selectedStudent.about || "No additional details available."}
//               </p>
//             </div>
//             <div className="mt-3 flex justify-center">
//               <button
//                 className="bg-red-500 text-white text-xs px-3 py-1 rounded hover:bg-red-600"
//                 onClick={() => setSelectedStudent(null)}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AlumniByYear;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAlumniByYear } from "../../api/alumniAPI";
import Loader from "../../components/Loader";

const AlumniByYear = () => {
  const { year } = useParams();
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState(["All"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
        console.error("🔴 Error fetching alumni:", err);
        setError("Failed to load alumni. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchAlumni();
  }, [year]);

  const handleDepartmentChange = (dept) => {
    let updatedSelection = [];

    if (dept === "All") {
      updatedSelection = ["All"];
    } else {
      updatedSelection = [...selectedDepartments];

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
      const filtered = students.filter((s) =>
        updatedSelection.includes(s.stream)
      );
      setFilteredStudents(filtered);
    }
  };

  if (loading) return <Loader />;
  if (error) return <div className="text-center text-red-500 mt-6">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Alumni of {year}</h2>

      {/* Department Filter with Checkmarks */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <button
          onClick={() => handleDepartmentChange("All")}
          className={`px-3 py-1 rounded-full text-sm border flex items-center gap-1 ${
            selectedDepartments.includes("All")
              ? "bg-slate-800 text-white"
              : "bg-white text-slate-800"
          }`}
        >
          {selectedDepartments.includes("All") && <span>✔</span>} All
        </button>
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => handleDepartmentChange(dept)}
            className={`px-3 py-1 rounded-full text-sm border flex items-center gap-1 ${
              selectedDepartments.includes(dept)
                ? "bg-slate-800 text-white"
                : "bg-white text-slate-800"
            }`}
          >
            {selectedDepartments.includes(dept) && <span>✔</span>} {dept}
          </button>
        ))}
      </div>

      {/* Alumni Grid */}
      {filteredStudents.length === 0 ? (
        <p className="text-center text-gray-500">No alumni found.</p>
      ) : (
        <div className="max-h-[80vh] overflow-y-auto px-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
            {filteredStudents.map((student) => (
              <div
                key={student._id}
                className="flex flex-col bg-white shadow-sm border border-gray-200 rounded-md w-64"
              >
                <div className="m-2 overflow-hidden rounded h-36 flex justify-center items-center">
                  <img
                    className="w-full h-full object-cover"
                    src={
                      student.photo
                        ? `http://localhost:5000/uploads/${student.photo}`
                        : "https://docs.material-tailwind.com/img/team-3.jpg"
                    }
                    alt={student.name}
                  />
                </div>
                <div className="px-3 pb-2 text-center">
                  <h4 className="text-sm font-semibold text-slate-800">
                    {student.name}
                  </h4>
                  <p className="text-xs text-slate-500 uppercase">
                    {student.stream} - {student.batch}
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    {student.email || "No email"}
                  </p>
                </div>
                <div className="flex justify-center pb-3">
                  <button
                    className="text-xs bg-slate-700 text-white py-1 px-3 rounded hover:bg-slate-600"
                    onClick={() => setSelectedStudent(student)}
                  >
                    See More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MODAL */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded shadow-lg w-80 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-sm"
              onClick={() => setSelectedStudent(null)}
            >
              ✖
            </button>
            <div className="text-center">
              <img
                className="w-24 h-24 rounded-full mx-auto object-cover"
                src={
                  selectedStudent.photo
                    ? `http://localhost:5000/uploads/${selectedStudent.photo}`
                    : "https://docs.material-tailwind.com/img/team-3.jpg"
                }
                alt={selectedStudent.name}
              />
              <h3 className="text-lg font-medium mt-2">
                {selectedStudent.name}
              </h3>
              <p className="text-xs text-gray-500">
                {selectedStudent.stream} - {selectedStudent.batch}
              </p>
              <p className="text-sm mt-1">
                <strong>Email:</strong> {selectedStudent.email}
              </p>
              <p className="text-sm">
                <strong>Enrollment:</strong> {selectedStudent.enrollment}
              </p>
              <p className="text-sm">
                <strong>Phone:</strong> {selectedStudent.phone || "N/A"}
              </p>
              <p className="text-xs text-gray-600 mt-2">
                {selectedStudent.about || "No additional details available."}
              </p>
            </div>
            <div className="mt-3 flex justify-center">
              <button
                className="bg-red-500 text-white text-xs px-3 py-1 rounded hover:bg-red-600"
                onClick={() => setSelectedStudent(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlumniByYear;


