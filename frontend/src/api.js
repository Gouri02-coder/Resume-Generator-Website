// src/api.js
import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';

// Automatically attach token if present
const api = axios.create({
  baseURL: API_BASE,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ---------- AUTH ----------
export const registerUser = async (payload) => {
  const { data } = await api.post('/api/auth/register', payload);
  return data;
};

export const loginUser = async (payload) => {
  const { data } = await api.post('/api/auth/login', payload);
  // save token for later use
  if (data.token) {
    localStorage.setItem('token', data.token);
  }
  return data;
};

// ---------- RESUMES ----------
export const saveResume = async (payload) => {
  const { data } = await api.post('/api/resumes', payload);
  return data;
};

export const listResumes = async () => {
  const { data } = await api.get('/api/resumes');
  return data;
};

export const getResume = async (id) => {
  const { data } = await api.get(`/api/resumes/${id}`);
  return data;
};

export const updateResume = async (id, payload) => {
  const { data } = await api.put(`/api/resumes/${id}`, payload);
  return data;
};

export const deleteResume = async (id) => {
  const { data } = await api.delete(`/api/resumes/${id}`);
  return data;
};
