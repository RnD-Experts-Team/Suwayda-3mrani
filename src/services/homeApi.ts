import axios from 'axios';
import type { HomeData } from '@/types/home';

// API endpoint - replace with your actual API URL
const API_BASE_URL = 'https://admin.suwayda3mrani.com/api/home';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  },
  withCredentials: false,
});

export const homeApi = {
  getHomeData: async (): Promise<HomeData> => {
    try {
      const response = await api.get<HomeContentItem[]>('');
      // Transform the array response to match HomeData interface
      return { data: response.data };
    } catch (error) {
      console.error('Error fetching home data:', error);
      throw new Error('Failed to fetch home data');
    }
  },
};


export default homeApi;
