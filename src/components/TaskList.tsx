// src/components/TaskList.tsx

import React from 'react';
import TaskItem from './TaskItem';
import useTasks from '../hooks/useTask';

// タスク一覧を表示するコンポーネント
const TaskList: React.FC = () => {
  const { tasks, loading, error } = useTasks(); // カスタムフックからタスクと状態を取得
  console.log('tasks:', tasks); 

  if (loading) return <p>ロード中...</p>; // ローディング中の表示
  if (error) return <p className="text-red-500">{error}</p>; // エラー時の表示

  return (
    <div className="space-y-4">
      
      {tasks.map((task) => (
        // 各タスクを TaskItem コンポーネントとして表示
        <TaskItem key={task.id} task={task} />
      ))}*/
    </div>
  );
};

export default TaskList;