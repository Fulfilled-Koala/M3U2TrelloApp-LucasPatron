import { LOCAL_STORAGE_KEY } from '../constants/local-storage';
import { STORE } from '.';
import { TaskType } from '../types/task-type';

export function setStatus(
  id: number,
  status: 'backlog' | 'work-in-progress' | 'in-review' | 'finished',
) {
  if (!['backlog', 'work-in-progress', 'in-review', 'finished'].includes(status)) return;
  if (isNaN(id)) return;

  const newTasks: TaskType[] = STORE.map((task: TaskType) => {
    if (task.id === id) {
      task.status = status;
    }
    return task;
  });
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
}
