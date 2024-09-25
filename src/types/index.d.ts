// src/types/index.d.ts

export interface Task {
    id: number;
    title: string;
    description: string;
    status: 'complete' | 'incomplete';
    created_at: string;
    updated_at: string;
  }