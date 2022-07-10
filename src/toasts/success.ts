import { elements } from '../utils/elements';

const { toast, closeButton } = elements.toasts.success;

export default function showSuccessToast() {
  toast.classList.add('hidden');
  toast.classList.remove('flex');

  closeButton.onclick = () => {
    toast.classList.remove('hidden');
    toast.classList.add('flex');
  };

  setTimeout(() => {
    toast.classList.remove('hidden');
    toast.classList.add('flex');
  }, 3000);
}
