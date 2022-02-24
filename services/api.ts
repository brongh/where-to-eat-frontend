import axios from "axios";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const instance = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: {
    "X-Custom-Header": "where-to-eat",
  },
});
