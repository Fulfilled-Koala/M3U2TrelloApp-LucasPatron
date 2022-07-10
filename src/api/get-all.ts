import { TaskType } from '../types/task-type';
import axios from 'axios';
import showSuccessToast from '../toasts/success';
import showErrorToast from '../toasts/error';

export async function httpGetAll(): Promise<TaskType[]> {
  try {
    const response = await axios.get(process.env.API_ROOT);
    if (response.status === 200) {
      showSuccessToast('Successfully fetched all tasks');
      return response.data.tasks as TaskType[];
    }

    showErrorToast('Failed to fetch all tasks');
    console.error(response.statusText);
    return Promise.reject(response.statusText);
  } catch (e) {
    showErrorToast('Failed to fetch all tasks');
    console.error(e);
  }
}
