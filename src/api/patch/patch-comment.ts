import axios from "axios";
import { API_ROOT } from "../../constants/api-url";
import { STORE } from "../../store";
import showErrorToast from "../../toasts/error";
import showSuccessToast from "../../toasts/success";
import { Task } from "../../types/task-type";

export default async function httpPatchComment(
  id: number,
  comment: Partial<Task["comments"][0]>,
): Promise<Task | undefined> {
  try {
    const request = await axios.patch(`${API_ROOT}/comments/${id}`, { comment });
    if (request.status === 200) {
      const task = request.data.task as Task;
      const taskExists: Task | undefined = STORE.find((task: Task) => task.id === id);
      if (taskExists) {
        STORE.splice(STORE.indexOf(taskExists), 1, task);
        showSuccessToast("Successfully added comment");
      }
      return task;
    }
    showErrorToast("Failed to add comment");
    return Promise.reject(request.statusText);
  } catch (e) {
    console.error(e);
    showErrorToast("Failed to add comment");
    return Promise.reject(e);
  }
}
