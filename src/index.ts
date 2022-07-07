import { addOne } from './api/add-one';
import { LOCAL_STORAGE_KEY } from './constants/local-storage';
import { initializeStore, STORE } from './api/store';
import './style.css';
import { TaskType } from './types/task-type';
import { elements } from './utils/elements';

initializeStore();

// -- MODALS
// SAVE ALL MODAL
elements.saveButton.onclick = () => {
  elements.saveAllModal.classList.remove('hidden');
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(STORE));
};

elements.saveAllModalClose.onclick = () => {
  elements.saveAllModal.classList.add('hidden');
};

// ADD TASK MODAL
elements.addTaskModalButton.onclick = () => {
  elements.addTaskModal.classList.remove('hidden');
};

elements.addTaskModalForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const labels: HTMLCollection = (e.target as HTMLElement).children;
  const inputs: Array<HTMLInputElement | HTMLSelectElement> = [...labels]
    .map((label: HTMLLabelElement) => {
      for (const el of label.children) {
        if (el instanceof HTMLInputElement || el instanceof HTMLSelectElement) {
          return el;
        }
      }
    })
    .filter(Boolean);

  const task: TaskType = {
    id: STORE.length + 1,
    tags: [],
    description: '',
    comments: [],
    priority: 'low',
    status: 'backlog',
    date: new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }),
  };

  inputs.forEach((input: HTMLInputElement | HTMLSelectElement) => {
    if (!input) return;

    const { name, value } = input;
    switch (name) {
      case 'description':
        task.description = value;
        break;
      case 'tags':
        task.tags = value.split(',').map((tag: string) => tag.trim());
        break;
      case 'priority':
        if (value === 'low' || value === 'medium' || value === 'high') {
          task.priority = value;
        }
        break;
      case 'status':
        if (
          value === 'backlog' ||
          value === 'work-in-progress' ||
          value === 'in-review' ||
          value === 'finished'
        ) {
          task.status = value;
        }
        break;
      default:
        break;
    }
  });

  addOne(task);
  elements.addTaskModal.classList.add('hidden');
  inputs.forEach((input: HTMLInputElement | HTMLSelectElement | undefined) => {
    if (!input) return;

    if (input instanceof HTMLSelectElement && input.name === 'status') input.value = 'backlog';
    if (input instanceof HTMLSelectElement && input.name === 'priority') input.value = 'low';
    input.value = '';
  });
};

elements.addTaskModalClose.onclick = () => {
  elements.addTaskModal.classList.add('hidden');
};
