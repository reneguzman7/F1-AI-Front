import axios from 'axios';

const api = axios.create({
  baseURL: 'https://f1-ai-back.onrender.com', // Reemplaza con la URL de tu backend
});

// Nueva función para obtener el podio
export const getPodium = async () => {
  try {
    const response = await api.get('/getPodium');
    return response.data;
  } catch (error) {
    console.error('Error fetching podium:', error);
    throw error;
  }
};