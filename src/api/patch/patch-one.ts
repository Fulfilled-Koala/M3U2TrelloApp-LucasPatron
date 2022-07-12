import { STORE } from "../../store";
import { Task } from "../../types/task-type";
import { render } from "../../utils/render-tasks";
import axios from "axios";
import showSuccessToast from "../../toasts/success";
import showErrorToast from "../../toasts/error";
import { API_ROOT } from "../../constants/api-url";

export default async function httpPatchOne(task: Task) {
  try {
    const request = await axios.patch(`${API_ROOT}/${task.id}`, task);
    if (request.status === 200) {
      const index = STORE.findIndex(({ id }: Task) => id === task.id);
      STORE[index] = task;
      render();
      showSuccessToast("Successfully updated task");
    } else {
      console.error(request.statusText);
      showErrorToast("Failed to update task");
    }
  } catch (e) {
    console.error(e);
    showErrorToast("Failed to update task");
  }
}
