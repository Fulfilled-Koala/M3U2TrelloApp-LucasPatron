import { elements } from "../utils/elements";
import { render } from "../utils/render-tasks";
import { STORE } from "../store";
import { httpDeleteAll } from "../api/delete/delete-all";

const { closeButton, modal, openButton } = elements.clearAllModal;

export function setClearAllModalListeners() {
  openButton.onclick = () => {
    modal.classList.remove("hidden");
    STORE.length = 0;
    httpDeleteAll();
    render();
  };

  closeButton.onclick = () => {
    modal.classList.add("hidden");
  };
}
