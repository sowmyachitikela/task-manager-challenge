import axios from 'axios';
import type { Task } from '../types/Task';

const API_URL = 'https://task-manager-challenge.onrender.com/api/tasks';

export const getTasks = async () => (await axios.get<Task[]>(API_URL)).data;

export const createTask = async (task: Partial<Task>) =>
  (await axios.post<Task>(API_URL, task)).data;

export const deleteTask = async (id: string) =>
  await axios.delete(`${API_URL}/${id}`);

export const updateTask = async (id: string, task: Partial<Task>) =>
  (await axios.put<Task>(`${API_URL}/${id}`, task)).data;



