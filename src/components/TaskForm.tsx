// src/components/TaskForm.tsx

// src/components/TaskForm.tsx

import React, { useState } from 'react';
import useTasks from '../hooks/useTask';

// タスクの作成・編集フォームコンポーネント
const TaskForm: React.FC = () => {
  const [title, setTitle] = useState<string>(''); // タイトルのステート
  const [description, setDescription] = useState<string>(''); // 詳細のステート
  const { addTask } = useTasks(); // タスク追加機能を取得

  // フォーム送信時の処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // デフォルトのフォーム送信を防止
    if (!title.trim()) return; // タイトルが空の場合は何もしない

    
    // 新しいタスクを追加
    await addTask({ title, description });

    // フォームの入力値をリセット
    setTitle('');
    setDescription('');
    
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded">
      <div>
        {/* タイトル入力フィールド */}
        <label className="block text-sm font-medium">タイトル</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mt-1 block w-full border rounded p-2"
          placeholder="タスクのタイトル"
        />
      </div>
      <div>
        {/* 詳細入力フィールド */}
        <label className="block text-sm font-medium">詳細</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full border rounded p-2"
          placeholder="タスクの詳細"
        />
      </div>
      
      {/* タスク追加ボタン */}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        タスクを追加
      </button>
    </form>
  );
};

export default TaskForm;