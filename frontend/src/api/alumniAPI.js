import API from "./authAPI"; // Import the API instance from authAPI.js

// Fetch all alumni
export const getAllAlumni = async () => {
    try {
        const response = await API.get("/alumni");
        return response.data;
    } catch (error) {
        console.error("Error fetching alumni:", error);
        throw error;
    }
};

// Fetch a single alumni by ID
export const getAlumniById = async (id) => {
    try {
        const response = await API.get(`/alumni/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching alumni by ID:", error);
        throw error;
    }
};

// Create a new alumni record
export const createAlumni = async (alumniData) => {
    try {
        const response = await API.post("/alumni", alumniData);
        return response.data;
    } catch (error) {
        console.error("Error creating alumni:", error);
        throw error;
    }
};

// Update an existing alumni record
export const updateAlumni = async (id, updatedData) => {
    try {
        const response = await API.put(`/alumni/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error("Error updating alumni:", error);
        throw error;
    }
};

// Delete an alumni record
export const deleteAlumni = async (id) => {
    try {
        const response = await API.delete(`/alumni/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting alumni:", error);
        throw error;
    }
};
