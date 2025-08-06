import axios from 'axios';
import type { TestimonialData } from '@/types/testmonials';

// Static API endpoint - always fetches testimony with ID 1
const API_BASE_URL = 'https://admin.suwayda3mrani.com/api/testimony/1';

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

export const testimonialsApi = {
  getTestimonyData: async (): Promise<TestimonialData> => {
    try {
      const response = await api.get<TestimonialData>('');
      return response.data;
    } catch (error) {
      console.error('Error fetching testimony data:', error);
      throw new Error('Failed to fetch testimony data');
    }
  },
};

export default testimonialsApi;
