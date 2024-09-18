
// src/components/FilterBar.tsx

import React, { useState } from 'react';
import { useTasks } from '../hooks/useTask';

// フィルタリング機能を提供するコンポーネント
export const FilterBar: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<'all' | 'complete' | 'incomplete'>('all'); // ステータスフィルターのステート
  const [tagFilter, setTagFilter] = useState<string>(''); // タグフィルターのステート
  const { tasks } = useTasks(); // 全タスクを取得

  // ユニークなタグのリストを作成
  const uniqueTags = Array.from(new Set(tasks.flatMap(task => task.tags)));

  // フィルタリングされたタスクを返す関数
  const filterTasks = () => {
    return tasks.filter(task => {
      const statusMatch = statusFilter === 'all' || task.status === statusFilter;
      const tagMatch = tagFilter === '' || task.tags.includes(tagFilter);
      return statusMatch && tagMatch;
    });
  };

  // フィルタリングロジックを外部から利用するために、カスタムフックの修正が必要かもしれません。
  // 現在のuseTasksではフィルタリング機能が含まれていないため、ここでは簡略化します。

  return (
    <div className="flex space-x-4 p-4">
      <div>
        {/* ステータスフィルターのドロップダウン */}
        <label className="block text-sm font-medium">ステータス</label>
        <select
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value as 'all' | 'complete' | 'incomplete')}
          className="mt-1 block border rounded p-2"
        >
          <option value="all">全て</option>
          <option value="complete">完了</option>
          <option value="incomplete">未完了</option>
        </select>
      </div>
      <div>
        {/* タグフィルターのドロップダウン */}
        <label className="block text-sm font-medium">タグ</label>
        <select
          value={tagFilter}
          onChange={e => setTagFilter(e.target.value)}
          className="mt-1 block border rounded p-2"
        >
          <option value="">全て</option>
          {uniqueTags.map(tag => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};