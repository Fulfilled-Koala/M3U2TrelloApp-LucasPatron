export type TaskType = {
  id: number;
  tags: string[];
  description: string;
  comments: string[];
  date: string;
  priority: 'low' | 'medium' | 'high';
  status: 'backlog' | 'work-in-progress' | 'in-review' | 'finished';
};