import axios from 'axios';
import { STORE } from '../store';
import showErrorToast from '../toasts/error';
import showSuccessToast from '../toasts/success';
import { TaskType } from '../types/task-type';

export default async function httpPatchComment(
  id: number,
  comment: Partial<TaskType['comments'][0]>,
): Promise<TaskType> {
  try {
    const request = await axios.patch(`${process.env.API_ROOT}/comments/${id}`, { comment });
    if (request.status === 200) {
      const task = request.data.task as TaskType;
      STORE.splice(STORE.indexOf(STORE.find((task) => task.id === id)), 1, task);
      showSuccessToast('Successfully added comment');
      return task;
    }
  } catch (e) {
    showErrorToast('Failed to add comment');
    console.error(e);
  }
}
