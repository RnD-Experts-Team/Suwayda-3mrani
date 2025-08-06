import axios from 'axios';
import type { StoriesData } from '@/types/stories';

// API endpoint
const API_BASE_URL = 'https://admin.suwayda3mrani.com/api/testimonials';

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

export const storiesApi = {
  getStoriesData: async (): Promise<StoriesData> => {
    try {
      const response = await api.get<StoriesData>('');
      return response.data;
    } catch (error) {
      console.error('Error fetching stories data:', error);
      throw new Error('Failed to fetch stories data');
    }
  },
};

export default storiesApi;
