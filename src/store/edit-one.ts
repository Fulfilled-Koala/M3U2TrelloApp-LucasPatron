import { LOCAL_STORAGE_KEY } from '../constants/local-storage';
import { TaskType } from '../types/task-type';
import { render } from '../utils/render-tasks';
import { STORE } from '.';

export function editOne(task: TaskType): void {
  const index = STORE.findIndex(({ id }) => id === task.id);
  STORE[index] = task;
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(STORE));
  render();
}
