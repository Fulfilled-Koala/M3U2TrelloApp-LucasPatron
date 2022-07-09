import { setAddTaskModalListeners } from './add-task-modal';
import { setClearAllModalListeners } from './clear-all-modal';
import { setEditTaskModalListeners } from './edit-task-modal';

export default function initializeEventListeners() {
  setClearAllModalListeners();
  setAddTaskModalListeners();
  setEditTaskModalListeners();
}
