import axios from 'axios';
import type { DataOverviewData } from '@/types/dataOverview';

// Static API endpoint
const API_BASE_URL = 'https://admin.suwayda3mrani.com/api/data-overview';

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

export const dataOverviewApi = {
  getDataOverviewData: async (): Promise<DataOverviewData> => {
    try {
      const response = await api.get<DataOverviewData>('');
      return response.data;
    } catch (error) {
      console.error('Error fetching data overview data:', error);
      throw new Error('Failed to fetch data overview data');
    }
  },
};

export default dataOverviewApi;
