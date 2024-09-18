import { useState, useEffect} from "react";
import { fetchTasks,createTask,updateTask,deleteTask,Task } from "../api/tasksApi";

export const useTasks = () => {
    const[tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string |null>(null);

    useEffect (() => {
        const loadTasks = async () => {
            try {
                const data = await fetchTasks();
                setTasks(data);

            } catch (err) {
                setError('タスクの取得に失敗しました');
            } finally {
                setLoading(false);
            }
        };
    }, []);
    const addTask = async (task: Omit<Task, 'id' | 'status' | 'created_at' | 'updated_at'>) => {
        try {
            const newTask =await createTask(task);
            setTasks([...tasks, newTask]);

        } catch (err) {
            setError('タスクの取得に失敗しました');
        } 
    };
    const editTask = async (id: number, updatedFields: Partial<Task>) => {
        try {
            const updatedTask = await updateTask(id, updatedFields);
            setTasks(tasks.map(t => (t.id === id ? updatedTask : t)));

        } catch (err) {
            setError('タスクの取得に失敗しました');
        } 
    };
    const  removeTask = async (id: number) => {
        try {
            await deleteTask(id);
            setTasks(tasks.filter(t => t.id !== id));

        } catch (err) {
                setError('タスクの取得に失敗しました');
        } 
    };
    return {tasks, loading, error, addTask, editTask, removeTask};
};