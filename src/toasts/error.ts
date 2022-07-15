import { elements } from "../utils/elements";
import { appendEventListener } from "./utils/show-toast";

export default function showErrorToast(prompt: string) {
  appendEventListener({ ...elements.toasts.error, prompt });
}
