import axios from 'axios';
import type { TimelineData } from '@/types/timeline';

// Static API endpoint
const API_BASE_URL = 'https://admin.suwayda3mrani.com/api/timeline';

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

export const timelineApi = {
  getTimelineData: async (): Promise<TimelineData> => {
    try {
      const response = await api.get<TimelineData>('');
      return response.data;
    } catch (error) {
      console.error('Error fetching timeline data:', error);
      throw new Error('Failed to fetch timeline data');
    }
  },
};

export default timelineApi;
