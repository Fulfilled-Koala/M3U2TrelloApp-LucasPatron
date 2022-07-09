import './style.css';
import { initializeStore } from './api/store';
import { setClearAllModalListeners } from './modals/clear-all-modal';
import { setAddTaskModalListeners } from './modals/add-task-modal';
import { setEditTaskModalListeners } from './modals/edit-task-modal';

initializeStore();

setClearAllModalListeners();
setAddTaskModalListeners();
setEditTaskModalListeners();
