import { elements } from '../utils/elements';

export function setEditTaskModalListeners() {
  elements.editTaskModal.closeButton.onclick = () => {
    elements.editTaskModal.modal.classList.add('hidden');
  };
}
