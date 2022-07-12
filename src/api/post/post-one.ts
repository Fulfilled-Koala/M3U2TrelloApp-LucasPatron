import { STORE } from "../../store";
import { Task } from "../../types/task-type";
import { render } from "../../utils/render-tasks";
import axios from "axios";
import showSuccessToast from "../../toasts/success";
import showErrorToast from "../../toasts/error";
import { API_ROOT } from "../../constants/api-url";

export default async function httpPostOne(task: Task): Promise<void> {
  try {
    const request = await axios.post(API_ROOT, task);
    if (request.status === 200) {
      STORE.push(request.data.task);
      render();
      showSuccessToast("Successfully created task");
    } else {
      console.error(request.statusText);
      showErrorToast("Failed to create task");
    }
  } catch (e) {
    console.error(e);
    showErrorToast("Failed to create task");
  }
}
