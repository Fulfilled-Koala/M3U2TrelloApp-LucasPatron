import axios from "axios";
import { API_ROOT } from "../../constants/api-url";
import showErrorToast from "../../toasts/error";
import showSuccessToast from "../../toasts/success";

export async function httpDeleteAll(): Promise<void> {
  try {
    const response = await axios.delete(API_ROOT);
    if (response.status === 200) {
      showSuccessToast("Successfully deleted all tasks");
    } else {
      showErrorToast("Failed to delete all tasks");
      console.error(response.statusText);
    }
  } catch (e) {
    showErrorToast("Failed to delete all tasks");
    console.error(e);
  }
}
