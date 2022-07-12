import { Task } from "../../types/task-type";
import axios from "axios";
import showSuccessToast from "../../toasts/success";
import showErrorToast from "../../toasts/error";
import { API_ROOT } from "../../constants/api-url";

export async function httpGetAll(): Promise<Task[] | undefined> {
  try {
    const response = await axios.get(API_ROOT);

    if (response.status === 200) {
      showSuccessToast("Successfully fetched all tasks");
      return response.data.tasks as Task[];
    }

    showErrorToast("Failed to fetch all tasks");
    console.error(response.statusText);
    return Promise.reject(response.statusText);
  } catch (e) {
    console.error(e);
    showErrorToast("Failed to fetch all tasks");
    return Promise.reject(e);
  }
}
