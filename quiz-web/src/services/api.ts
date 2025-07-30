// src/services/api.ts
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/api';

// Existing API calls
export const fetchModulesByYear = async (yearId: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/modules/year/${yearId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching modules:', error);
    return [];
  }
};

export const fetchAllModules = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/modules`);
    return response.data;
  } catch (error) {
    console.error('Error fetching modules:', error);
    return [];
  }
};

// ✅ New API call to get a single module description
export const fetchModuleDescription = async (moduleId: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/descriptions/${moduleId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching description for module ${moduleId}:`, error);
    return null;
  }
};
