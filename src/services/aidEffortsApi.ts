import axios from 'axios';
import type { AidEffortsData } from '@/types/aidEfforts';

// API endpoint
const API_BASE_URL = 'https://admin.suwayda3mrani.com/api/aid-efforts';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  },
  withCredentials: false,
});

export const aidEffortsApi = {
  getAidEffortsData: async (): Promise<AidEffortsData> => {
    try {
      const response = await api.get<AidEffortsData>('');
      return response.data;
    } catch (error) {
      console.error('Error fetching aid efforts data:', error);
      throw new Error('Failed to fetch aid efforts data');
    }
  },
};

export default aidEffortsApi;
