import axios from 'axios';
import type { CrisesArchiveData } from '@/types/crisesArchive';

/* ⇢ Replace with your real endpoint */
const API_BASE_URL = 'https://admin.suwayda3mrani.com/api/about';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  },
  withCredentials: false,
});

export const crisesArchiveApi = {
  async getArchiveData(): Promise<CrisesArchiveData> {
    try {
      const res = await api.get<CrisesArchiveData>('');
      return res.data;
    } catch (err) {
      console.error('Error fetching crises-archive data:', err);
      throw new Error('Failed to fetch crises-archive data');
    }
  },
};

export default crisesArchiveApi;
