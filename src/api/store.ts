import { LOCAL_STORAGE_KEY } from '../constants/local-storage';
import { TaskType } from '../types/task-type';
import { render } from '../utils/render-tasks';

// Pages (including tasks)
export const STORE: TaskType[] = [];

export function initializeStore(): void {
  const tasks = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  if (tasks) {
    STORE.push(...JSON.parse(tasks));
    render();
  }
}
