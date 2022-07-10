import { httpGetAll } from '../api/get-all';
import { TaskType } from '../types/task-type';
import { render } from '../utils/render-tasks';

export const STORE: TaskType[] = [];

export default async function initializeStore(): Promise<void> {
  const tasks = await httpGetAll();
  STORE.push(...tasks);
  render();
}
