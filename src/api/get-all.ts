import { TaskType } from '../types/task-type';
import axios from 'axios';

export async function httpGetAll(): Promise<TaskType[]> {
  const response = (await axios.get(process.env.API_ROOT)).data as { tasks: TaskType[] };
  return response.tasks;
}
