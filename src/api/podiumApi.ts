// src/api/podiumApi.ts
import axios from 'axios';
import { fetchPodiumData, PilotData } from '../api/podiumApi';
export const API_BASE_URL = 'https://f1-ai-back.onrender.com'; // Reemplaza con la URL real de tu backend

export interface PilotData {
  Piloto: string;
  shieldImage: string;
  pilotImage: string;
  carImage: string;
}

export const fetchPodiumData = async (): Promise<PilotData[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/fill-Podium`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los datos del podio:', error);
    throw error;
  }
};