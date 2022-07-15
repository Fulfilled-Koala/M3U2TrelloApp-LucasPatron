import { elements } from "../utils/elements";
import { appendEventListener } from "./utils/show-toast";

export default function showSuccessToast(prompt: string) {
  appendEventListener({ ...elements.toasts.success, prompt });
}
