const BASE_URL = "http://localhost:5000";

// ✅ Get all valid alumni
export const getAllAlumni = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/api/users/app/alumni`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("🔴 Failed to fetch all alumni:", error);
    throw error;
  }
};

// ✅ Get alumni stats by batch year
export const getAlumniStatsByYear = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/api/app/alumni/stats-by-year`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("🔴 Failed to fetch alumni stats by year:", error);
    throw error;
  }
};

// ✅ Get alumni by specific year
export const getAlumniByYear = async (year) => {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch(`${BASE_URL}/api/app/alumni/by-year/${year}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`🔴 Failed to fetch alumni for year ${year}:`, error);
    throw error;
  }
};

// ✅ Get alumni by ID
export const getAlumniById = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/api/app/alumni/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`🔴 Failed to fetch alumni with ID ${id}:`, error);
    throw error;
  }
};

// ✅ Create new alumni
export const createAlumni = async (alumniData) => {
  try {
    const res = await fetch(`${BASE_URL}/api/app/alumni`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(alumniData),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("🔴 Failed to create alumni:", error);
    throw error;
  }
};

// ✅ Update alumni
export const updateAlumni = async (id, updatedData) => {
  try {
    const res = await fetch(`${BASE_URL}/api/app/alumni/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`🔴 Failed to update alumni with ID ${id}:`, error);
    throw error;
  }
};

// ✅ Delete alumni
export const deleteAlumni = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/api/app/alumni/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`🔴 Failed to delete alumni with ID ${id}:`, error);
    throw error;
  }
};
