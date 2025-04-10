import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAlumniStatsByYear } from "../../api/alumniAPI";
import Loader from "../../components/Loader";

const AlumniList = () => {
  const [yearStats, setYearStats] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 Loading state
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const stats = await getAlumniStatsByYear();
        const sortedStats = stats.sort((a, b) => b._id - a._id); // Descending order by year
        setYearStats(sortedStats);
      } catch (err) {
        console.error("Failed to fetch alumni stats:", err);
        setError("Failed to load alumni stats.");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  // 🔁 Loader or error message
  if (loading) return <Loader />
  if (error) return <div className="text-center text-red-500 mt-6">{error}</div>;

  return (
    <div className="p-4">
      {/* <h2 className="text-4xl text-center text-blue-600 font-bold mb-4">Alumni by Year</h2> */}
      <h2 className="text-4xl font-bold text-center mx-4 mb-10 text-white tracking-wide border-b-4 border-blue-500 inline-block pb-2">
      Alumni by Year
</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {yearStats.map((group) => (
          <div
            key={group._id}
            onClick={() => navigate(`/alumni/year/${group._id}`)}
            className="cursor-pointer bg-blue-100 text-center p-6 rounded-xl shadow hover:bg-blue-200 transition"
          >
            <h3 className="text-lg font-semibold">{group._id}</h3>
            <p>{group.count} alumni</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniList;
