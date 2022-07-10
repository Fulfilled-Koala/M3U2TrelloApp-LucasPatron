import { elements } from '../utils/elements';
import { showToast } from './utility/show-toast';

const { toast, closeButton, message } = elements.toasts.success;

export default function showSuccessToast(prompt: string) {
  closeButton.onclick = () => {
    toast.classList.add('-left-full', 'hidden');
    toast.classList.remove('left-0', 'flex');
  };

  if (toast.classList.contains('flex')) {
    setTimeout(() => {
      showToast(prompt, toast, message);
    }, 3000);
    return;
  }
  showToast(prompt, toast, message);
}
