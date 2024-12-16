import axios from 'axios';

const API_BASE_URL = 'https://f1-ai-back.onrender.com/'; // Puedes configurar la URL base de tu API aquí si es necesario

export const fetchPodiumData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/fill-Podium`);
    return response.data;
  } catch (error) {
    console.error('Error fetching podium data:', error);
    throw error;
  }
};