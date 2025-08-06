import axios from 'axios';
import type { CaseData } from '@/types/case';

// Base API URL
const API_BASE_URL = 'https://admin.suwayda3mrani.com/api';

const api = axios.create({
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

export const caseApi = {
  getCaseData: async (caseId?: string): Promise<CaseData> => {
    try {
      // Use the provided caseId or default to a fallback
      const endpoint = caseId ? `${API_BASE_URL}/case/${caseId}` : `${API_BASE_URL}/case/case-migrations-2025-001`;
      const response = await api.get<CaseData>(endpoint);
      return response.data;
    } catch (error) {
      console.error('Error fetching case data:', error);
      throw new Error('Failed to fetch case data');
    }
  },
};

export default caseApi;
