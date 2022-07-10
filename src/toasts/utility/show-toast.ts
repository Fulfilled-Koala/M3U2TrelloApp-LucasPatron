export function showToast(prompt: string, toast: HTMLDivElement, message: HTMLParagraphElement) {
  message.textContent = prompt;
  toast.classList.remove('hidden', '-left-full');
  toast.classList.add('flex', 'left-0');

  setTimeout(() => {
    toast.classList.add('-left-full', 'hidden');
    toast.classList.remove('left-0', 'flex');
  }, 3000);
}
