import { TaskType } from '../types/task-type';
import axios from 'axios';
import showSuccessToast from '../toasts/success';
import showErrorToast from '../toasts/error';

export async function httpGetAll(): Promise<TaskType[]> {
  const response = await axios.get(process.env.API_ROOT);
  if (response.status === 200) {
    showSuccessToast('Successfully fetched all tasks');
    const tasks = response.data.tasks as TaskType[];
    return tasks;
  } else {
    showErrorToast('Failed to fetch all tasks');
    console.error(response.statusText);
    return Promise.reject(response.statusText);
  }
}
