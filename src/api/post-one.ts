import { STORE } from '../store';
import { TaskType } from '../types/task-type';
import { render } from '../utils/render-tasks';
import axios from 'axios';
import showSuccessToast from '../toasts/success';
import showErrorToast from '../toasts/error';

export default async function httpPostOne(task: TaskType) {
  const request = await axios.post(process.env.API_ROOT, task);
  if (request.status === 200) {
    STORE.push(request.data.task);
    render();
    showSuccessToast('Successfully created task');
  } else {
    console.error(request.statusText);
    showErrorToast('Failed to create task');
  }
}
