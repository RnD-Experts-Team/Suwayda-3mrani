import axios from 'axios';
import type { LayoutData } from '@/types/layout';

// Static API endpoint
const API_BASE_URL = 'https://admin.suwayda3mrani.com/api/layout';

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

export const layoutApi = {
  getLayoutData: async (): Promise<LayoutData> => {
    try {
      const response = await api.get<LayoutData>('');
      return response.data;
    } catch (error) {
      console.error('Error fetching layout data:', error);
      throw new Error('Failed to fetch layout data');
    }
  },
};

export default layoutApi;
