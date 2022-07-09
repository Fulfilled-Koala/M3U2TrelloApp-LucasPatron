import { LOCAL_STORAGE_KEY } from '../constants/local-storage';
import { STORE } from '.';
import { TaskType } from '../types/task-type';
import { render } from '../utils/render-tasks';

export function addOne(task: TaskType) {
  STORE.push(task);
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(STORE));
  render();
}
