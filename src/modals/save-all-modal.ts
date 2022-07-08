import { STORE } from '../api/store';
import { LOCAL_STORAGE_KEY } from '../constants/local-storage';
import { elements } from '../utils/elements';

export function setSaveAllModalListeners() {
  elements.saveButton.onclick = () => {
    elements.saveAllModal.classList.remove('hidden');
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(STORE));
  };

  elements.saveAllModalClose.onclick = () => {
    elements.saveAllModal.classList.add('hidden');
  };
}
