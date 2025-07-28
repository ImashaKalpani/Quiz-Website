// src/services/api.ts
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/api';

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




