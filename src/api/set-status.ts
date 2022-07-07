import { LOCAL_STORAGE_KEY } from '../constants/local-storage';
import { STORE } from './store';
import { TaskType } from '../types/task-type';

export function setStatus(
  id: number,
  status: 'backlog' | 'work-in-progress' | 'in-review' | 'finished',
) {
  const newTasks: TaskType[] = STORE.map((task: TaskType) => {
    if (task.id === id) {
      task.status = status;
    }
    return task;
  });
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
}
