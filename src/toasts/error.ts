import { elements } from '../utils/elements';

const { toast, closeButton, message } = elements.toasts.error;

export default function showErrorToast(prompt: string) {
  message.textContent = prompt;
  toast.classList.remove('hidden', '-left-full');
  toast.classList.add('flex', 'left-0');

  closeButton.onclick = () => {
    toast.classList.add('-left-full');
    toast.classList.remove('left-0');
    setTimeout(() => {
      toast.classList.add('hidden');
      toast.classList.remove('flex');
    }, 3000);
  };

  setTimeout(() => {
    toast.classList.add('-left-full');
    toast.classList.remove('left-0');
    setTimeout(() => {
      toast.classList.add('hidden');
      toast.classList.remove('flex');
    }, 3000);
  }, 3000);
}
