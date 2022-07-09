import { elements } from '../utils/elements';
import { LOCAL_STORAGE_KEY } from '../constants/local-storage';
import { render } from '../utils/render-tasks';
import { STORE } from '../store';

const { closeButton, modal, openButton } = elements.clearAllModal;

export function setClearAllModalListeners() {
  openButton.onclick = () => {
    modal.classList.remove('hidden');
    window.localStorage.removeItem(LOCAL_STORAGE_KEY);
    STORE.length = 0;
    render();
  };

  closeButton.onclick = () => {
    modal.classList.add('hidden');
  };
}
