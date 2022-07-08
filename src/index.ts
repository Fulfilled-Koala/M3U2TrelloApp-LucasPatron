import './style.css';
import { initializeStore } from './api/store';
import { setSaveAllModalListeners } from './modals/save-all-modal';
import { setAddTaskModalListeners } from './modals/add-task-modal';
import { setEditTaskModalListeners } from './modals/edit-task-modal';

initializeStore();

setSaveAllModalListeners();
setAddTaskModalListeners();
setEditTaskModalListeners();
