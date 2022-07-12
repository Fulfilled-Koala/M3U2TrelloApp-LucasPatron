import { setAddTaskModalListeners } from "./add-task";
import { setClearAllModalListeners } from "./clear-all";
import { setEditTaskModalListeners } from "./edit-task";

export default function initializeEventListeners() {
  setClearAllModalListeners();
  setAddTaskModalListeners();
  setEditTaskModalListeners();
}
