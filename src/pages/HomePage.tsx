// src/pages/HomePage.tsx

import React from 'react';
import { TaskList } from '../components/TaskList';
import { TaskForm } from '../components/TaskForm';
import { FilterBar } from '../components/FilterBar';

// ホームページ（タスク管理画面）コンポーネント
export const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      {/* アプリケーションのタイトル */}
      <h1 className="text-3xl font-bold mb-4">ToDoリスト</h1>
      {/* タスク追加フォーム */}
      <TaskForm />
      {/* フィルターバー */}
      <FilterBar />
      {/* タスク一覧表示 */}
      <TaskList />
    </div>
  );
};