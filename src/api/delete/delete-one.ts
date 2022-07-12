import axios from "axios";
import { STORE } from "../../store";
import { Task } from "../../types/task-type";
import showErrorToast from "../../toasts/error";
import showSuccessToast from "../../toasts/success";
import { render } from "../../utils/render-tasks";
import { API_ROOT } from "../../constants/api-url";

export default async function httpDeleteOne(id: number): Promise<void> {
  try {
    const request = await axios.delete(`${API_ROOT}/${id}`);

    if (request.status === 200) {
      const taskIndex = STORE.findIndex((task: Task) => task.id === id);
      STORE.splice(taskIndex, 1);
      render();
      showSuccessToast("Successfully deleted task");
    } else {
      console.error(request.statusText);
      showErrorToast("Failed to delete task");
    }
  } catch (e) {
    console.error(e);
    showErrorToast("Failed to delete task");
  }
}
