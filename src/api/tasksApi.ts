import axios from 'axios';
import { Task } from '../types'; // Task 型をインポート

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:3001/api/tasks';

export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const response = await axios.get<Task[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error('タスクの取得に失敗しました:', error);
    throw error;
  }
};

export const createTask = async (
  task: Omit<Task, 'id' | 'status' | 'created_at' | 'updated_at'>
): Promise<Task> => {
  try {
    const response = await axios.post<Task>(API_URL, task);
    return response.data;
  } catch (error) {
    console.error('タスクの作成に失敗しました:', error);
    throw error;
  }
};

export const updateTask = async (id: number, task: Partial<Task>): Promise<Task> => {
  try {
    const response = await axios.put<Task>(`${API_URL}/${id}`, task);
    return response.data;
  } catch (error) {
    console.error('タスクの更新に失敗しました:', error);
    throw error;
  }
};

export const deleteTask = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('タスクの削除に失敗しました:', error);
    throw error;
  }
};