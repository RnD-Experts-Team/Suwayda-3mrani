import axios from "axios";
import type { MediaPageData } from "@/types/gallery";

/* ⇢ swap with your actual endpoint */
const API_BASE_URL = "https://admin.suwayda3mrani.com/api/media-gallery";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  },
  withCredentials: false,
});

export const mediaApi = {
  async getMediaData(): Promise<MediaPageData> {
    try {
      const res = await api.get<{ success: boolean; data: MediaPageData }>("");
      return res.data.data; // Extract the nested data
    } catch (err) {
      console.error("Error fetching media data:", err);
      throw new Error("Failed to fetch media data");
    }
  },
};

export default mediaApi;
