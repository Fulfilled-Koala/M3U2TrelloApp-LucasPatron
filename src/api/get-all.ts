import { TaskType } from '../types/task-type';

export async function httpGetAll(): Promise<TaskType[]> {
  const response = await fetch(process.env.API_ROOT, {
    method: 'GET',
  });
  const json = await response.json();
  return json as TaskType[];
}
