// src/components/TaskItem.tsx

// src/components/TaskItem.tsx

import React from 'react';
import { Task } from '../types';
import useTasks from '../hooks/useTask';

// TaskItemコンポーネントのプロパティの型定義
interface TaskItemProps {
  task: Task;
}

// 個別のタスクを表示するコンポーネント
const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { updateTask, deleteTask } = useTasks(); // タスクの編集・削除機能を取得

  // タスクのステータスを切り替える関数
  const toggleStatus = () => {
    const newStatus = task.status === 'complete' ? 'incomplete' : 'complete';
    updateTask(task.id, { status: newStatus });
  };

  // タスクを削除する関数
  const handleDelete = () => {
    if (window.confirm('本当にこのタスクを削除しますか？')) {
      deleteTask(task.id);
    }
  };

  return (
    // タスクのステータスに応じて背景色を変更
    <div
      className={`p-4 border rounded ${
        task.status === 'complete' ? 'bg-green-100' : 'bg-red-100'
      }`}
    >
      <div className="flex justify-between items-center">
        <div>
          {/* タスクのタイトル */}
          <h3 className="text-xl font-semibold">{task.title}</h3>
          {/* タスクの詳細 */}
          <p className="text-gray-600">{task.description}</p>
          {/* タグの表示部分を削除 */}
        </div>
        <div className="flex space-x-2">
          {/* ステータスを切り替えるボタン */}
          <button onClick={toggleStatus} className="text-green-500">
            {task.status === 'complete' ? '未完了' : '完了'}
          </button>
          {/* タスク削除ボタン */}
          <button onClick={handleDelete} className="text-red-500">
            削除
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;