import { STORE } from './store';
import { TaskType } from '../types/task-type';

export function removeOne(task: TaskType) {
  const index = STORE.findIndex((t: TaskType) => t.id === task.id);
  if (index > -1) {
    STORE.splice(index, 1);
  }
  window.localStorage.setItem('tasks', JSON.stringify(STORE));
}
