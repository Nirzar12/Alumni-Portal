import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAlumniByYear } from "../../api/alumniAPI";
import Loader from "../../components/Loader"; // ✅ Adjust the path as needed

const AlumniByYear = () => {
  const { year } = useParams();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        setLoading(true);
        const data = await getAlumniByYear(year);
        setStudents(data);
      } catch (err) {
        console.error("🔴 Error fetching alumni:", err);
        setError("Failed to load alumni. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchAlumni();
  }, [year]);

  if (loading) return <Loader />; // ✅ Your custom loader
  if (error)
    return <div className="text-center text-red-500 mt-6">{error}</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Alumni of {year}</h2>

      {students.length === 0 ? (
        <p className="text-center text-gray-500">
          No alumni found for this year.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <div
              key={student._id}
              className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-96"
            >
              <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
                {/* <img
                  className="w-full h-full object-cover"
                  src={student.profilePic || "https://docs.material-tailwind.com/img/team-3.jpg"}
                  alt={student.name}
                /> */}
                <img
                  className="w-full h-full object-cover"
                  src={
                    student.photo
                      ? `http://localhost:5000/uploads/${student.photo} `
                      : "https://docs.material-tailwind.com/img/team-3.jpg"
                  }
                  alt={student.name}
                />
              </div>

              <div className="p-6 text-center">
                <h4 className="mb-1 text-xl font-semibold text-slate-800">
                  {student.name}
                </h4>
                <p className="text-sm font-semibold text-slate-500 uppercase">
                  {student.stream} - {student.batch}
                </p>
                <p className="text-base text-slate-600 mt-4 font-light">
                  {student.email || "No email available."}
                </p>
              </div>

              <div className="flex justify-center p-6 pt-2 gap-7">
                <button
                  className="min-w-32 rounded-md bg-slate-800 py-2 px-4 text-sm text-white shadow-md hover:bg-slate-700"
                  onClick={() => setSelectedStudent(student)}
                >
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODAL */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedStudent(null)}
            >
              ✖
            </button>
            <div className="text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src={
                  selectedStudent.photo
                    ? `http://localhost:5000/uploads/${selectedStudent.photo}`
                    : "https://docs.material-tailwind.com/img/team-3.jpg"
                }
                alt={selectedStudent.name}
              />
              <h3 className="text-2xl font-semibold mt-4">
                {selectedStudent.name}
              </h3>
              <p className="text-gray-500">
                {selectedStudent.stream} - {selectedStudent.batch}
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Email:</strong> {selectedStudent.email}
              </p>
              <p className="text-gray-700">
                <strong>Enrollment:</strong> {selectedStudent.enrollment}
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> {selectedStudent.phone || "N/A"}
              </p>
              <p className="text-gray-600 mt-4">
                {selectedStudent.about || "No additional details available."}
              </p>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
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
