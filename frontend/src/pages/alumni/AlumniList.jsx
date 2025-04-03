import { useEffect, useState } from "react";
import { getAllAlumni, getAlumniById, createAlumni, updateAlumni, deleteAlumni } from "../../api/alumniAPI";  // ✅ Correct


const AlumniList = () => {
    const [alumni, setAlumni] = useState([]);

    useEffect(() => {
        API.get("/alumni")
            .then(res => setAlumni(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2 className="text-xl font-bold">Alumni List</h2>
            <ul>
                {alumni.map(alum => (
                    <li key={alum.id}>{alum.name} - {alum.batch}</li>
                ))}
            </ul>
        </div>
    );
};

export default AlumniList;
