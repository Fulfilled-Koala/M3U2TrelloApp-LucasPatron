import { STORE } from '../store';
import { TaskType } from '../types/task-type';
import { render } from '../utils/render-tasks';
import axios from 'axios';
import showSuccessToast from '../toasts/success';
import showErrorToast from '../toasts/error';

export default async function httpPatchOne(task: TaskType) {
  const request = await axios.patch(`${process.env.API_ROOT}/${task.id}`, task);
  if (request.status === 200) {
    const index = STORE.findIndex(({ id }) => id === task.id);
    STORE[index] = task;
    render();
    showSuccessToast('Successfully updated task');
  } else {
    console.error(request.statusText);
    showErrorToast('Failed to update task');
  }
}
