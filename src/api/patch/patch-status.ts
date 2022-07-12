import { STORE } from "../../store";
import axios from "axios";
import showSuccessToast from "../../toasts/success";
import showErrorToast from "../../toasts/error";
import { API_ROOT } from "../../constants/api-url";

export default async function httpPatchStatus(
  id: number,
  status: "backlog" | "work-in-progress" | "in-review" | "finished",
): Promise<void> {
  if (!["backlog", "work-in-progress", "in-review", "finished"].includes(status))
    return showErrorToast("Invalid status");
  if (isNaN(id)) return showErrorToast("Invalid task id");

  try {
    const request = await axios.patch(`${API_ROOT}/status/${id}`, { status });
    if (request.status === 200) {
      const { id, status } = request.data.task;
      for (const task of STORE) {
        if (task.id === id) {
          task.status = status;
        }
      }
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
