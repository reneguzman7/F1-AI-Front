import axios from 'axios';
import data from './data.json'; // Importa el archivo JSON

const api = axios.create({
  baseURL: 'http://localhost:8000', // Reemplaza con la URL de tu backend
});

export const predictPodium = async (inputData) => {
  try {
    const response = await api.post('/predict', inputData);
    return response.data;
  } catch (error) {
    console.error('Error predicting podium:', error);
    throw error;
  }
};

// Nueva función para enviar los datos del archivo JSON al backend
export const sendDataForPrediction = async () => {
  try {
    // Crear un Blob a partir del JSON importado
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    const formData = new FormData();
    formData.append('file', blob, 'data.json');

    const response = await api.get('/send-data', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error sending data for prediction:', error);
    throw error;
  }
};