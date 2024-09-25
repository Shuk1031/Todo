import { useState, useEffect } from 'react';
import { Task } from '../types'; // Task 型をインポート
import * as tasksApi from '../api/tasksApi';

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const fetchedTasks = await tasksApi.fetchTasks();
        console.log('fetchedTasks:', fetchedTasks); 
        setTasks(fetchedTasks);
      } catch (err) {
        console.error('タスクの取得に失敗しました:', err);
        setError('タスクの取得に失敗しました。');
      } finally {
        setLoading(false);
      }
    };

    getTasks();
  }, []);

  const addTask = async (
    task: Omit<Task, 'id' | 'status' | 'created_at' | 'updated_at'>
  ) => {
    try {
      const newTask = await tasksApi.createTask(task);
      setTasks((prevTasks) => [...prevTasks, newTask]);
    } catch (err) {
      console.error('タスクの追加に失敗しました:', err);
      setError('タスクの追加に失敗しました。');
    }
  };

  const updateTask = async (id: number, updates: Partial<Task>) => {
    try {
      const updatedTask = await tasksApi.updateTask(id, updates);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === id ? updatedTask : task))
      );
    } catch (err) {
      console.error('タスクの更新に失敗しました:', err);
      setError('タスクの更新に失敗しました。');
    }
  };

  const deleteTask = async (id: number) => {
    try {
      await tasksApi.deleteTask(id);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (err) {
      console.error('タスクの削除に失敗しました:', err);
      setError('タスクの削除に失敗しました。');
    }
  };

  return {
    tasks,
    loading,
    error,
    addTask,
    updateTask,
    deleteTask,
  };
};

export default useTasks;