import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllAlumni, getAlumniById, createAlumni, updateAlumni, deleteAlumni } from "../../api/alumniAPI"; // ✅ Correct
 // This is your axios instance

const AlumniList = () => {
  const [yearGroups, setYearGroups] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const alumniData = await getAllAlumni();
        // console.log("📢 API Response:", alumniData); // Debugging line
  
        const grouped = {};
  
        alumniData.forEach(alum => {
          const year = alum.batch;
          if (year) {
            if (!grouped[year]) grouped[year] = [];
            grouped[year].push(alum);
          }
        });
  
        const sortedGroups = Object.keys(grouped)
          .map(year => ({
            year: parseInt(year),
            students: grouped[year],
          }))
          .sort((a, b) => b.year - a.year); // descending order
  
        setYearGroups(sortedGroups); // yearGroups: [{ year: 2025, students: [...] }, ...]
      } catch (err) {
        console.error("Failed to fetch alumni:", err);
      }
    };
  
    fetchAlumni();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-4xl text-center text-blue-600 font-bold mb-4">Alumni by Year</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {yearGroups.map(group => (
          <div
            key={group.year}
            onClick={() => navigate(`/alumni/year/${group.year}`)}
            className="cursor-pointer bg-blue-100 text-center p-6 rounded-xl shadow hover:bg-blue-200 transition"
          >
            <h3 className="text-lg font-semibold">{group.year}</h3>
            <p>{group.students.length} alumni</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniList;
