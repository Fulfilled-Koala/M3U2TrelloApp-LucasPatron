import { LOCAL_STORAGE_KEY } from '../constants/local-storage';
import { TaskType } from '../types/task-type';
import { render } from '../utils/render-tasks';

// Pages (including tasks)
export const STORE: TaskType[] = [];

export function initializeStore(): void {
  const tasks = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  if (tasks) {
    STORE.push(...JSON.parse(tasks));
    render();
  }
}

// List Items
export const LIST_ITEMS = Array.from(document.querySelectorAll('li'));

export function updateListItems(type: 'add' | 'remove'): void {
  const listItems = LIST_ITEMS;
  const newListItems = document.querySelectorAll('li');
  for (const newListItem of newListItems) {
    if (type === 'add') {
      listItems.push(newListItem);
    } else {
      listItems.splice(listItems.indexOf(newListItem), 1);
    }
  }
}
