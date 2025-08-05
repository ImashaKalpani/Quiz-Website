// src/services/api.ts
import axios from "axios";

const API_BASE_URL = "http://localhost:8081/api";

// create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Existing API calls
export const fetchModulesByYear = async (yearId: string) => {
  try {
    const response = await api.get(`/modules/year/${yearId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching modules:", error);
    return [];
  }
};

export const fetchAllModules = async () => {
  try {
    const response = await api.get(`/modules`);
    return response.data;
  } catch (error) {
    console.error("Error fetching modules:", error);
    return [];
  }
};

export const fetchModuleDescription = async (moduleId: string) => {
  try {
    const response = await api.get(`/descriptions/${moduleId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching description for module ${moduleId}:`, error);
    return null;
  }
};

// Contact form API call
export const sendContactForm = async (formData: any) => {
  try {
    const response = await api.post("/contact/save", formData);
    return response.data;
  } catch (error: any) {
    console.error("❌ Error submitting contact form:", error);
    throw error;
  }
};

export const registerUser = (name: string, email: string, password: string) =>
  api.post("auth/register", { name, email, password });

export const loginUser = (email: string, password: string) =>
  api.post("auth/login", { email, password });

export const fetchUserProfile = () => api.get("auth/profile");
