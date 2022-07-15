import { elements } from "../../utils/elements";

function showToast(prompt: string, toast: HTMLDivElement, message: HTMLParagraphElement) {
  message.textContent = prompt;
  toast.classList.remove("hidden", "-left-full");
  toast.classList.add("flex", "left-0");

  setTimeout(() => {
    toast.classList.add("-left-full", "hidden");
    toast.classList.remove("left-0", "flex");
  }, 3000);
}

export function appendEventListener({
  toast,
  closeButton,
  message,
  prompt,
}: typeof elements.toasts.error & { prompt: string }) {
  closeButton.onclick = () => {
    toast.classList.add("-left-full", "hidden");
    toast.classList.remove("left-0", "flex");
  };

  if (toast.classList.contains("flex")) {
    setTimeout(() => {
      showToast(prompt, toast, message);
    }, 3000);
    return;
  }
  showToast(prompt, toast, message);
}
