import axios from "axios";
import dotenv from "dotenv"


const API = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
});

export default API;

