import { useEffect, useState } from "react";
import API from "../../api/alumniAPI";

const ManageAlumni = () => {
    const [pendingAlumni, setPendingAlumni] = useState([]);

    useEffect(() => {
        API.get("/admin/pending-alumni")
            .then(res => setPendingAlumni(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>Pending Alumni Approvals</h2>
            <ul>
                {pendingAlumni.map(alum => (
                    <li key={alum.id}>
                        {alum.name} - {alum.batch} 
                        <button className="bg-green-500 p-1 ml-2">Approve</button>
                        <button className="bg-red-500 p-1 ml-2">Reject</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageAlumni;
