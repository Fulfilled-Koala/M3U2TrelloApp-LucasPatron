import { STORE } from '../api/store';
import { LOCAL_STORAGE_KEY } from '../constants/local-storage';
import { elements } from '../utils/elements';

const { closeButton, modal, openButton } = elements.saveAllModal;

export function setSaveAllModalListeners() {
  openButton.onclick = () => {
    modal.classList.remove('hidden');
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(STORE));
  };

  closeButton.onclick = () => {
    modal.classList.add('hidden');
  };
}
