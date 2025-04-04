import API from "./authAPI"; // Axios instance with baseURL and auth

// ✅ Get all alumni with token
export const getAllAlumni = async () => {
    try {
        const token = localStorage.getItem("token"); // or "adminToken" based on your logic

        const { data } = await API.get("http://localhost:5000/api/users/alumni", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return data;
    } catch (error) {
        console.error("🔴 Failed to fetch all alumni:", error.response?.data || error.message);
        throw error;
    }
};

// ✅ Get single alumni by ID
export const getAlumniById = async (id) => {
    try {
        const { data } = await API.get(`/alumni/${id}`);
        return data;
    } catch (error) {
        console.error(`🔴 Failed to fetch alumni with ID ${id}:`, error.response?.data || error.message);
        throw error;
    }
};

// ✅ Create new alumni
export const createAlumni = async (alumniData) => {
    try {
        const { data } = await API.post("/alumni", alumniData);
        return data;
    } catch (error) {
        console.error("🔴 Failed to create alumni:", error.response?.data || error.message);
        throw error;
    }
};

// ✅ Update alumni
export const updateAlumni = async (id, updatedData) => {
    try {
        const { data } = await API.put(`/alumni/${id}`, updatedData);
        return data;
    } catch (error) {
        console.error(`🔴 Failed to update alumni with ID ${id}:`, error.response?.data || error.message);
        throw error;
    }
};

// ✅ Delete alumni
export const deleteAlumni = async (id) => {
    try {
        const { data } = await API.delete(`/alumni/${id}`);
        return data;
    } catch (error) {
        console.error(`🔴 Failed to delete alumni with ID ${id}:`, error.response?.data || error.message);
        throw error;
    }
};
