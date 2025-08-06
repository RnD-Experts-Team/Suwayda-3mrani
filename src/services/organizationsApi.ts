import axios from 'axios';
import type { OrganizationsData } from '@/types/organizations';

// Placeholder API endpoint - replace with actual API URL
const API_BASE_URL = 'https://admin.suwayda3mrani.com/api';

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

export const organizationsApi = {
  getOrganizationsData: async (organizationId: string): Promise<OrganizationsData> => {
    try {
      // Use the provided organizationId or default to '1'
      const endpoint = organizationId ? `${API_BASE_URL}/organization/${organizationId}` : `${API_BASE_URL}/organization/1`;
      const response = await api.get<OrganizationsData>(endpoint);
      return response.data;
    } catch (error) {
      console.error('Error fetching organizations data:', error);
      throw new Error('Failed to fetch organizations data');
    }
  },
};

export default organizationsApi;
