import { LOCAL_STORAGE_KEY } from '../constants/local-storage';
import { TaskType } from '../types/task-type';
import { render } from '../utils/render-tasks';

export const STORE: TaskType[] = [];

export default function initializeStore(): void {
  const tasks = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  if (tasks) {
    if (!Array.isArray(JSON.parse(tasks))) return alert('Invalid data in local storage');
    const tasksArray = JSON.parse(tasks) as unknown[];

    if (!tasksArray.every((task: unknown) => task instanceof Object && task.constructor === Object))
      return alert('Invalid data in local storage');

    if (
      !tasksArray.every((task: { [key: string]: unknown }) => {
        return (
          task.id &&
          task.tags &&
          task.description &&
          task.comments &&
          task.date &&
          task.dueDate &&
          task.priority &&
          task.status
        );
      })
    )
      return alert('Invalid data in local storage');

    STORE.push(...(tasksArray as TaskType[]));
  }
  render();
}
